<?php

/**
 * CoreFramework
 *
 * @package   CoreFramework
 * @author    Core Framework <hello@coreframework.com>
 * @copyright 2023 Core Framework
 * @license   EULA + GPLv2
 * @link      https://coreframework.com
 */

declare(strict_types=1);

namespace CoreFramework\App\Frontend;

use CoreFramework\Common\Abstracts\Base;
use CoreFramework\Helper;

/**
 * Class Enqueue
 *
 * @package CoreFramework\App\Frontend
 * @since 0.0.0
 */
class Enqueue extends Base {


	/**
	 * Initialize the class.
	 *
	 * @since 0.0.0
	 */
	public function init(): void {
		/**
		 * This frontend class is only being instantiated in the frontend as requested in the Scaffold class
		 *
		 * @see Requester::isFrontend()
		 * @see Scaffold::__construct
		 */

		if ( is_multisite() ) {
			$helper    = new Helper();
			$file_size = filesize( $helper->getStylesheetPath() );

			if ( $file_size === 0 || $file_size === false ) {
				file_put_contents( $helper->getStylesheetPath(), get_option( 'core_framework_selected_preset_backup', '' ) );
			}
		} else {
			$file_size = filesize( plugin_dir_path( CORE_FRAMEWORK_ABSOLUTE ) . '/assets/public/css/core_framework.css' );

			if ( $file_size === 0 || $file_size === false ) {
				file_put_contents( plugin_dir_path( CORE_FRAMEWORK_ABSOLUTE ) . '/assets/public/css/core_framework.css', get_option( 'core_framework_selected_preset_backup', '' ) );
			}
		}

		$option = get_option( 'core_framework_main', array() );

		if ( isset( $option['has_theme'] ) && $option['has_theme'] === true ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'add_theme_helper' ), 999 );
		}

		if ( CoreFrameworkOxygen()->is_oxygen() ) {
			add_action( 'wp_head', array( $this, 'enqueue_styles_oxygen' ), 1_000_000 );

			$license          = get_option( 'core_framework_oxygen_license_key', false );
			$enable           = isset( $option['oxygen'] ) && $option['oxygen'] && $license;
			$in_oxygen_iframe = sanitize_text_field( filter_input( INPUT_GET, 'oxygen_iframe', FILTER_SANITIZE_FULL_SPECIAL_CHARS ) );

			if ( $in_oxygen_iframe && $enable ) {
				add_action( 'wp_body_open', array( $this, 'enqueue_styles_oxygen_iframe' ), 1_000_000 );
			}

			return;
		}

		if ( CoreFrameworkBricks()->is_bricks() ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles_bricks' ), 999 );
			add_action( 'wp_footer', array( $this, 'enqueue_styles_bricks_iframe' ), 999 );

			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ), 999 );
	}

	/**
	 * This function determines if stylesheet should be loaded.
	 * User can use 'core_framework_exclude_pages' filter to disable loading of stylesheet.
	 * They can pass either post id or slug to the filter.
	 * Usage: add_filter( 'core_framework_exclude_pages', function( $pages ) { $pages[] = 1; return $pages; } );
	 *
	 * @since 1.3.3
	 */
	public function determine_load(): bool {
		$exclude_pages = apply_filters( 'core_framework_exclude_pages', array() ) ?? array();
		if ( empty( $exclude_pages ) ) {
			return true;
		}
		return ! is_page( $exclude_pages );
	}

	/**
	 * Enqueue scripts function
	 *
	 * @since 0.0.0
	 */
	public function enqueue_styles(): void {
		if ( ! $this->determine_load() ) {
			return;
		}

		$helper = new Helper();

		\wp_enqueue_style(
			'core-framework-frontend',
			$helper->getStylesheetUrl(),
			array(),
			$helper->getStylesheetVersion(),
			'all'
		);
	}

	/**
	 * Enqueue styles bricks
	 *
	 * @since 1.0.0
	 */
	public function enqueue_styles_bricks(): void {
		if ( function_exists( 'bricks_is_builder_iframe' ) && bricks_is_builder_iframe() ) {
			return;
		}

		if ( function_exists( 'bricks_is_builder_main' ) && bricks_is_builder_main() ) {

			function is_at_active() {
				if ( \is_plugin_active( 'bricks-advanced-themer/bricks-advanced-themer.php' ) ) {
					return true;
				}

				$prefix         = 'bricks-advanced-themer';
				$active_plugins = get_option( 'active_plugins', array() );

				foreach ( $active_plugins as $plugin ) {
					if ( strpos( $plugin, $prefix ) !== false ) {
						return true;
					}
				}

				return false;
			}

			if ( is_at_active() ) {
				$helper    = new Helper();
				$variables = $helper->getVariableString();

				echo wp_kses(
					'<style id="core-framework-bricks-main-variables">' . htmlspecialchars( $variables ) . '</style>',
					array(
						'style' => array(
							'id' => array(),
						),
					)
				);
			}

			return;
		}

		if ( ! $this->determine_load() ) {
			return;
		}

		$this->enqueue_styles();
	}

	/**
	 * Enqueue styles bricks iframe
	 *
	 * @since 1.2.5
	 */
	public function enqueue_styles_bricks_iframe(): void {
		if ( ! ( function_exists( 'bricks_is_builder_iframe' ) && bricks_is_builder_iframe() && CoreFrameworkBricks()->determine_load() ) ) {
			return;
		}

		$helper  = new Helper();
		$url     = $helper->getStylesheetUrl();
		$version = $helper->getStylesheetVersion();
		$url     = add_query_arg( 'version', $version, $url );

		echo '<link rel="stylesheet" id="core-framework-frontend-bricks-iframe" href="' . esc_url( $url ) . '" type="text/css" media="all" />';
	}

	/**
	 * Enqueue styles oxygen
	 *
	 * @since 0.0.1
	 */
	public function enqueue_styles_oxygen(): void {
		$option            = get_option( 'core_framework_main', array() );
		$license           = get_option( 'core_framework_oxygen_license_key', false );
		$enable            = isset( $option['oxygen'] ) && $option['oxygen'] && $license;
		$in_oxygen_iframe  = sanitize_text_field( filter_input( INPUT_GET, 'oxygen_iframe', FILTER_SANITIZE_FULL_SPECIAL_CHARS ) );
		$in_oxygen_builder = false;

		if ( sanitize_text_field( filter_input( INPUT_GET, 'ct_builder', FILTER_SANITIZE_FULL_SPECIAL_CHARS ) ) ) {
			if ( ! defined( 'OXYGEN_IFRAME' ) ) {
				$in_oxygen_builder = true;
			}
		}

		if ( ! $in_oxygen_builder && ! $in_oxygen_iframe ) {
			if ( $this->determine_load() ) {
				CoreFrameworkOxygen()->enqueue();
			}
		}

		if ( $in_oxygen_builder && $enable ) {
			CoreFrameworkOxygen()->enqueue_helper();
		}
	}

	/**
	 * Enqueue styles oxygen iframe
	 *
	 * @since 1.0.3
	 */
	public function enqueue_styles_oxygen_iframe(): void {
		CoreFrameworkOxygen()->enqueue_styles_oxygen_iframe();
	}

	/**
	 * Add theme helper script if needed
	 *
	 * @since 1.2.0
	 */
	public function add_theme_helper(): void {
		if ( CoreFrameworkBricks()->is_bricks() ) {
			if ( function_exists( 'bricks_is_builder_iframe' ) && bricks_is_builder_iframe() ) {
				return;
			}
		}

		if ( CoreFrameworkOxygen()->is_oxygen() ) {
			$in_oxygen_iframe  = sanitize_text_field( filter_input( INPUT_GET, 'oxygen_iframe', FILTER_SANITIZE_FULL_SPECIAL_CHARS ) );
			$in_oxygen_builder = false;

			if ( sanitize_text_field( filter_input( INPUT_GET, 'ct_builder', FILTER_SANITIZE_FULL_SPECIAL_CHARS ) ) ) {
				if ( ! defined( 'OXYGEN_IFRAME' ) ) {
					$in_oxygen_builder = true;
				}
			}

			if ( $in_oxygen_iframe || $in_oxygen_builder ) {
				return;
			}
		}

		$js_light = '(()=>{const e=localStorage.getItem("cf-theme"),t=document.querySelector("html");["light","dark"].includes(String(e))?t?.classList?.add("dark"===e?"cf-theme-dark":"cf-theme-light"):t?.classList?.add("auto"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?"cf-theme-dark":"cf-theme-light")})();';
		$js_dark  = '(()=>{const e=localStorage.getItem("cf-theme"),t=document.querySelector("html");["light","dark"].includes(String(e))?t?.classList?.add("dark"===e?"cf-theme-dark":"cf-theme-light"):t?.classList?.add("auto"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"cf-theme-dark":"cf-theme-light":"cf-theme-dark")})();';
		$js_auto  = '(()=>{const e=localStorage.getItem("cf-theme"),t=document.querySelector("html");["light","dark"].includes(String(e))?t?.classList?.add("dark"===e?"cf-theme-dark":"cf-theme-light"):t?.classList?.add(window.matchMedia("(prefers-color-scheme: dark)").matches?"cf-theme-dark":"cf-theme-light")})();';

		$option      = get_option( 'core_framework_main', array() );
		$mode        = isset( $option['theme_mode'] ) ? $option['theme_mode'] : 'light';
		$script_name = 'core-framework-theme-loader';
		$script      = $js_light;

		if ( $mode === 'dark' ) {
			$script = $js_dark;
		} elseif ( $mode === 'auto' ) {
			$script = $js_auto;
		}

		\wp_register_script( $script_name, false, array(), $this->plugin->version(), false );
		\wp_enqueue_script( $script_name );
		\wp_add_inline_script( $script_name, $script, 'after' );
	}
}

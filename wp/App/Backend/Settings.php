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

namespace CoreFramework\App\Backend;

use CoreFramework\Common\Abstracts\Base;

/**
 * Class Settings
 *
 * @package CoreFramework\App\Backend
 * @since 0.0.0
 */
class Settings extends Base {

	/**
	 * Initialize the class.
	 *
	 * @since 0.0.0
	 */
	public function init(): void {
		/**
		 * This backend class is only being instantiated in the backend as requested in the Scaffold class
		 *
		 * @see Requester::isAdminBackend()
		 * @see Scaffold::__construct
		 *
		 * Add plugin code here for admin settings specific functions
		 */

		\add_action(
			'admin_menu',
			function (): void {
				\add_menu_page(
					'',
					$this->plugin->namespace(),
					'manage_options',
					CORE_FRAMEWORK_NAME,
					function (): void {
						echo '<div id="core-framework-init"></div>';
						do_action( 'core_framework_backend' );
					},
					'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjQzNTMgNS44NjAyOUgxMC4yOTM1VjkuNzM5NzNIMTcuNDM1M1Y1Ljg2MDI5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTYuODA3NTIgMEMzLjA0NzQ5IDAgMCAzLjA1MDg3IDAgNi44MTUwOEMwIDEwLjU3OTMgMy4wNDc0OSAxMy42MzAyIDYuODA3NTIgMTMuNjMwMkgxMC4yOTlWOS43NTA3Mkg2LjgwNzUyQzUuMTkwNiA5Ljc1MDcyIDMuODc1MTMgOC40MzkyOCAzLjg3NTEzIDYuODE1MDhDMy44NzUxMyA1LjE5NjM2IDUuMTg1MTIgMy44Nzk0NCA2LjgwNzUyIDMuODc5NDRIMTcuNDQwOFYwSDYuODA3NTJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K',
					99
				);
			}
		);
	}
}

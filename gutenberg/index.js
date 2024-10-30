(()=>{"use strict";const e=window.wp.element,t=window.React,r=window.wp.blockEditor,o=window.wp.components,n=window.wp.compose,s=window.wp.plugins,a=function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("rect",{width:"8",height:"8",x:"2",y:"2.5",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",rx:"2",transform:"rotate(90 6 6.5)"}),(0,e.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M2 17.5a4 4 0 014-4 4.062 4.062 0 014 4.003 4 4 0 01-8-.003"}),(0,e.createElement)("rect",{width:"19",height:"9",x:"8",y:"7.5",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",rx:"2",transform:"rotate(90 17.5 12)"}),(0,e.createElement)("path",{fill:"none",d:"M0 0H24V24H0z",transform:"rotate(90 12 12)"}))},l=window.wp.data,c="cf-theme-toggle-button";var i=function(e){return e.DARK="cf-theme-dark",e.LIGHT="cf-theme-light",e}(i||{});const m=({size:t=24,color:r})=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cf-theme-icon cf-light-mode-icon",color:"currentColor",fill:"currentColor",viewBox:"0 0 512 512",style:{width:t,height:t,...r?{fill:r}:{}}},(0,e.createElement)("path",{d:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 11192 0 96 96 0 11-192 0zm224 0a128 128 0 10-256 0 128 128 0 10256 0z"})),d=({size:t=24,color:r})=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cf-theme-icon cf-dark-mode-icon",color:"currentColor",fill:"currentColor",viewBox:"0 0 384 512",style:{width:t,height:t,...r?{fill:r}:{}}},(0,e.createElement)("path",{d:"M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"})),u=({size:t=24,color:r})=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cf-theme-icon cf-light-mode-icon",color:"currentColor",fill:"currentColor",viewBox:"0 0 512 512",style:{width:t,height:t,...r?{fill:r}:{}}},(0,e.createElement)("path",{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5-98.5 18.2c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4l82.6-56.8 82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1-18.2-98.5zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4-45.2 65.6c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3-65.6-45.2c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3l-78.3-14.4 45.2-65.6c5.7-8.2 5.7-19 0-27.2l-45.2-65.6 78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3 65.6 45.2c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 100-224 112 112 0 100 224zm-64-112a64 64 0 11128 0 64 64 0 11-128 0z"})),w=({size:t=24,color:r})=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cf-theme-icon cf-dark-mode-icon",color:"currentColor",fill:"currentColor",viewBox:"0 0 384 512",style:{width:t,height:t,...r?{fill:r}:{}}},(0,e.createElement)("path",{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3 0 98 62.8 181.4 150.4 211.7-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256c0 123.7 100 224 223.5 224 47.8 0 92-15 128.4-40.6 1.9-1.3 3.7-2.7 5.5-4 4.8-3.6 9.4-7.4 13.9-11.4 2.7-2.4 5.3-4.8 7.9-7.3 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7.6-7.4 1.2-11.1 1.6-5 .5-10.1.9-15.3 1h-4c-96.8-.2-175.2-78.9-175.2-176 0-54.8 24.9-103.7 64.1-136 1-.9 2.1-1.7 3.2-2.6 4-3.2 8.2-6.2 12.5-9 3.1-2 6.3-4 9.6-5.8 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6-2.7-.1-5.5-.1-8.2-.1-3.3 0-6.5.1-9.8.2-2.3.1-4.6.2-6.9.4z"})),h=({icon_size:t,dark_mode_color:r,light_mode_color:o,icon_type:n})=>(0,e.createElement)(e.Fragment,null,"filled"===n?(0,e.createElement)(d,{size:t,color:r}):(0,e.createElement)(w,{size:t,color:r}),"filled"===n?(0,e.createElement)(m,{size:t,color:o}):(0,e.createElement)(u,{size:t,color:o})),g=()=>(0,e.createElement)(o.Tooltip,{text:"Preview Theme (CF)"},(0,e.createElement)("button",{onClick:()=>(e=>{const t=document.querySelector("html");if(!t)return;const r=t.classList.contains(i.DARK)?"light":"dark";window?.localStorage?.setItem("cf-theme",r),t.classList.remove(i.DARK,i.LIGHT),t.classList.add("light"===r?i.LIGHT:i.DARK),[...document.getElementsByClassName(c)].forEach((e=>{e.classList.remove(i.DARK,i.LIGHT),e.classList.add("dark"===r?i.LIGHT:i.DARK)})),document.querySelectorAll("iframe")?.forEach((e=>{const t=e.contentDocument?.querySelector("html");if(!t)return;t.classList.remove(i.DARK,i.LIGHT),t.classList.add("light"===r?i.LIGHT:i.DARK);const o=e.contentDocument;o&&[...o?.getElementsByClassName(c)]?.forEach((e=>{e.classList.remove(i.DARK,i.LIGHT),e.classList.add("dark"===r?i.LIGHT:i.DARK)}))}))})(),className:"cf-theme-toggle-button",style:{padding:"6px"},"aria-label":"Preview Theme (CF)"},(0,e.createElement)(h,{icon_size:18,icon_type:"outline",dark_mode_color:"black",light_mode_color:"black"})));var p;document.addEventListener("DOMContentLoaded",(()=>setTimeout((()=>{var e;const t=null!==(e=window?.core_framework_connector?.theme_mode)&&void 0!==e?e:"light",r=document.querySelector("html");if(!r)return;r.classList.remove(i.DARK,i.LIGHT);let o=window?.localStorage?.getItem("cf-theme");o||(o=t),"auto"===o&&(o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),r?.classList.add("light"===o?i.LIGHT:i.DARK),document.querySelectorAll("iframe")?.forEach((e=>{var t;const r=e.contentDocument,n=r?.querySelector("html");n&&(n.classList.remove(i.DARK,i.LIGHT),n.classList.add("light"===o?i.LIGHT:i.DARK),[...null!==(t=r?.getElementsByClassName(c))&&void 0!==t?t:[]]?.forEach((e=>{e.classList.remove(i.DARK,i.LIGHT),e.classList.add("dark"===o?i.LIGHT:i.DARK)})))}));const n=document.querySelector(".cf-theme-toggle-button");n?.classList.remove(i.DARK,i.LIGHT),n?.classList.add("dark"===o?i.LIGHT:i.DARK),[...document.getElementsByClassName(c)]?.forEach((e=>{e.classList.remove(i.DARK,i.LIGHT),e.classList.add("dark"===o?i.LIGHT:i.DARK)}))}),200))),(0,s.registerPlugin)("core-framework-theme-preview",{render:()=>{var t;(null===(t=window?.core_framework_connector?.gutenberg_enable_dark_mode_preview)||void 0===t||t)&&(0,l.subscribe)((()=>{const t=document.querySelector(".edit-post-header-toolbar")||document.querySelector(".edit-site-header-edit-mode__toolbar");t&&(t?.querySelector(".core-framework-theme-preview")||(t=>{const r=document.createElement("div");r.classList.add("core-framework-theme-preview"),t.appendChild(r),(0,e.render)((0,e.createElement)(g,null),r)})(t))}))}});const f={colorStyles:"Colors",typographyStyles:"Typography",spacingStyles:"Spacing",layoutsStyles:"Layouts",designStyles:"Design",componentsStyles:"Components",otherStyles:"Other"};var k=function(e){return e[e.Idle=0]="Idle",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Failed=3]="Failed",e}(k||{});window.coreframework={nonce:window.wpApiSettings.nonce,rest_url:window.wpApiSettings.root,core_api_url:`${window.wpApiSettings.root}core-framework/v2/`,get_classes_request_state:k.Idle};const v=e=>[...new Set(e)],L={colorStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 3",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3.006 11L17.952 11"}),(0,e.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M5 4l4 4M16.732 20.272h0a2.475 2.475 0 010-3.515h0L18.501 15l1.768 1.757a2.477 2.477 0 010 3.515h0a2.512 2.512 0 01-3.537 0zM17.707 11.406l-5.716 5.715a3 3 0 01-4.242 0l-3.87-3.87a3 3 0 010-4.242l5.715-5.716a1 1 0 011.415 0l6.698 6.698a1 1 0 010 1.415z"}))},typographyStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"},(0,e.createElement)("path",{d:"M6.51 13.82h4.69M7.14 13.82v0M8.86 8.38L6 15.01M11.71 15.01L8.86 8.38M17 21H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4zM17.75 11v4"}),(0,e.createElement)("path",{d:"M17.161 11.579a2.011 2.011 0 11-2.844 2.844 2.011 2.011 0 012.844-2.844"})))},spacingStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"},(0,e.createElement)("path",{d:"M3 4v16M21 4v16M12 4v16M16 10l2 2-2 2M8 14l-2-2 2-2"})))},layoutsStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("g",{fill:"none"},(0,e.createElement)("path",{d:"M0 0h24v24H0z"}),(0,e.createElement)("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"},(0,e.createElement)("path",{d:"M21 9H3M10 9v12M21 14.5H10"}),(0,e.createElement)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}))))},designStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("g",{fill:"none"},(0,e.createElement)("path",{d:"M0 0H24V24H0z"}),(0,e.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M5.636 18.364A8.972 8.972 0 0012 21a9 9 0 009-9v0a9 9 0 00-9-9v0a9 9 0 00-9 9"}),(0,e.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11 10L14 13"}),(0,e.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M6.163 14.837l5.751-5.751a2.122 2.122 0 013 0v0a2.122 2.122 0 010 3l-5.751 5.751c-.168.168-.389.27-.625.29l-2.902.238.238-2.902a.999.999 0 01.289-.626z"})))},componentsStyles:a,otherStyles:function(){return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 3",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("path",{fill:"none",d:"M24 24H0V0h24z"}),(0,e.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.05 14.293a1 1 0 00-1.414 0l-2.843 2.843a1 1 0 00-.293.707V20h2.157a1 1 0 00.707-.293l2.843-2.843a1 1 0 000-1.414zM12 21H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5v3"}),(0,e.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11.55 12a.05.05 0 110 0v0M15.05 12a.05.05 0 110 0v0M8.05 12a.05.05 0 110 0v0"}))}},E=["Border Colors","Backgrounds","Text Colors"],y=["border-","bg-","text-"],_=e=>y.some((t=>e.includes(t)))?e.replace("border-","").replace("bg-","").replace("text-",""):"";(async()=>{const{get_classes_request_state:e}=window.coreframework;if(e!==k.Loading&&e!==k.Loaded){window.coreframework.get_classes_request_state=k.Loading;try{const e=await fetch(`${window.coreframework.core_api_url}get-classes`,{method:"GET",headers:{"Content-Type":"application/json","X-WP-Nonce":window.wpApiSettings.nonce}}),t=await e.json();if("classes"in t==0)return void(window.coreframework.get_classes_request_state=k.Failed);const r=t?.classes;return window.coreframework.classes=r,window.coreframework.get_classes_request_state=k.Loaded,{data:{classes:r},success:!0}}catch(e){console.error(e)}}})();const C=null===(p=window?.core_framework_connector?.gutenberg_place_controls_at_the_top)||void 0===p||p,M=(0,n.createHigherOrderComponent)((n=>s=>{const[l,c]=(0,t.useState)({}),[i,m]=(0,t.useState)(""),[d,u]=(0,t.useState)({active:[],dynamic:[]}),[w,h]=(0,t.useState)(-1);(0,t.useEffect)((()=>{if(!s.attributes.className)return;const e=s.attributes.className.replace(/\s\s+/g," ").trim().split(" ");u((t=>({...t,active:e})))}),[]),(0,t.useEffect)((()=>s.setAttributes({className:[...d.active,...d.dynamic].join(" ")})),[JSON.stringify(d)]),(0,t.useEffect)((()=>{m("")}),[s.isSelected]);const g=(0,t.useMemo)((()=>Object.values(l)?.flatMap((e=>Object.values(e)))?.flat()),[JSON.stringify(l)]),p=(0,t.useMemo)((()=>{if(!g)return[];const e=s.attributes.className?.replace(/\s\s+/g," "),t=e?.split(" ")||[];if(!t?.length)return[];const r=g?.filter((e=>t?.some((t=>t===e))&&!d.dynamic?.some((t=>t===e))&&""!==e));return[...new Set(r)]}),[s.attributes.className,JSON.stringify(d),JSON.stringify(g)]),y=(0,t.useMemo)((()=>i&&g?.length?v(g?.filter((e=>e.toLowerCase().startsWith(i.toLowerCase())))):(h(-1),[])),[i,JSON.stringify(g)]),M=e=>{e&&u((t=>({...t,active:t.active.includes(e)?t.active.filter((t=>t!==e)):[...t.active,e],dynamic:[]})))},b=e=>{if(!e)return;const t=s.attributes?.className?.split(" ").some((t=>t===e));t||u((t=>({...t,dynamic:[e]})))},S=()=>u((e=>({...e,dynamic:[]})));return(0,t.useEffect)((()=>{0===Object.keys(g).length&&(async()=>{const e=await(async()=>{const{classes:e,get_classes_request_state:t}=window.coreframework;return t===k.Loaded?{data:{classes:e},success:!0}:{data:null,success:!1}})();window.coreframework.get_classes_request_state===k.Loaded&&e?.data?.classes&&c(e.data?.classes)})()}),[window.coreframework?.classes]),(0,e.createElement)(e.Fragment,null,C?null:(0,e.createElement)(n,s),(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(o.PanelBody,{className:"coreframework-panel",title:"Core Framework",initialOpen:!0},window.coreframework.get_classes_request_state===k.Failed?(0,e.createElement)("p",{className:"components-base-control__error"},"Failed to fetch classes. Ensure the Gutenberg addon is enabled and changes are saved."):null,p?.length?(0,e.createElement)("h3",null,"Active Core Framework classes"):null,p?.length?(0,e.createElement)("div",{className:"coreframework-active-classes"},p?.map((t=>(0,e.createElement)("button",{key:t,onClick:()=>M(t),className:"coreframework-class is-destructive"},t)))):null,p.length?null:(0,e.createElement)("p",{className:"components-base-control__help"},"There are no active Core Framework classes on this block."),(0,e.createElement)("hr",null),(0,e.createElement)(o.SearchControl,{value:i,onChange:m,placeholder:"Search for a class",onKeyDown:e=>{switch(["ArrowUp","ArrowDown","Enter"].includes(e.key)&&e.preventDefault(),u((e=>({...e,dynamic:[]}))),e.key){case"ArrowDown":{const e=y.length-1;h((t=>t<e?t+1:0)),b(y[w+1]);break}case"ArrowUp":h((e=>0===e?0:e-1)),b(y[w-1]);break;case"Enter":M(y[w])}},onBlur:()=>{h(-1),S()}}),(0,e.createElement)(o.PanelRow,{className:"coreframework-utility-classes"},(0,e.createElement)(o.TabPanel,{tabs:Object.entries(l).map((([t])=>({name:t,title:f?.[t]||t,icon:L?.[t]||(0,e.createElement)(a,null)}))),className:i?"disable":""},(t=>i?(0,e.createElement)(e.Fragment,null):(0,e.createElement)(e.Fragment,null,Object.entries(l?.[t.name]).map((([t,r])=>(0,e.createElement)(o.PanelBody,{title:t,initialOpen:!1},(0,e.createElement)(o.PanelRow,null,v(r).map((r=>(0,e.createElement)("button",{key:r,className:"coreframework-class "+(s.attributes.className?.split(" ").some((e=>e===r))?"is-active":""),onClick:()=>M(r),onMouseEnter:()=>b(r),onMouseLeave:S},E.includes(t)&&_(r)&&(0,e.createElement)("span",{className:"coreframework-color-preview",style:{backgroundColor:`var(--${_(r)})`}}),r)))))))))),y.length?(0,e.createElement)("div",{className:"coreframework-search-results"},(0,e.createElement)("h3",null,"Search Results"),y.map(((t,r)=>(0,e.createElement)("button",{key:t,className:`coreframework-class ${s.attributes.className?.split(" ").some((e=>e===t))?"is-active":""} ${w===r?"is-selected":""}`,onClick:()=>M(t),onMouseEnter:()=>b(t),onMouseLeave:S},t)))):null,i&&!y.length?(0,e.createElement)("p",{className:"components-base-control__help"},"No results found."):null,!g?.length&&(0,e.createElement)(o.Spinner,null)))),C?(0,e.createElement)(n,s):null)}),"withInspectorControl");window.wp.hooks.addFilter("editor.BlockEdit","my-plugin/with-inspector-controls",M)})();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "05f7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_five.b905dbab.png";

/***/ }),

/***/ "1013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8edfe5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b0f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8edfe5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8edfe5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3160":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_0b3f297c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_0b3f297c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_0b3f297c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "32c9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_ten.056fbde1.png";

/***/ }),

/***/ "392c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/give_up.c8c1c287.png";

/***/ }),

/***/ "6af9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "779e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7b0f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e79":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}([function(t,e,o){var n=o(2);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,o){"use strict";var n=o(0);o.n(n).a},function(t,e,o){(t.exports=o(3)(!1)).push([t.i,'\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(i).concat([r]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,e,o){var n={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,c=[],h=o(5);function p(t,e){for(var o=0;o<t.length;o++){var r=t[o],i=n[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],e));n[r.id]={id:r.id,refs:1,parts:a}}}}function u(t,e){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):o.push(n[s]={id:s,parts:[a]})}return o}function l(t,e){var o=i(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),c.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,o);o.insertBefore(e,r)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return o.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),l(t,e),e}function g(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function v(t,e){var o,n,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var c=a++;o=s||(s=f(e)),n=w.bind(null,o,c,!1),r=w.bind(null,o,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),l(t,e),e}(e),n=function(t,e,o){var n=o.css,r=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(n=h(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,o,e),r=function(){d(o),o.href&&URL.revokeObjectURL(o.href)}):(o=f(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){d(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=u(t,e);return p(o,e),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i];(a=n[s.id]).refs--,r.push(a)}t&&p(u(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete n[a.id]}}}};var m=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function w(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:t.scaleImg,mouseout:t.cancelScale}},[t.imgs?o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}},[o("img",{ref:"cropperImg",attrs:{src:t.imgs,alt:"cropper-img"}})])]):t._e(),t._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping},on:{mousedown:t.startMove,touchstart:t.startMove}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{src:t.imgs,alt:"cropper-img"}})]),t._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:t.cropMove,touchstart:t.cropMove}}),t._v(" "),t.info?o("span",{staticClass:"crop-info",style:{top:t.cropInfo.top}},[t._v(t._s(t.cropInfo.width)+" × "+t._s(t.cropInfo.height))]):t._e(),t._v(" "),t.fixedBox?t._e():o("span",[o("span",{staticClass:"crop-line line-w",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,1)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,1)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,1)}}}),t._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,1,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,1,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(e){t.changeCropSize(e,!0,!1,2,0)},touchstart:function(e){t.changeCropSize(e,!0,!1,2,0)}}}),t._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,1,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,1,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(e){t.changeCropSize(e,!1,!0,0,2)},touchstart:function(e){t.changeCropSize(e,!1,!0,0,2)}}}),t._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(e){t.changeCropSize(e,!0,!0,2,2)},touchstart:function(e){t.changeCropSize(e,!0,!0,2,2)}}})])])])};n._withStripped=!0;var r={};r.getData=function(t){return new Promise(function(e,o){var n={};(function(t){var e=null;return new Promise(function(o,n){if(t.src)if(/^data\:/i.test(t.src))e=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),o=e.length,n=new ArrayBuffer(o),r=new Uint8Array(n),i=0;i<o;i++)r[i]=e.charCodeAt(i);return n}(t.src),o(e);else if(/^blob\:/i.test(t.src)){var r=new FileReader;r.onload=function(t){e=t.target.result,o(e)},function(t,e){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},o.send()}(t.src,function(t){r.readAsArrayBuffer(t)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=i.response,o(e),i=null},i.open("GET",t.src,!0),i.responseType="arraybuffer",i.send(null)}else n("img error")})})(t).then(function(t){n.arrayBuffer=t,n.orientation=function(t){var e,o,n,r,i,s,a,c,h,p=new DataView(t),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<u;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){s=c;break}c++}s&&(o=s+10,"Exif"===function(t,e,o){var n,r="";for(n=e,o+=e;n<o;n++)r+=String.fromCharCode(t.getUint8(n));return r}(p,s+4,4)&&(i=p.getUint16(o),((r=18761===i)||19789===i)&&42===p.getUint16(o+2,r)&&(n=p.getUint32(o+4,r))>=8&&(a=o+n)));if(a)for(u=p.getUint16(a,r),h=0;h<u;h++)if(c=a+12*h+2,274===p.getUint16(c,r)){c+=8,e=p.getUint16(c,r);break}return e}(t),e(n)}).catch(function(t){o(t)})})};var i=r,s={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:function(){return 10}}},computed:{cropInfo:function(){var t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){var e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:function(){navigator.userAgent;var t=!!window.ActiveXObject||"ActiveXObject"in window;return t},passive:function(){return this.isIE?null:{passive:!1}}},watch:{img:function(){this.checkedImg()},imgs:function(t){""!==t&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(t,e){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(t){t&&this.goAutoCrop()},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop()},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop()},mode:function(){this.checkedImg()},rotate:function(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion:function(t){for(var e=navigator.userAgent.split(" "),o="",n=new RegExp(t,"i"),r=0;r<e.length;r++)n.test(e[r])&&(o=e[r]);return o?o.split("/")[1].split("."):["0","0","0"]},checkOrientationImage:function(t,e,o,n){var r=this;if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){var i=this.getVersion("version");i[0]>13&&i[1]>1&&(e=-1)}else{var s=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(s){var a=s[1];((a=a.split("_"))[0]>13||a[0]>=13&&a[1]>=4)&&(e=-1)}}var c=document.createElement("canvas"),h=c.getContext("2d");switch(h.save(),e){case 2:c.width=o,c.height=n,h.translate(o,0),h.scale(-1,1);break;case 3:c.width=o,c.height=n,h.translate(o/2,n/2),h.rotate(180*Math.PI/180),h.translate(-o/2,-n/2);break;case 4:c.width=o,c.height=n,h.translate(0,n),h.scale(1,-1);break;case 5:c.height=o,c.width=n,h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:c.width=n,c.height=o,h.translate(n/2,o/2),h.rotate(90*Math.PI/180),h.translate(-o/2,-n/2);break;case 7:c.height=o,c.width=n,h.rotate(.5*Math.PI),h.translate(o,-n),h.scale(-1,1);break;case 8:c.height=o,c.width=n,h.translate(n/2,o/2),h.rotate(-90*Math.PI/180),h.translate(-o/2,-n/2);break;default:c.width=o,c.height=n}h.drawImage(t,0,0,o,n),h.restore(),c.toBlob(function(t){var e=URL.createObjectURL(t);URL.revokeObjectURL(r.imgs),r.imgs=e},"image/"+this.outputType,1)},checkedImg:function(){var t=this;if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var e=new Image;if(e.onload=function(){if(""===t.img)return t.$emit("imgLoad","error"),t.$emit("img-load","error"),!1;var o=e.width,n=e.height;i.getData(e).then(function(r){t.orientation=r.orientation||1;var i=Number(t.maxImgSize);!t.orientation&&o<i&n<i?t.imgs=t.img:(o>i&&(n=n/o*i,o=i),n>i&&(o=o/n*i,n=i),t.checkOrientationImage(e,t.orientation,o,n))})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},"data"!==this.img.substr(0,4)&&(e.crossOrigin=""),this.isIE){var o=new XMLHttpRequest;o.onload=function(){var t=URL.createObjectURL(this.response);e.src=t},o.open("GET",this.img,!0),o.responseType="blob",o.send()}else e.src=this.img},startMove:function(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(t){var e=this;t.preventDefault();var o=this.scale,n=this.touches[0].clientX,r=this.touches[0].clientY,i=t.touches[0].clientX,s=t.touches[0].clientY,a=this.touches[1].clientX,c=this.touches[1].clientY,h=t.touches[1].clientX,p=t.touches[1].clientY,u=Math.sqrt(Math.pow(n-a,2)+Math.pow(r-c,2)),l=Math.sqrt(Math.pow(i-h,2)+Math.pow(s-p,2))-u,d=1,f=(d=(d=d/this.trueWidth>d/this.trueHeight?d/this.trueHeight:d/this.trueWidth)>.1?.1:d)*l;if(!this.touchNow){if(this.touchNow=!0,l>0?o+=Math.abs(f):l<0&&o>Math.abs(f)&&(o-=Math.abs(f)),this.touches=t.touches,setTimeout(function(){e.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o}},cancelTouchScale:function(t){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(t){var e=this;if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o,n,r="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY;o=r-this.moveX,n=i-this.moveY,this.$nextTick(function(){if(e.centerBox){var t,r,i,s,a=e.getImgAxis(o,n,e.scale),c=e.getCropAxis(),h=e.trueHeight*e.scale,p=e.trueWidth*e.scale;switch(e.rotate){case 1:case-1:case 3:case-3:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2+(h-p)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2+(p-h)/2,i=t-h+e.cropW,s=r-p+e.cropH;break;default:t=e.cropOffsertX-e.trueWidth*(1-e.scale)/2,r=e.cropOffsertY-e.trueHeight*(1-e.scale)/2,i=t-p+e.cropW,s=r-h+e.cropH}a.x1>=c.x1&&(o=t),a.y1>=c.y1&&(n=r),a.x2<=c.x2&&(o=i),a.y2<=c.y2&&(n=s)}e.x=o,e.y=n,e.$emit("imgMoving",{moving:!0,axis:e.getImgAxis()}),e.$emit("img-moving",{moving:!0,axis:e.getImgAxis()})})},leaveImg:function(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(t){var e=this;t.preventDefault();var o=this.scale,n=t.deltaY||t.wheelDelta;n=navigator.userAgent.indexOf("Firefox")>0?30*n:n,this.isIE&&(n=-n);var r=this.coe,i=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*n;i<0?o+=Math.abs(i):o>Math.abs(i)&&(o-=Math.abs(i));var s=i<0?"add":"reduce";if(s!==this.coeStatus&&(this.coeStatus=s,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){e.scaling=!1,e.coe=e.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,o))return!1;this.scale=o},changeScale:function(t){var e=this.scale;t=t||1;var o=20;if((t*=o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop:function(t){var e=this;t.preventDefault();var o="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,n="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(function(){var t=o-e.cropX,r=n-e.cropY;if(t>0?(e.cropW=t+e.cropChangeX>e.w?e.w-e.cropChangeX:t,e.cropOffsertX=e.cropChangeX):(e.cropW=e.w-e.cropChangeX+Math.abs(t)>e.w?e.cropChangeX:Math.abs(t),e.cropOffsertX=e.cropChangeX+t>0?e.cropChangeX+t:0),e.fixed){var i=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];i+e.cropOffsertY>e.h?(e.cropH=e.h-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.cropOffsertX=t>0?e.cropChangeX:e.cropChangeX-e.cropW):e.cropH=i,e.cropOffsertY=e.cropOffsertY}else r>0?(e.cropH=r+e.cropChangeY>e.h?e.h-e.cropChangeY:r,e.cropOffsertY=e.cropChangeY):(e.cropH=e.h-e.cropChangeY+Math.abs(r)>e.h?e.cropChangeY:Math.abs(r),e.cropOffsertY=e.cropChangeY+r>0?e.cropChangeY+r:0)})},changeCropSize:function(t,e,o,n,r){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=o,this.changeCropTypeX=n,this.changeCropTypeY=r,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow:function(t){var e=this;t.preventDefault();var o="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,n="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0,r=this.w,i=this.h,s=0,a=0;if(this.centerBox){var c=this.getImgAxis(),h=c.x2,p=c.y2;s=c.x1>0?c.x1:0,a=c.y1>0?c.y1:0,r>h&&(r=h),i>p&&(i=p)}this.$nextTick(function(){var t=o-e.cropX,c=n-e.cropY;if(e.canChangeX&&(1===e.changeCropTypeX?e.cropOldW-t>0?(e.cropW=r-e.cropChangeX-t<=r-s?e.cropOldW-t:e.cropOldW+e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX-t<=r-s?e.cropChangeX+t:s):(e.cropW=Math.abs(t)+e.cropChangeX<=r?Math.abs(t)-e.cropOldW:r-e.cropOldW-e.cropChangeX,e.cropOffsertX=e.cropChangeX+e.cropOldW):2===e.changeCropTypeX&&(e.cropOldW+t>0?(e.cropW=e.cropOldW+t+e.cropOffsertX<=r?e.cropOldW+t:r-e.cropOffsertX,e.cropOffsertX=e.cropChangeX):(e.cropW=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?Math.abs(t+e.cropOldW):e.cropChangeX-s,e.cropOffsertX=r-e.cropChangeX+Math.abs(t+e.cropOldW)<=r-s?e.cropChangeX-Math.abs(t+e.cropOldW):s))),e.canChangeY&&(1===e.changeCropTypeY?e.cropOldH-c>0?(e.cropH=i-e.cropChangeY-c<=i-a?e.cropOldH-c:e.cropOldH+e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY-c<=i-a?e.cropChangeY+c:a):(e.cropH=Math.abs(c)+e.cropChangeY<=i?Math.abs(c)-e.cropOldH:i-e.cropOldH-e.cropChangeY,e.cropOffsertY=e.cropChangeY+e.cropOldH):2===e.changeCropTypeY&&(e.cropOldH+c>0?(e.cropH=e.cropOldH+c+e.cropOffsertY<=i?e.cropOldH+c:i-e.cropOffsertY,e.cropOffsertY=e.cropChangeY):(e.cropH=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?Math.abs(c+e.cropOldH):e.cropChangeY-a,e.cropOffsertY=i-e.cropChangeY+Math.abs(c+e.cropOldH)<=i-a?e.cropChangeY-Math.abs(c+e.cropOldH):a))),e.canChangeX&&e.fixed){var h=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];h+e.cropOffsertY>i?(e.cropH=i-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0]):e.cropH=h}if(e.canChangeY&&e.fixed){var p=e.cropH/e.fixedNumber[1]*e.fixedNumber[0];p+e.cropOffsertX>r?(e.cropW=r-e.cropOffsertX,e.cropH=e.cropW/e.fixedNumber[0]*e.fixedNumber[1]):e.cropW=p}e.$emit("crop-sizing",{cropW:e.cropW,cropH:e.cropH})})},checkCropLimitSize:function(){this.cropW,this.cropH;var t=this.limitMinSize,e=new Array;return e=Array.isArray[t]?t:[t,t],[parseFloat(e[0]),parseFloat(e[1])]},changeCropEnd:function(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var e,o,n="clientX"in t?t.clientX:t.touches[0].clientX,r="clientY"in t?t.clientY:t.touches[0].clientY;e=n-this.cropOffsertX,o=r-this.cropOffsertY,this.cropX=e,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(t,e){var o=this,n=0,r=0;t&&(t.preventDefault(),n="clientX"in t?t.clientX:t.touches[0].clientX,r="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(function(){var t,i,s=n-o.cropX,a=r-o.cropY;if(e&&(s=o.cropOffsertX,a=o.cropOffsertY),t=s<=0?0:s+o.cropW>o.w?o.w-o.cropW:s,i=a<=0?0:a+o.cropH>o.h?o.h-o.cropH:a,o.centerBox){var c=o.getImgAxis();t<=c.x1&&(t=c.x1),t+o.cropW>c.x2&&(t=c.x2-o.cropW),i<=c.y1&&(i=c.y1),i+o.cropH>c.y2&&(i=c.y2-o.cropH)}o.cropOffsertX=t,o.cropOffsertY=i,o.$emit("cropMoving",{moving:!0,axis:o.getCropAxis()}),o.$emit("crop-moving",{moving:!0,axis:o.getCropAxis()})})},getImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*o,i=this.trueHeight*o;switch(this.rotate){case 0:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o;break;case 1:case-1:case 3:case-3:n.x1=t+this.trueWidth*(1-o)/2+(r-i)/2,n.x2=n.x1+this.trueHeight*o,n.y1=e+this.trueHeight*(1-o)/2+(i-r)/2,n.y2=n.y1+this.trueWidth*o;break;default:n.x1=t+this.trueWidth*(1-o)/2,n.x2=n.x1+this.trueWidth*o,n.y1=e+this.trueHeight*(1-o)/2,n.y2=n.y1+this.trueHeight*o}return n},getCropAxis:function(){var t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop:function(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(t){var e=this,o=document.createElement("canvas"),n=new Image,r=this.rotate,i=this.trueWidth,s=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;function h(t,e){o.width=Math.round(t),o.height=Math.round(e)}n.onload=function(){if(0!==e.cropW){var p=o.getContext("2d"),u=1;e.high&!e.full&&(u=window.devicePixelRatio),1!==e.enlarge&!e.full&&(u=Math.abs(Number(e.enlarge)));var l=e.cropW*u,d=e.cropH*u,f=i*e.scale*u,g=s*e.scale*u,v=(e.x-a+e.trueWidth*(1-e.scale)/2)*u,m=(e.y-c+e.trueHeight*(1-e.scale)/2)*u;switch(h(l,d),p.save(),r){case 0:e.full?(h(l/e.scale,d/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g);break;case 1:case-3:e.full?(h(l/e.scale,d/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g/e.scale,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,m,-v-g,f,g));break;case 2:case-2:e.full?(h(l/e.scale,d/e.scale),p.rotate(90*r*Math.PI/180),v/=e.scale,m/=e.scale,p.drawImage(n,-v-f/e.scale,-m-g/e.scale,f/e.scale,g/e.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(n,-v-f,-m-g,f,g));break;case 3:case-1:e.full?(h(l/e.scale,d/e.scale),v=v/e.scale+(f/e.scale-g/e.scale)/2,m=m/e.scale+(g/e.scale-f/e.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f/e.scale,v,f/e.scale,g/e.scale)):(v+=(f-g)/2,m+=(g-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(n,-m-f,v,f,g));break;default:e.full?(h(l/e.scale,d/e.scale),p.drawImage(n,v/e.scale,m/e.scale,f/e.scale,g/e.scale)):p.drawImage(n,v,m,f,g)}p.restore()}else{var w=i*e.scale,x=s*e.scale,C=o.getContext("2d");switch(C.save(),r){case 0:h(w,x),C.drawImage(n,0,0,w,x);break;case 1:case-3:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,0,-x,w,x);break;case 2:case-2:h(w,x),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,-x,w,x);break;case 3:case-1:h(x,w),C.rotate(90*r*Math.PI/180),C.drawImage(n,-w,0,w,x);break;default:h(w,x),C.drawImage(n,0,0,w,x)}C.restore()}t(o)},"data"!==this.img.substr(0,4)&&(n.crossOrigin="Anonymous"),n.src=this.imgs},getCropData:function(t){var e=this;this.getCropChecked(function(o){t(o.toDataURL("image/"+e.outputType,e.outputSize))})},getCropBlob:function(t){var e=this;this.getCropChecked(function(o){o.toBlob(function(e){return t(e)},"image/"+e.outputType,e.outputSize)})},showPreview:function(){var t=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(function(){t.isCanShow=!0},16);var e=this.cropW,o=this.cropH,n=this.scale,r={};r.div={width:"".concat(e,"px"),height:"".concat(o,"px")};var i=(this.x-this.cropOffsertX)/n,s=(this.y-this.cropOffsertY)/n;r.w=e,r.h=o,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(e,"px; height: ").concat(o,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(n,")translate3d(").concat(i,"px, ").concat(s,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r),this.$emit("real-time",r)},reload:function(){var t=this,e=new Image;e.onload=function(){t.w=parseFloat(window.getComputedStyle(t.$refs.cropper).width),t.h=parseFloat(window.getComputedStyle(t.$refs.cropper).height),t.trueWidth=e.width,t.trueHeight=e.height,t.original?t.scale=1:t.scale=t.checkedMode(),t.$nextTick(function(){t.x=-(t.trueWidth-t.trueWidth*t.scale)/2+(t.w-t.trueWidth*t.scale)/2,t.y=-(t.trueHeight-t.trueHeight*t.scale)/2+(t.h-t.trueHeight*t.scale)/2,t.loading=!1,t.autoCrop&&t.goAutoCrop(),t.$emit("img-load","success"),t.$emit("imgLoad","success"),setTimeout(function(){t.showPreview()},20)})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},e.src=this.imgs},checkedMode:function(){var t=1,e=(this.trueWidth,this.trueHeight),o=this.mode.split(" ");switch(o[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":(e*=t=this.w/this.trueWidth)<this.h&&(t=(e=this.h)/this.trueHeight);break;default:try{var n=o[0];if(-1!==n.search("px")){n=n.replace("px","");var r=parseFloat(n)/this.trueWidth,i=1,s=o[1];-1!==s.search("px")&&(s=s.replace("px",""),i=(e=parseFloat(s))/this.trueHeight),t=Math.min(r,i)}if(-1!==n.search("%")&&(n=n.replace("%",""),t=parseFloat(n)/100*this.w/this.trueWidth),2===o.length&&"auto"===n){var a=o[1];-1!==a.search("px")&&(a=a.replace("px",""),t=(e=parseFloat(a))/this.trueHeight),-1!==a.search("%")&&(a=a.replace("%",""),t=(e=parseFloat(a)/100*this.h)/this.trueHeight)}}catch(e){t=1}}return t},goAutoCrop:function(t,e){if(""!==this.imgs&&null!==this.imgs){this.clearCrop(),this.cropping=!0;var o=this.w,n=this.h;if(this.centerBox){var r=Math.abs(this.rotate)%2>0,i=(r?this.trueHeight:this.trueWidth)*this.scale,s=(r?this.trueWidth:this.trueHeight)*this.scale;o=i<o?i:o,n=s<n?s:n}var a=t||parseFloat(this.autoCropWidth),c=e||parseFloat(this.autoCropHeight);0!==a&&0!==c||(a=.8*o,c=.8*n),a=a>o?o:a,c=c>n?n:c,this.fixed&&(c=a/this.fixedNumber[0]*this.fixedNumber[1]),c>this.h&&(a=(c=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(a,c)}},changeCrop:function(t,e){var o=this;if(this.centerBox){var n=this.getImgAxis();t>n.x2-n.x1&&(e=(t=n.x2-n.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>n.y2-n.y1&&(t=(e=n.y2-n.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(function(){o.cropOffsertX=(o.w-o.cropW)/2,o.cropOffsertY=(o.h-o.cropH)/2,o.centerBox&&o.moveCrop(null,!0)})},refresh:function(){var t=this;this.img;this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){t.checkedImg()})},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.scale;var n=!0;if(this.centerBox){var r=this.getImgAxis(t,e,o),i=this.getCropAxis();r.x1>=i.x1&&(n=!1),r.x2<=i.x2&&(n=!1),r.y1>=i.y1&&(n=!1),r.y2<=i.y2&&(n=!1)}return n}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var t=this,e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,o,n){for(var r=atob(this.toDataURL(o,n).split(",")[1]),i=r.length,s=new Uint8Array(i),a=0;a<i;a++)s[a]=r.charCodeAt(a);e(new Blob([s],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}};o(1);var a=function(t,e,o,n,r,i,s,a){var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=o,h._compiled=!0),n&&(h.functional=!0),i&&(h._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var p=h.render;h.render=function(t,e){return c.call(e),p(t,e)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:h}}(s,n,[],!1,null,"6dae58fd",null);a.options.__file="src/vue-cropper.vue";var c=a.exports;o.d(e,"VueCropper",function(){return c});var h=function(t){t.component("VueCropper",c)};"undefined"!=typeof window&&window.Vue&&h(window.Vue);e.default={version:"0.5.8",install:h,VueCropper:c,vueCropper:c}}])});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "91a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1fd9656c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb3f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1fd9656c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1fd9656c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9639":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_one.84279a9a.png";

/***/ }),

/***/ "bcff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d3a251a_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("779e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d3a251a_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2d3a251a_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c00c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c4e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c765":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_500.6732d3b0.png";

/***/ }),

/***/ "cb3f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e125":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_five.31fb23b0.png";

/***/ }),

/***/ "f3f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_3a33272e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6af9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_3a33272e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_3a33272e_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=template&id=6b8edfe5&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"wheel-main"},[_c('div',{staticClass:"wheel-pointer",on:{"click":function($event){return _vm.beginRotate()}}}),_c('canvas',{style:(_vm.rotateBgStyle),attrs:{"width":"600","height":"400","id":"canvas_bg"}}),_c('div',{staticClass:"wheel-bg",style:(_vm.rotateStyle)},[_c('div',{staticClass:"prize-list"},_vm._l((_vm.prizeList),function(item,index){return _c('div',{key:index,staticClass:"prize-item",style:(item.style)},[_c('div',{staticClass:"prize-pic"},[_c('img',{attrs:{"src":item.icon}})]),_c('div',{staticClass:"prize-type"},[_vm._v(_vm._s(item.name))])])}),0)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast"},[_c('div',{staticClass:"toast-container"},[_c('div',{staticClass:"toast-picture",class:_vm.prize && _vm.prize.isPrize === 1 ? 'congratulation-img' : 'sorry-img'}),_c('div',{staticClass:"close",on:{"click":function($event){return _vm.closeToast()}}}),_c('div',{staticClass:"toast-title"},[_vm._v(_vm._s(_vm.toastTitle))]),_c('div',{staticClass:"toast-btn"},[_c('div',{staticClass:"toast-cancel",on:{"click":_vm.closeToast}},[_vm._v("关闭")])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast-mask"})])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/turntable/src/index.vue?vue&type=template&id=6b8edfe5&scoped=true&

// CONCATENATED MODULE: ./packages/turntable/src/config.js
const prizeList = [
  {
    icon: __webpack_require__("c765"), // 奖品图片
    name: "鱼香茄子", // 奖品名称
    isPrize: 1 // 该奖项是否为奖品
  },
  {
    icon: __webpack_require__("05f7"),
    name: "手撕鸡",
    isPrize: 1
  },
  {
    icon: __webpack_require__("9639"),
    name: "可乐鸡翅",
    isPrize: 1
  },
  {
    icon: __webpack_require__("e125"),
    name: "奖品4",
    isPrize: 1
  },
  {
    icon: __webpack_require__("32c9"),
    name: "奖品5",
    isPrize: 1
  },
  {
    icon: __webpack_require__("c765"),
    name: "奖品6",
    isPrize: 1
  },
  {
    icon: __webpack_require__("392c"),
    name: "奖品7",
    isPrize: 0
  },
  {
    icon: __webpack_require__("c765"),
    name: "奖品8",
    isPrize: 1
  }
]
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=script&lang=js&


const CIRCLE_ANGLE = 360;

const config = {
  // 总旋转时间
  duration: 4000,
  // 旋转圈数
  circle: 8,
  mode: "ease-in-out"
};

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "lhc-turntable",
  props: {
    // 奖品列表
    prizeListProp: {
      type: Array,
      default: () => prizeList
    },
    // 剩余抽奖次数
    countProp: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      count: this.countProp, // 剩余抽奖次数
      duration: 3000, // 转盘旋转时间
      prizeList: [], // 奖品列表
      rotateAngle: 0, // 旋转角度
      index: 0,
      prize: null
    };
  },
  created() {
    // 初始化一些值
    this.angleList = [];
    // 是否正在旋转
    this.isRotating = false;
    // 基本配置
    this.config = config;

    // 获取奖品列表
    this.initPrizeList();
  },
  computed: {
    /**
     * 奖品旋转
     */
    rotateStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle}deg);
            transform: rotate(${this.rotateAngle}deg);`;
    },
    /**
     * 旋转背景颜色
     * 因为奖品小于8类的时候，会有样式上的错位，所以需要角度this.rotateAngle - this.prizeList.length*5.5
     */
    rotateBgStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${
        this.config.mode
      };
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle -
          this.prizeList.length * 5.5}deg);
            transform: rotate(${this.rotateAngle -
              this.prizeList.length * 5.5}deg);`;
    },
    toastTitle() {
      return this.prize && this.prize.isPrize === 1
        ? "恭喜您，获得" + this.prize.name
        : "未中奖";
    }
  },
  watch: {
    // prizeListProp(data) {
    //   console.log(data);
    // }
  },
  methods: {
    initPrizeList() {
      // 这里可以发起请求，从服务端获取奖品列表
      // 这里使用模拟数据
      this.prizeList = this.formatPrizeList(this.prizeListProp);
    },
    /**
     * 初始化画布（该转盘背景）
     */
    initCanvas() {
      var myCanvas = document.querySelector("canvas");
      var ctx = myCanvas.getContext("2d");
      var w = ctx.canvas.width;
      var h = ctx.canvas.height;

      /*分成几等分*/
      var num = this.prizeList.length;
      /*一份多少弧度*/
      var angle = (Math.PI * 2) / num;
      // const half = angle / 2;
      /*原点坐标*/
      var x0 = w / 2;
      var y0 = h / 2;
      /*获取随机颜色*/
      var getRandomColor = function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
      /*上一次绘制的结束弧度等于当前次的起始弧度*/
      var n = this.prizeList.length - 1;
      for (var i = 0; i < num; i++) {
        var startAngle = i * angle;
        var endAngle = (i + 1) * angle;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.arc(x0, y0, 150, startAngle, endAngle);
        // 若传进来有设置color，则赋值，无则随机颜色

        if(i===num-1){
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[num-1].color
            : getRandomColor();
        }  else  {
          n--;
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[n].color
            : getRandomColor();
        }

        ctx.fill();
      }
    },
    // 格式化奖品列表，计算每个奖品的位置
    formatPrizeList(list) {
      // 记录每个奖的位置
      const angleList = [];

      const l = list.length;
      // 计算单个奖项所占的角度
      const average = CIRCLE_ANGLE / l;
      // console.log(average)

      const half = average / 2;

      // 循环计算给每个奖项添加style属性
      list.forEach((item, i) => {
        // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
        const angle = -(i * average + half); // + l * 5.5
        // 增加 style
        item.style = `-webkit-transform: rotate(${angle}deg);
                      transform: rotate(${angle}deg);`;

        // 记录每个奖项的角度范围
        angleList.push(i * average + half);
      });

      this.angleList = angleList;
      return list;
    },
    beginRotate() {
      // 添加次数校验

      if (this.count === 0) return;

      // 开始抽奖
      // 这里这里向服务端发起请求，得到要获得的奖
      // 可以返回下标，也可以返回奖品 id，通过查询 奖品列表，最终得到下标

      // 随机获取下标
      this.index = this.random(this.prizeList.length - 1);

      // 减少剩余抽奖次数
      this.count--;

      // 开始旋转
      this.rotating();
    },
    random(max, min = 0) {
      return parseInt(Math.random() * (max - min + 1) + min);
    },
    rotating() {
      const { isRotating, angleList, config, rotateAngle, index } = this;

      if (isRotating) return;

      this.isRotating = true;

      // 计算角度
      const angle =
        // 初始角度
        rotateAngle +
        // 多旋转的圈数
        config.circle * CIRCLE_ANGLE +
        // 奖项的角度
        angleList[index] -
        (rotateAngle % CIRCLE_ANGLE);

      this.rotateAngle = angle;

      // 旋转结束后，允许再次触发
      setTimeout(() => {
        this.rotateOver();
      }, config.duration + 1000);
    },
    rotateOver() {
      this.isRotating = false;

      this.prize = this.prizeListProp[this.index];

      this.$emit("draw", [this.prize, this.count]);

      //   console.log(this.prize, this.index, this.count);
    },
    //关闭弹窗
    closeToast() {
      this.prize = null;
    }
  },
  mounted() {
    this.initCanvas();
  }
});

// CONCATENATED MODULE: ./packages/turntable/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var turntable_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/turntable/src/index.vue?vue&type=style&index=0&id=6b8edfe5&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_6b8edfe5_prod_scoped_true_lang_css_ = __webpack_require__("1013");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/turntable/src/index.vue






/* normalize component */

var component = normalizeComponent(
  turntable_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6b8edfe5",
  null
  
)

/* harmony default export */ var turntable_src = (component.exports);
// CONCATENATED MODULE: ./packages/turntable/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:32:36 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:32:36 
 */


// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
turntable_src.install = function (Vue) {
  Vue.component(turntable_src.name, turntable_src)
}

// 默认导出组件
/* harmony default export */ var turntable = (turntable_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-1.vue?vue&type=template&id=0b3f297c&scoped=true&
var water_ripple_1vue_type_template_id_0b3f297c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.num !== 0),expression:"num !== 0"}],staticClass:"container"},[_c('div',{staticClass:"wave"}),_c('div',{staticClass:"wave-mask"}),_c('span',{staticClass:"wave-num"},[_vm._v(" "+_vm._s(_vm.num))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.num === 0),expression:"num === 0"}],staticClass:"container"},[_c('div',{staticClass:"wave0"},[_vm._v("0")])])])
}
var water_ripple_1vue_type_template_id_0b3f297c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-1.vue?vue&type=template&id=0b3f297c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-1.vue?vue&type=script&lang=js&

/* harmony default export */ var water_ripple_1vue_type_script_lang_js_ = ({
  name: "lhc-water-ripple",
  props: {
    // 是否下载的是word
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
});

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_water_ripple_1vue_type_script_lang_js_ = (water_ripple_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/water-ripple/src/water-ripple-1.vue?vue&type=style&index=0&id=0b3f297c&prod&lang=less&scoped=true&
var water_ripple_1vue_type_style_index_0_id_0b3f297c_prod_lang_less_scoped_true_ = __webpack_require__("3160");

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-1.vue






/* normalize component */

var water_ripple_1_component = normalizeComponent(
  src_water_ripple_1vue_type_script_lang_js_,
  water_ripple_1vue_type_template_id_0b3f297c_scoped_true_render,
  water_ripple_1vue_type_template_id_0b3f297c_scoped_true_staticRenderFns,
  false,
  null,
  "0b3f297c",
  null
  
)

/* harmony default export */ var water_ripple_1 = (water_ripple_1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-2.vue?vue&type=template&id=3a33272e&scoped=true&
var water_ripple_2vue_type_template_id_3a33272e_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"c-progress-circle"},[_c('span',[_vm._v(_vm._s(_vm.num)+"%")]),_c('div',{staticClass:"wave"}),_c('div',{staticClass:"wave-mask",style:({ top: -_vm.num + '%' })})])])
}
var water_ripple_2vue_type_template_id_3a33272e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-2.vue?vue&type=template&id=3a33272e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-2.vue?vue&type=script&lang=js&

/* harmony default export */ var water_ripple_2vue_type_script_lang_js_ = ({
  name: "lhc-water-ripple-1",
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
});

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_water_ripple_2vue_type_script_lang_js_ = (water_ripple_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/water-ripple/src/water-ripple-2.vue?vue&type=style&index=0&id=3a33272e&prod&lang=less&scoped=true&
var water_ripple_2vue_type_style_index_0_id_3a33272e_prod_lang_less_scoped_true_ = __webpack_require__("f3f0");

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-2.vue






/* normalize component */

var water_ripple_2_component = normalizeComponent(
  src_water_ripple_2vue_type_script_lang_js_,
  water_ripple_2vue_type_template_id_3a33272e_scoped_true_render,
  water_ripple_2vue_type_template_id_3a33272e_scoped_true_staticRenderFns,
  false,
  null,
  "3a33272e",
  null
  
)

/* harmony default export */ var water_ripple_2 = (water_ripple_2_component.exports);
// CONCATENATED MODULE: ./packages/water-ripple/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:32:20 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:32:20 
 */

// 导入组件，组件必须声明 name



// 为组件提供 install 安装方法，供按需引入
water_ripple_1.install = function (Vue) {
  Vue.component(water_ripple_1.name, water_ripple_1)
}

water_ripple_2.install = function (Vue) {
  Vue.component(water_ripple_2.name, water_ripple_2)
}


// 默认导出组件
 

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/circular-double/src/index.vue?vue&type=template&id=2d3a251a&scoped=true&
var srcvue_type_template_id_2d3a251a_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"loading"},[_c('div',{staticClass:"container-left"},[_c('div',{staticClass:"left"}),_c('div',{staticClass:"left-after",style:({
          transform: _vm.transformL,
          backgroundColor: _vm.backgroundColor,
          display: _vm.divDisplayL
        })})]),_c('div',{staticClass:"container-right"},[_c('div',{staticClass:"right"}),_c('div',{staticClass:"right-after",style:({
          transform: _vm.transformR,
          backgroundColor: _vm.backgroundColor,
          display: _vm.divDisplayR
        })})]),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"innerPark"},[_vm._v(" "+_vm._s(_vm.childDataNum)+" ")])])])])
}
var srcvue_type_template_id_2d3a251a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/circular-double/src/index.vue?vue&type=template&id=2d3a251a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/circular-double/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var circular_double_srcvue_type_script_lang_js_ = ({
  name: 'lhc-circular-double',
  props: {
    childData: {
      type: Object
    }
  },
  data() {
    return {
      transformL: '',
      transformR: '',
      divDisplayL: '',
      divDisplayR: '',
      backgroundColor: '#4472c4',
      childDataNum: 0
    }
  },
  computed: {},
  watch: {
    'childData.num'() {
      this.setElementTransform()
      this.childDataNum = this.toPercent(this.childData.num)
    }
  },
  mounted() {
    this.setElementTransform()
    this.childDataNum = this.toPercent(this.childData && this.childData.num)
  },
  methods: {
    setElementTransform() {
      let val = this.childData && this.childData.num || 0;

      if (val <= 0) {
        this.transformR = `rotateZ(0.5turn)`
        this.transformL = `rotateZ(0.5turn)`
        this.divDisplayL = 'none'
        this.divDisplayR = 'none'
      } else if (val >= 1) {
        this.transformR = `rotateZ(0turn)`
        this.transformL = `rotateZ(0turn)`
        this.divDisplayL = 'block'
        this.divDisplayR = 'block'
      } else if (val > 0.5) {
        this.transformR = `rotateZ(0turn)`
        this.transformL = `rotateZ(${val - 1}turn)`
        this.divDisplayL = 'block'
        this.divDisplayR = 'block'
      } else {
        this.transformR = `rotateZ(${val - 0.5}turn)`
        this.transformL = `rotateZ(0.5turn)`
        this.divDisplayL = 'none'
        this.divDisplayR = 'block'
      }
    },
    toPercent(point) {
      if (point === 0) return '--%'

      var str = Number(point * 100).toFixed(0)
      console.log(point, str)

      str += '%'
      return str
    }
  }
});

// CONCATENATED MODULE: ./packages/circular-double/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_circular_double_srcvue_type_script_lang_js_ = (circular_double_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/circular-double/src/index.vue?vue&type=style&index=0&id=2d3a251a&prod&lang=less&scoped=true&
var srcvue_type_style_index_0_id_2d3a251a_prod_lang_less_scoped_true_ = __webpack_require__("bcff");

// CONCATENATED MODULE: ./packages/circular-double/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_circular_double_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2d3a251a_scoped_true_render,
  srcvue_type_template_id_2d3a251a_scoped_true_staticRenderFns,
  false,
  null,
  "2d3a251a",
  null
  
)

/* harmony default export */ var circular_double_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/circular-double/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:30:58 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 14:31:30
 */

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
circular_double_src.install = function (Vue) {
  Vue.component(circular_double_src.name, circular_double_src)
}

// 默认导出组件
/* harmony default export */ var circular_double = (circular_double_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cropper-dialog/src/index.vue?vue&type=template&id=1fd9656c&scoped=true&
var srcvue_type_template_id_1fd9656c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('el-dialog',{attrs:{"title":"图片剪裁","visible":_vm.dialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.dialogVisible=$event},"close":_vm.closeDialog}},[_c('div',{staticClass:"cropper-content"},[_c('div',{staticClass:"cropper",staticStyle:{"text-align":"center"}},[_c('vueCropper',{ref:"cropper",attrs:{"img":_vm.option.img,"outputSize":_vm.option.size,"outputType":_vm.option.outputType,"info":true,"full":_vm.option.full,"canMove":_vm.option.canMove,"canMoveBox":_vm.option.canMoveBox,"original":_vm.option.original,"autoCrop":_vm.option.autoCrop,"fixed":_vm.option.fixed,"fixedNumber":_vm.option.fixedNumber,"centerBox":_vm.option.centerBox,"infoTrue":_vm.option.infoTrue,"fixedBox":_vm.option.fixedBox}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.fixedControl),expression:"fixedControl"}],staticClass:"operation"},[_c('h3',[_vm._v("可按各个尺寸裁剪")]),_c('el-radio-group',{on:{"change":_vm.changeFixedType},model:{value:(_vm.fixedType),callback:function ($$v) {_vm.fixedType=$$v},expression:"fixedType"}},[_c('el-radio',{attrs:{"label":4}},[_vm._v("图片尺寸（自定义）")]),_c('el-radio',{attrs:{"label":1}},[_vm._v("图片尺寸（16:9）")]),_c('el-radio',{attrs:{"label":2}},[_vm._v("图片尺寸（4:3）")]),_c('el-radio',{attrs:{"label":3}},[_vm._v("图片尺寸（1:1）")])],1)],1)],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.nameControl),expression:"nameControl"}],staticClass:"img_name"},[_c('span',[_vm._v("图片名称：")]),_c('el-input',{attrs:{"placeholder":"请输入图片名称"},model:{value:(_vm.fileName),callback:function ($$v) {_vm.fileName=$$v},expression:"fileName"}})],1)]),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.closeDialog}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.finish}},[_vm._v("确认")])],1)])
}
var srcvue_type_template_id_1fd9656c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/cropper-dialog/src/index.vue?vue&type=template&id=1fd9656c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-cropper/dist/index.js
var dist = __webpack_require__("7e79");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cropper-dialog/src/index.vue?vue&type=script&lang=js&


/* harmony default export */ var cropper_dialog_srcvue_type_script_lang_js_ = ({
    name: 'lhc-cropper-dialog',
    props: {
        fixedControl: {
            type: Boolean,
            default: true,
        },
        nameControl: {
            type: Boolean,
            default: true,
        },
        canScale: {
            type: Boolean,
            default: false,
        },
        autoCrop: {
            type: Boolean,
            default: true,
        },
        fixedBox: {
            type: Boolean,
            default: false,
        },
        fixed: {
            type: Boolean,
            default: false,
        },
        fixedNumber: {
            type: Array,
            default: function() {
                return [16, 9]
            }
        },
        full: {
            type: Boolean,
            default: false,
        },
        canMoveBox: {
            type: Boolean,
            default: true,
        },
        original: {
            type: Boolean,
            default: false,
        },
        centerBox: {
            type: Boolean,
            default: true,
        },
        infoTrue: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            dialogVisible: false,
            fixedType: 4,
            // 裁剪组件的基础配置option
            option: {
                img: '', // 裁剪图片的地址
                info: true, // 裁剪框的大小信息
                outputSize: 0.8, // 裁剪生成图片的质量
                outputType: 'png', // 裁剪生成图片的格式
                canScale: false, // 图片是否允许滚轮缩放
                autoCrop: true, // 是否默认生成截图框
                // autoCropWidth: 300, // 默认生成截图框宽度
                // autoCropHeight: 200, // 默认生成截图框高度
                fixedBox: false, // 固定截图框大小 不允许改变
                fixed: false, // 是否开启截图框宽高固定比例
                fixedNumber: [7, 5], // 截图框的宽高比例
                full: false, // 是否输出原图比例的截图
                canMoveBox: true, // 截图框能否拖动
                original: false, // 上传图片按照原始比例渲染
                centerBox: true, // 截图框是否被限制在图片里面
                infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
            },
            fileName: '',
            // 防止重复提交
            loading: false
        }
    },
    components: {
        VueCropper: dist["VueCropper"],
    },
    methods: {
        openDialog(file) {
            const _that = this
            _that.option = {
                ..._that.option,
                canScale: _that.canScale,
                autoCrop: _that.autoCrop,
                fixedBox: _that.fixedBox,
                fixed: _that.fixed,
                fixedNumber: _that.fixedNumber,
                full: _that.full,
                canMoveBox: _that.canMoveBox,
                original: _that.original,
                centerBox: _that.centerBox,
                infoTrue: _that.infoTrue,
            }
            if (file instanceof File) {
                _that.dialogVisible = true
                this.fileToDataUrl(file, (value) => {
                    _that.option.img = value
                    _that.fileName = file.name
                })
            } else {
                _that.$message.warning("请提供File类型的图片文件");
            }
        },
        closeDialog() {
            Object.assign(this.$data, this.$options.data())
        },
        changeFixedType(value) {
            let arr = []
            if (value === 1) {
                arr = [16, 9]
                this.option = {
                    ...this.option,
                    fixed: true,
                    fixedNumber: arr,
                }
            } else if (value === 2) {
                arr = [4, 3]
                this.option = {
                    ...this.option,
                    fixed: true,
                    fixedNumber: arr,
                }
            } else if (value === 3) {
                arr = [1, 1]
                this.option = {
                    ...this.option,
                    fixed: true,
                    fixedNumber: arr,
                }
            } else {
                this.option = {
                    ...this.option,
                    fixed: false,
                    fixedNumber: [16, 9]
                }
            }
            
            // 更新截图框
            this.$refs.cropper.refresh()
        },
        //将传入的File/Blob对象转为base64的dataURL
        fileToDataUrl(file, callback) {
            var reader = new FileReader();
            reader.onload = function() {
                callback(reader.result);
            };
            reader.readAsDataURL(file);//FileReader对象的方法，可以读取Blob或者File对象的数据，转化为dataURL格式
        },
        finish() {
            this.loading = true
            this.$refs.cropper.getCropBlob((data) => {
                // 父组件数据处理完成以后, 执行回调关闭弹框
                this.$emit('changeImgMsg', { blobFile: data, name: this.fileName }, () => {
                    this.loading = false
                    this.closeDialog()
                })
                // fetch(`https://upload.wedengta.com/shutu/${new Date().getTime()}.png`, {
                //     method: 'post',
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //     },
                //     body: data,
                // }).then(response => response.json()).then((res) => {
                //     if (res && res.msg === 'success') {
                //         this.loading = true
                //         this.$emit('changeImgMsg', { url: res.exurl, name: this.fileName })
                //         this.closeDialog()
                //     } else {
                //         this.$message.error('上传失败')
                //     }
                // })
            })
        }
    }
});

// CONCATENATED MODULE: ./packages/cropper-dialog/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_cropper_dialog_srcvue_type_script_lang_js_ = (cropper_dialog_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/cropper-dialog/src/index.vue?vue&type=style&index=0&id=1fd9656c&prod&lang=less&scoped=true&
var srcvue_type_style_index_0_id_1fd9656c_prod_lang_less_scoped_true_ = __webpack_require__("91a7");

// CONCATENATED MODULE: ./packages/cropper-dialog/src/index.vue






/* normalize component */

var cropper_dialog_src_component = normalizeComponent(
  packages_cropper_dialog_srcvue_type_script_lang_js_,
  srcvue_type_template_id_1fd9656c_scoped_true_render,
  srcvue_type_template_id_1fd9656c_scoped_true_staticRenderFns,
  false,
  null,
  "1fd9656c",
  null
  
)

/* harmony default export */ var cropper_dialog_src = (cropper_dialog_src_component.exports);
// CONCATENATED MODULE: ./packages/cropper-dialog/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:30:58 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 15:07:23
 */

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
cropper_dialog_src.install = function (Vue) {
  Vue.component(cropper_dialog_src.name, cropper_dialog_src)
}

// 默认导出组件
/* harmony default export */ var cropper_dialog = (cropper_dialog_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/index.vue?vue&type=template&id=479cf026&scoped=true&
var srcvue_type_template_id_479cf026_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tabs"},[_c('div',{ref:"navWrap",staticClass:"tabs-nav-wrap"},_vm._l((_vm.navList),function(item,index){return _c('div',{key:index,staticClass:"tabs-tab",class:{
        'tabs-tab-active': item.name === _vm.activeKey,
      },on:{"click":function($event){return _vm.handleChange(index)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0),_c('div',{staticClass:"pane-content"},[_vm._t("default")],2)])
}
var srcvue_type_template_id_479cf026_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Tabs/src/index.vue?vue&type=template&id=479cf026&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Tabs_srcvue_type_script_lang_js_ = ({
  name: "tabs",
  props: {
    value: {
      type: [String, Number],
    },
  },
  provide() {
    return { TabsInstance: this }
  },
  data() {
    return {
      navList: [],
      activeKey: this.value,
    }
  },
  methods: {
    initTabs() {
      this.updateNav()
      this.updateStatus()
    },
    handleChange(index) {
      const nav = this.navList[index]
      this.activeKey = nav.name
    },
    //获取tabs下的所有pane实例
    getTabs() {
      return this.$children.filter(item => item.$options.name === "tab-pane")
    },
    //获取所有pane组件用户传入的props
    updateNav() {
      this.navList = []
      this.getTabs().forEach((pane, index) => {
        this.navList.push({
          label: pane.label,
          name: pane.name || index,
        })
        //如果不传value,默认选中第一项
        if (index === 0 && !this.activeKey) {
          this.activeKey = pane.name
        }
      })
    },
    updateStatus() {
      const tabs = this.getTabs()
      tabs.forEach(tab => (tab.show = tab.name === this.activeKey))
    },
  },
  watch: {
    value(val) {
      this.activeKey = val
    },
    activeKey() {
      this.updateStatus()
    },
  },
});

// CONCATENATED MODULE: ./packages/Tabs/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Tabs_srcvue_type_script_lang_js_ = (Tabs_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Tabs/src/index.vue?vue&type=style&index=0&id=479cf026&prod&scoped=true&lang=less&
var srcvue_type_style_index_0_id_479cf026_prod_scoped_true_lang_less_ = __webpack_require__("fc6e");

// CONCATENATED MODULE: ./packages/Tabs/src/index.vue






/* normalize component */

var Tabs_src_component = normalizeComponent(
  packages_Tabs_srcvue_type_script_lang_js_,
  srcvue_type_template_id_479cf026_scoped_true_render,
  srcvue_type_template_id_479cf026_scoped_true_staticRenderFns,
  false,
  null,
  "479cf026",
  null
  
)

/* harmony default export */ var Tabs_src = (Tabs_src_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1646120a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/TabPane.vue?vue&type=template&id=b51a7a94&
var TabPanevue_type_template_id_b51a7a94_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}]},[_vm._t("default")],2)
}
var TabPanevue_type_template_id_b51a7a94_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Tabs/src/TabPane.vue?vue&type=template&id=b51a7a94&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/TabPane.vue?vue&type=script&lang=js&

/* harmony default export */ var TabPanevue_type_script_lang_js_ = ({
  name: 'tab-pane',
  props: {
    name: {
      type: String
    },
    label: {
      type: [String, Function],
      default: ''
    }
  },
  data() {
    return {
      show: true
    }
  },
  inject: ['TabsInstance'],
  mounted() {
    this.TabsInstance.initTabs()
  },
  watch: {
    name() {
      this.TabsInstance.initTabs()
    }
  }
});

// CONCATENATED MODULE: ./packages/Tabs/src/TabPane.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TabPanevue_type_script_lang_js_ = (TabPanevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Tabs/src/TabPane.vue





/* normalize component */

var TabPane_component = normalizeComponent(
  src_TabPanevue_type_script_lang_js_,
  TabPanevue_type_template_id_b51a7a94_render,
  TabPanevue_type_template_id_b51a7a94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabPane = (TabPane_component.exports);
// CONCATENATED MODULE: ./packages/Tabs/index.js



Tabs_src.install = function (Vue) {
    Vue.component(Tabs_src.name, Tabs_src)
}

TabPane.install = function (Vue) {
    Vue.component(TabPane.name, TabPane)
}


// CONCATENATED MODULE: ./packages/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:32:12 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-02-15 15:35:58
 */







// 存储组件列表
const components = [turntable, water_ripple_1, water_ripple_2, circular_double, cropper_dialog, Tabs_src, TabPane]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Turntable: turntable,
  WaterRipple1: water_ripple_1,
  WaterRipple2: water_ripple_2,
  CircularDouble: circular_double,
  CropperDialog: cropper_dialog,
  Tabs: Tabs_src,
  TabPane: TabPane,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fc6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_479cf026_prod_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c00c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_479cf026_prod_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_479cf026_prod_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=custom-component-lib.common.js.map
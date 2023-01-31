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
/******/ 	return __webpack_require__(__webpack_require__.s = "2b1f");
/******/ })
/************************************************************************/
/******/ ({

/***/ "05f7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_five.b905dbab.png";

/***/ }),

/***/ "1b32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.19@@vue/cli-service/lib/commands/build/setPublicPath.js
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"593516ee-vue-loader-template"}!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=template&id=49d008f3&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"wheel-main"},[_c('div',{staticClass:"wheel-pointer",on:{"click":function($event){return _vm.beginRotate()}}}),_c('canvas',{style:(_vm.rotateBgStyle),attrs:{"width":"600","height":"400","id":"canvas_bg"}}),_c('div',{staticClass:"wheel-bg",style:(_vm.rotateStyle)},[_c('div',{staticClass:"prize-list"},_vm._l((_vm.prizeList),function(item,index){return _c('div',{key:index,staticClass:"prize-item",style:(item.style)},[_c('div',{staticClass:"prize-pic"},[_c('img',{attrs:{"src":item.icon}})]),_c('div',{staticClass:"prize-type"},[_vm._v(_vm._s(item.name))])])}),0)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast"},[_c('div',{staticClass:"toast-container"},[_c('div',{staticClass:"toast-picture",class:_vm.prize && _vm.prize.isPrize === 1 ? 'congratulation-img' : 'sorry-img'}),_c('div',{staticClass:"close",on:{"click":function($event){return _vm.closeToast()}}}),_c('div',{staticClass:"toast-title"},[_vm._v(_vm._s(_vm.toastTitle))]),_c('div',{staticClass:"toast-btn"},[_c('div',{staticClass:"toast-cancel",on:{"click":_vm.closeToast}},[_vm._v("关闭")])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast-mask"})])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/turntable/src/index.vue?vue&type=template&id=49d008f3&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=script&lang=js&


const CIRCLE_ANGLE = 360;

const config = {
  // 总旋转时间
  duration: 4000,
  // 旋转圈数
  circle: 8,
  mode: "ease-in-out"
};

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "custom-turntable",
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
// EXTERNAL MODULE: ./packages/turntable/src/index.vue?vue&type=style&index=0&id=49d008f3&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_49d008f3_prod_scoped_true_lang_css_ = __webpack_require__("f6e8");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
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
  "49d008f3",
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"593516ee-vue-loader-template"}!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-1.vue?vue&type=template&id=3274ceb4&scoped=true&
var water_ripple_1vue_type_template_id_3274ceb4_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.num !== 0),expression:"num !== 0"}],staticClass:"container"},[_c('div',{staticClass:"wave"}),_c('div',{staticClass:"wave-mask"}),_c('span',{staticClass:"wave-num"},[_vm._v(" "+_vm._s(_vm.num))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.num === 0),expression:"num === 0"}],staticClass:"container"},[_c('div',{staticClass:"wave0"},[_vm._v("0")])])])
}
var water_ripple_1vue_type_template_id_3274ceb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-1.vue?vue&type=template&id=3274ceb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-1.vue?vue&type=script&lang=js&

/* harmony default export */ var water_ripple_1vue_type_script_lang_js_ = ({
  name: "custom-water-ripple",
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
// EXTERNAL MODULE: ./packages/water-ripple/src/water-ripple-1.vue?vue&type=style&index=0&id=3274ceb4&prod&lang=less&scoped=true&
var water_ripple_1vue_type_style_index_0_id_3274ceb4_prod_lang_less_scoped_true_ = __webpack_require__("f409");

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-1.vue






/* normalize component */

var water_ripple_1_component = normalizeComponent(
  src_water_ripple_1vue_type_script_lang_js_,
  water_ripple_1vue_type_template_id_3274ceb4_scoped_true_render,
  water_ripple_1vue_type_template_id_3274ceb4_scoped_true_staticRenderFns,
  false,
  null,
  "3274ceb4",
  null
  
)

/* harmony default export */ var water_ripple_1 = (water_ripple_1_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"593516ee-vue-loader-template"}!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-2.vue?vue&type=template&id=1b3467b1&scoped=true&
var water_ripple_2vue_type_template_id_1b3467b1_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"c-progress-circle"},[_c('span',[_vm._v(_vm._s(_vm.num)+"%")]),_c('div',{staticClass:"wave"}),_c('div',{staticClass:"wave-mask",style:({ top: -_vm.num + '%' })})])])
}
var water_ripple_2vue_type_template_id_1b3467b1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-2.vue?vue&type=template&id=1b3467b1&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/water-ripple/src/water-ripple-2.vue?vue&type=script&lang=js&

/* harmony default export */ var water_ripple_2vue_type_script_lang_js_ = ({
  name: "custom-water-ripple-1",
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
// EXTERNAL MODULE: ./packages/water-ripple/src/water-ripple-2.vue?vue&type=style&index=0&id=1b3467b1&prod&lang=less&scoped=true&
var water_ripple_2vue_type_style_index_0_id_1b3467b1_prod_lang_less_scoped_true_ = __webpack_require__("34d9");

// CONCATENATED MODULE: ./packages/water-ripple/src/water-ripple-2.vue






/* normalize component */

var water_ripple_2_component = normalizeComponent(
  src_water_ripple_2vue_type_script_lang_js_,
  water_ripple_2vue_type_template_id_1b3467b1_scoped_true_render,
  water_ripple_2vue_type_template_id_1b3467b1_scoped_true_staticRenderFns,
  false,
  null,
  "1b3467b1",
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
 

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"593516ee-vue-loader-template"}!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/circular-double/src/index.vue?vue&type=template&id=6d68762c&scoped=true&
var srcvue_type_template_id_6d68762c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"loading"},[_c('div',{staticClass:"container-left"},[_c('div',{staticClass:"left"}),_c('div',{staticClass:"left-after",style:({
          transform: _vm.transformL,
          backgroundColor: _vm.backgroundColor,
          display: _vm.divDisplayL
        })})]),_c('div',{staticClass:"container-right"},[_c('div',{staticClass:"right"}),_c('div',{staticClass:"right-after",style:({
          transform: _vm.transformR,
          backgroundColor: _vm.backgroundColor,
          display: _vm.divDisplayR
        })})]),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"innerPark"},[_vm._v(" "+_vm._s(_vm.childDataNum)+" ")])])])])
}
var srcvue_type_template_id_6d68762c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/circular-double/src/index.vue?vue&type=template&id=6d68762c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./packages/circular-double/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var circular_double_srcvue_type_script_lang_js_ = ({
  name: 'custom-circular-double',
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
// EXTERNAL MODULE: ./packages/circular-double/src/index.vue?vue&type=style&index=0&id=6d68762c&prod&lang=less&scoped=true&
var srcvue_type_style_index_0_id_6d68762c_prod_lang_less_scoped_true_ = __webpack_require__("51c3");

// CONCATENATED MODULE: ./packages/circular-double/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_circular_double_srcvue_type_script_lang_js_,
  srcvue_type_template_id_6d68762c_scoped_true_render,
  srcvue_type_template_id_6d68762c_scoped_true_staticRenderFns,
  false,
  null,
  "6d68762c",
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

// CONCATENATED MODULE: ./packages/index.js
/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:32:12 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:32:12 
 */





// 存储组件列表
const components = [turntable, water_ripple_1, water_ripple_2, circular_double]

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
  CircularDouble: circular_double
});

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.19@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "2b7f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "32c9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_ten.056fbde1.png";

/***/ }),

/***/ "34d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_1b3467b1_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e675");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_1b3467b1_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_2_vue_vue_type_style_index_0_id_1b3467b1_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "392c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/give_up.c8c1c287.png";

/***/ }),

/***/ "51c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d68762c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1b32");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d68762c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6d68762c_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85be":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9639":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_one.84279a9a.png";

/***/ }),

/***/ "c765":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_500.6732d3b0.png";

/***/ }),

/***/ "e125":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_five.31fb23b0.png";

/***/ }),

/***/ "e675":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_3274ceb4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85be");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_3274ceb4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_water_ripple_1_vue_vue_type_style_index_0_id_3274ceb4_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f6e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49d008f3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b7f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49d008f3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49d008f3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=custom-component.common.js.map
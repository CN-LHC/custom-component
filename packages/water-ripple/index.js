/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:32:20 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:32:20 
 */

// 导入组件，组件必须声明 name
import WaterRipple1 from './src/water-ripple-1.vue'
import WaterRipple2 from './src/water-ripple-2.vue'

// 为组件提供 install 安装方法，供按需引入
WaterRipple1.install = function (Vue) {
  Vue.component(WaterRipple1.name, WaterRipple1)
}

WaterRipple2.install = function (Vue) {
  Vue.component(WaterRipple2.name, WaterRipple2)
}


// 默认导出组件
export {
  WaterRipple1,
  WaterRipple2
} 

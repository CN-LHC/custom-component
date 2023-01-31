/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:30:58 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 15:07:23
 */

// 导入组件，组件必须声明 name
import cropperDialog from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
cropperDialog.install = function (Vue) {
  Vue.component(cropperDialog.name, cropperDialog)
}

// 默认导出组件
export default cropperDialog

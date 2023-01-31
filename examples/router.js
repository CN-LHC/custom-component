/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:29:54 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 15:44:24
 */

import Index from './components/index.vue'
import TurntableUse from './components/TurntableUse.vue'
import WaterRippleUse from './components/WaterRippleUse.vue'
import CircularDoubleUse from './components/CircularDoubleUse.vue'
import CropperDialog from './components/CropperDialog.vue'
 const routers  = [
    {path: '/', name:'Index', component: Index},
    {path: '/cropper-dialog', name: 'cropper-dialog', component: CropperDialog},
    // 大转盘
    {path:'/turn-table',name:'turn-table',  component:TurntableUse},
    // 水波纹比例图
    {path: '/water-ripple', name: 'water-ripple', component: WaterRippleUse},
    // 圆形百分比
    {path: '/circular-double', name: 'circular-double', component: CircularDoubleUse},
]

export default routers 
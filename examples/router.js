/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-07-03 10:59:26
 * @LastEditors: zemin zheng
 * @Description: 路由文件入口
 * @FilePath: \componentlib\examples\router.js
 */


import Index from './components/index.vue'
import TurntableUse from './components/TurntableUse.vue'
import WaterRippleUse from './components/WaterRippleUse.vue'
import CircularDoubleUse from './components/CircularDoubleUse.vue'

 const routers  = [
    {path: '/', name:'Index', component: Index},
    // 大转盘
    {path:'/turn-table',name:'turn-table',  component:TurntableUse},
    // 水波纹比例图
    {path: '/water-ripple', name: 'water-ripple', component: WaterRippleUse},
    // 圆形百分比
    {path: '/circular-double', name: 'circular-double', component: CircularDoubleUse},
]

export default routers 
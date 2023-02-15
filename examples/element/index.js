/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-30 09:48:13 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 15:40:22
 * 按需加载element UI 组件
 */
import 'element-ui/lib/theme-chalk/index.css'

import {
    Dialog,
    Input,
    Radio,
    RadioGroup,
    Button,
    ButtonGroup,
    Loading,
    Message,
    MessageBox
        } from 'element-ui'
export default {
    install: function(Vue) {
        Vue.use(Dialog);
        Vue.use(Input);
        Vue.use(Radio);
        Vue.use(RadioGroup);
        Vue.use(Button);
        Vue.use(ButtonGroup);
        Vue.use(Loading);
        Vue.use(Loading.directive);
        Vue.prototype.$message = Message;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
    }
}
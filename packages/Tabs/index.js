import Tabs from './src/index.vue'
import TabPane from './src/TabPane.vue'

Tabs.install = function (Vue) {
    Vue.component(Tabs.name, Tabs)
}

TabPane.install = function (Vue) {
    Vue.component(TabPane.name, TabPane)
}

export {
    Tabs,
    TabPane
}
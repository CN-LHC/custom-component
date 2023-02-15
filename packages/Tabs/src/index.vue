<template>
  <!--tabs容器-->
  <div class="tabs">
    <!--标签页容器-->
    <div ref="navWrap" class="tabs-nav-wrap">
      <!--标签页头label-->
      <div
        v-for="(item, index) in navList"
        :key="index"
        @click="handleChange(index)"
        class="tabs-tab"
        v-bind:class="{
          'tabs-tab-active': item.name === activeKey,
        }"
      >
        {{ item.label }}
      </div>
    </div>
    <!--所有pane组件使用的slot容器-->
    <div class="pane-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
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
}
</script>
<style scoped lang="less">
.tabs {
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // background: url("~@/assets/echarts-bgc.png") no-repeat;
  // background-size: 100% 100%;
  box-shadow: #20bcfc 0px 0px 2.14rem inset;
  display: flex;
  flex-direction: column;
}
.tabs-nav-wrap {
  position: relative;
  margin-bottom: 0.86rem;
}
.tabs-tab {
  display: inline-block;
  margin-right: 25px;
  padding: 0.43rem 0.71rem;
  cursor: pointer;
  font-weight: bold;
  color: #23cefd;
  font-size: 0.86rem;
  &:last-child {
    margin-right: 0;
  }
}
.tabs-tab-active {
  box-shadow: #20bcfc 0px 0px 0.71rem inset;
}
.pane-content {
  flex: 1;
  // overflow: hidden;
  > div {
    height: 100%;
  }
}
</style>

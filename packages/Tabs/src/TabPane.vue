]<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
}
</script>

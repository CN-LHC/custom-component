<!--
 * @Author: liuhanchuan
 * @Date: 2022-07-01 17:52:03
 * @LastEditTime: 2022-07-02 16:28:39
 * @LastEditors: zemin zheng
 * @Description: 水波纹比例图组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\WaterRippleUse.vue
-->
<template>
  <div class="WaterRipple-content">
    <div class="substance">
      <custom-water-ripple class="item" :num="0"> </custom-water-ripple>
      <custom-water-ripple class="item" :num="1"> </custom-water-ripple>
      <custom-water-ripple class="item" :num="100"> </custom-water-ripple>
    </div>
    <div class="substance">
      <custom-water-ripple-1 class="item" :num="0"> </custom-water-ripple-1>
      <custom-water-ripple-1 class="item" :num="1"> </custom-water-ripple-1>
      <custom-water-ripple-1 class="item" :num="100"> </custom-water-ripple-1>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterRipple",

  data() {
    return {
      countProp: 8,
    }
  },
  methods: {
    draw(e) {
      console.log(e)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.WaterRipple-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
}
.item {
  margin: 50px;
}
.substance {
  margin: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

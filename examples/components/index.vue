/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:30:36 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:30:36 
 */

<template>
  <div>
    <div class="content">
      <button
        class="button"
        type="success"
        size="medium"
        @click="btnComponent('turn-table')"
        >大转盘组件案例</button
      >
    </div>
    <div class="content">
      <button
        class="button"
        type="primary"
        size="medium"
        @click="btnComponent('water-ripple')"
        >水波纹比例图</button
      >
       <button
        class="button"
        type="info"
        size="medium"
        @click="btnComponent('circular-double')"
        >圆形百分比组件案例</button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {}
  },
  methods: {
    btnComponent(name) {
      this.$router.push("/" + name)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.button {
  margin-right: 15px;
}
</style>

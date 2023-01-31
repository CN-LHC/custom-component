/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:30:14 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:30:14 
 */

<template>
  <div class="CircularDoubleUse">
    <custom-circular-double :childData="config1" />
    <custom-circular-double :childData="config2" />
    <custom-circular-double :childData="config3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
         config1: {
        color: "#4674C6",
        num: 0,
      },
       config2: {
        color: "#4674C6",
        num: 0.68,
      },
      config3: {
        color: "#4674C6",
        num: 1,
      },
    }
  },
  methods: {
    down(blob, contentDisposition) {
      console.log(blob, contentDisposition)
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.CircularDoubleUse {
  height: 500px;
  display: flex;
}
</style>

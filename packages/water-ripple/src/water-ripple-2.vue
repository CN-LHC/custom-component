/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:31:15 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-01-31 14:32:46
 */

<template>
  <div>
    <div class="c-progress-circle">
          <span>{{ num }}%</span>
          <div class="wave"></div>
          <div
            class="wave-mask"
            :style="{ top: -num + '%' }"
          ></div>
        </div>
  </div>
</template>
<script>
export default {
  name: "custom-water-ripple-1",
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
}
</script>
<style lang="less" scoped>

  .c-progress-circle {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: 4px solid #e2edfc;
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 5;
      width: 100%;
      height: 100%;
    }
    .el-progress--circle {
      position: relative;
      z-index: 3;
    }
    .wave {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-image: linear-gradient(-180deg, #c2e1fd 13%, #449eff 100%);
      border-radius: 50%;
      z-index: 2;
    }
    .wave-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 40%;
      transform: rotate(0);
      animation: toRotate 10s linear -5s infinite;
      z-index: 2;
      background: #fff;
    }

    @keyframes toRotate {
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>

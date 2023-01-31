# 水波纹比例图组件

## lhc-water-ripple 组件

## lhc-water-ripple-1 组件

一个基于css水波纹比例图组件

lhc-water-ripple、lhc-water-ripple-1有什么区别

* 样式不一样

### 使用方法

```javascript
<div class="substance">
  <lhc-water-ripple class="item" :num="0"> </lhc-water-ripple>
  <lhc-water-ripple class="item" :num="1"> </lhc-water-ripple>
  <lhc-water-ripple class="item" :num="100"> </lhc-water-ripple>
</div>
<div class="substance">
  <lhc-water-ripple-1 class="item" :num="0"> </lhc-water-ripple-1>
  <lhc-water-ripple-1 class="item" :num="1"> </lhc-water-ripple-1>
  <lhc-water-ripple-1 class="item" :num="100"> </lhc-water-ripple-1>
</div>

data(){
    return {}
},
methods: {
  
},
mounted() {
 
},
```

### 哪里引用了 lhc-water-ripple 组件？

examples/components/WaterRippleUse.vue

### 效果

![5.lhc-water-ripple](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220702163356.gif)

请访问：http://localhost:8080/water-ripple

### WaterRipple Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| num  | 数值 | Number | ——   | 0      |

### WaterRipple Events

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 点击事件 | true |

### WaterRipple-data Attributes

| 参数 | 说明 | 类型   | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ | ------ |
| —— | —— | String | ——   | ——   |

### 组件相关信息

| Author      | CreateTime | UpdateTime | Introduction       | parameter |
| ----------- | ---------- | ---------- | ------------------ | --------- |
| liuhanchuan | 2022/7/2   |            | lhc-water-ripple   | num:0     |
| liuhanchuan | 2022/7/2   |            | lhc-water-ripple-1 | num:0     |

# [个人NPM组件库](https://www.npmjs.com/package/zzmcomponentlib)custom-component-lib

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### 打包到npm

```
npm run lib
```

### 登录npm

```
npm login
```

### npm发布包：

```
npm publish
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Git

master：主分支
develop：开发分支（目前在此开发）

### 目录

|-- examples      // 用作示例展示

|-- packages      // 用于组件库存放

### Update Log

---

## 使用该组件库

### 安装

`npm install @liuhanchuan/custom-component-lib --save-dev`

### 卸载

`npm uninstall @liuhanchuan/custom-component-lib`

### 更新的就npm i全局一下，在 `npm i custom-component-lib --save-dev`

```
import custom-component-lib from '@liuhanchuan/custom-component-lib'
import  '@liuhanchuan/custom-component-lib/lib/custom-component-lib.css'
Vue.use(custom-component-lib)
```

### 说明

`组件库部分组件依赖第三方组件库，使用前请检查项目是否安装以下依赖包`

| 依赖包名称 | 安装方式               | 说明                                    |
| ---------- | ---------------------- | --------------------------------------- |
| element-ui | npm install element-ui | 基于vue 实现的一套不依赖业务的UI 组件库 |
|            |                        |                                         |

### 0.0.1

| 新特性                           |         描述         | Bug修复 | 作者 | 更新时间 |
| -------------------------------- | :------------------: | :-----: | :--: | :-------: |
| 添加 `lhc-turntable`组件       |        大转盘        |   --   | lhc | 2023/1/31 |
| 添加 `lhc-water-ripple`组件    |     水波纹比例图     |   --   | lhc | 2023/1/31 |
| 添加 `lhc-water-ripple-1`组件  | 水波纹另外形状比例图 |   --   | lhc | 2023/1/31 |
| 添加 `lhc-circular-double`组件 |      圆形百分比      |   --   | lhc | 2023/1/31 |

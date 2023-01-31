/*
 * @Author: liuhanchuan 
 * @Date: 2023-01-31 14:29:33 
 * @Last Modified by:   liuhanchuan 
 * @Last Modified time: 2023-01-31 14:29:33 
 */

const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  devServer: {
    port: 8080,
    // https: true,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   },
    // },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("./examples"))

    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
}

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: ['.js', '.vue']
    },
  },
  css:{
    loaderOptions: {
      less: {
        modifyVars:{
          "@ant-prefix": 'cns'
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 9999,
    open: true,
  },
  transpileDependencies: true
})

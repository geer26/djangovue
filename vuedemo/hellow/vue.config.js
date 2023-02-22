const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //publicPath: 'http://localhost:8080/',
    publicPath: '../static/dist',
    outputDir: '../static/dist',
    indexPath: '../../templates/index.html',

    configureWebpack: {
      devServer: {
        devMiddleware: {
            writeToDisk: true
        }
      }
    },

    transpileDependencies: true
})

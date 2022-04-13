const {createProxyMiddleware: proxy} = require('http-proxy-middleware')

console.log(proxy)

module.exports = function(app) {
  app.use(
    proxy('/dev-api', {
      target: 'http://120.46.155.29:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/dev-api': ''
      }
    })
  )
}
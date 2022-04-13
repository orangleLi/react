场景：前端页面在localhost:3000下，请求接口在localhost:5000下，请求跨域。
## 方法一
> 在package.json中追加配置

```
"proxy": "http://localhost:5000"
```

说明：
  1. 优点：配置简单，前端请求资源时可以不加任何前缀
  2. 缺点：不能配置多个代理
  3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么改请求会转发给5000（优先匹配前端资源）

  ## 方法二
  
  1. 第一步：创建代理配置文件

  ```
  在src下创建配置文件：src/setupProxy.js，不用自己引入，也不能是其他名称，webpack会自动找setupProxy.js文件
  ```

  2. 配置setupProxy.js配置具体代理规则：

  ```
  const proxy = require('http-proxy-middleware')
  module.exports = function(app) {
    app.use(
      proxy('/api1', {    // /api1是需要转发的请求（所有带有/api1前缀的请求都会转发给5000）
        target: 'http://localhost:5000',  // 配置转发目标地址（能返回数据的服务器地址）
        changeOrigin: true, // 控制服务器接收到的请求头中Host字段的值
        /**
        * changeOrigin为true时，服务器收到的请求头中的host为：localhost:5000
        * changeOrigin为false时，服务器收到的请求头中的host为：localhost:3000
        changeOrigin默认值为false，但是我们一般将其设置为true
        */
        pathRewrite: {  // 去除请求前缀，保证交给后台的服务器的是正常的请求地址（必须配置）
          '^/api1': ''
        }
      }),
      proxy('/api2', {
        target: 'http://localhost:5001',
        changeOrigin: true,
        pathRewrite: {
          '^/api2': ''
        }
      })
    )
  }
  ```
  说明：
  1. 优点：可以配置多个前端代理，可以灵活的控制请求是否走代理。
  2. 缺点：配置繁琐，前端请求资源时必须加前缀。
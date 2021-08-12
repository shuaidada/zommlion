module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // devServer: {
  //   proxy: {
  //       '/poalbum': {     //这里最好有一个 /
  //           target: 'http://apisandbox.zoomlion.com',  // 后台接口域名
  //           ws: true,        //如果要代理 websockets，配置这个参数
  //           secure: false,  // 如果是https接口，需要配置这个参数
  //           changeOrigin: true,  //是否跨域
  //           pathRewrite:{
  //             '^/poalbum':''
  //           }
  //       }
  //   }
  // }
}

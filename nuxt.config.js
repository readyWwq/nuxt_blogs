
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  * <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/atom-one-dark.min.css">
  * <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '只要牛肉不要面,专注前端开发，我给你讲讲前端的故事，网站建设,网站成型,网站搭建,一二三建站,个人网站模板,网站模板下载'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/atom-one-dark.min.css' }
    ],
    script:[
      {src:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"},
      {src:"/widget/source/autoload.js"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
    'assets/main.css',
    'assets/icon/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/directive/directive',
    '~/plugins/tool',
    '~/plugins/api'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
** Axios module configuration
*/
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
  },

  proxy: {
    '/api': {
      target: 'http://39.99.193.63:8000/api',//这里是需要代理的接口地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
 /* router:{
    /!*每个路由切换都会调用中间件*!/
    middleware:"auth"
  },*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server:{
    host:'192.168.31.239',
    port:7000
  }
}

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    titleTemplate: '%s - nekozuki.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ねこづきあゆむのうぇぶさいとです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'nekozuki.me' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://nekozuki.me' },
      { hid: 'og:title', property: 'og:title', content: 'nekozuki.me' },
      { hid: 'og:description', property: 'og:description', content: 'ねこづきあゆむのうぇぶさいとです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://nekozuki.me/img/thumb/nekozuki.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nekozuki_dev' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/ogp/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/icomoon_fonts/icomoon-style.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-microcms-module',
    '@nuxtjs/date-fns'
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'nuxt-helmet',
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    '@nuxtjs/axios',
    '@nuxtjs/date-fns'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900']
    }
  },
  helmet: {
    frameguard: false,
    hidePoweredBy: true
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist',

  loading: {
    color: '#3273dc',
    failedColor: 'red',
    height: '2px'
  },
}

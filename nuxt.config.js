export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    titleTemplate: '%s - ねこづきあゆむのうぇぶさいと',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ねこづきあゆむのうぇぶさいとです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ねこづきあゆむのうぇぶさいと' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://nekozuki.me' },
      { hid: 'og:title', property: 'og:title', content: 'ねこづきあゆむのうぇぶさいと' },
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
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/jquery_init.js', ssr: false },
    { src: '~/plugins/universe.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: false,
      compact: false
    }
  },

  loading: {
    color: '#3273dc',
    failedColor: 'red',
    height: '2px'
  },


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/bootstrap
      'nuxt-helmet',
      'bootstrap-vue/nuxt',
      'nuxt-fontawesome',
      'nuxt-webfontloader',
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
    }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

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
      { name: 'twitter:card', content: 'summary' },
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'nuxt-helmet',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
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
      families: ['Kosugi+Maru']
    }
  },
  helmet: {
    frameguard: false,
    hidePoweredBy: true
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/nekozuki_blog/': {
      target: 'https://blog.nekozuki.me/atom.xml',
      pathRewrite: {
        '^/api/nekozuki_blog/': '/'
      }
    },
    '/api/nico/user_45048152/': {
      target: 'http://createfeed.fivefilters.org/extract.php?url=https%3A%2F%2Fwww.nicovideo.me%2Fmusic%2Fuser%2F45048152&item=%23playlistTable+tr&item_title=span.playlistTableTitle&item_url=span.playlistTableTitle&item_image=img.playlistTableThumb&max=5&order=document&guid=0',
      pathRewrite: {
        '^/api/nico/user_45048152/': '/?url=https%3A%2F%2Fwww.nicovideo.me%2Fmusic%2Fuser%2F45048152&item=%23playlistTable+tr&item_title=span.playlistTableTitle&item_url=span.playlistTableTitle&item_image=img.playlistTableThumb&max=5&order=document&guid=0'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend ( config, { isDev, isClient, isServer } ) {
      if(isServer){
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore',
          '@firebase/analytics': 'commonjs @firebase/analytics',
        }
      }
    },
    babel: {
      babelrc: false,
      compact: false
    }
  },

  loading: {
    color: '#3273dc',
    failedColor: 'red',
    height: '2px'
  }
}

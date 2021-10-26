export default {
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
      { hid: 'description', name: 'description', content: '' },
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
    '~/assets/icomoon_fonts/icomoon-style.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
    'nuxt-helmet',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Firebase module config: https://firebase.nuxtjs.org/
  firebase: {
    config: {
      apiKey: "AIzaSyCbAXWi2lL-Sks6QlSWXJkEvBFO4B6HtCU",
      authDomain: "nekozuki-me.firebaseapp.com",
      projectId: "nekozuki-me",
      storageBucket: "nekozuki-me.appspot.com",
      messagingSenderId: "330168009163",
      appId: "1:330168009163:web:ee57e276d708c84d06f64e",
      measurementId: "G-FL4ZD7VFLW"
    },
    services: {
      firestore: true,
      analytics: true,
    },
    firestore: {
      memoryOnly: false,
      chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]',
      enablePersistence: true,
      emulatorPort: 8080,
      emulatorHost: 'localhost',
      settings: {
        // Firestore Settings - currently only works in SPA mode
      }
    }
  },

  // Helmet module config
  helmet: {
    frameguard: false,
    hidePoweredBy: true
  },

  // Fontawesome module config
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

  // Webfontloader module config
  webfontloader: {
    google: {
      families: ['M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#3273dc',
    failedColor: 'red',
    height: '2px'
  },
}

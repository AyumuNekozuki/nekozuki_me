export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nekozuki_me',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/nicoicon_fonts/nicoicon.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/date-fns',
    'nuxt-microcms-module',
    'nuxt-fontawesome',
    'nuxt-helmet',
  ],

  // proxy :{
  //   '/api_nicovideo/':{
  //     target: 'https://public.api.nicovideo.jp',
  //     pathRewrite: {'^/api/nicovideo/': '/'}
  //   }
  // },
  webfontloader: {
    google: {
      families: [
        'Noto+Sans+JP:400,700',
        'M+PLUS+Rounded+1c:100,300,400,500,700,800,900'
      ] 
    }
  },
  microcms:{
    options:{
      serviceDomain: process.env.MC_SERVICE_DOMAIN,
      apiKey: process.env.MC_API_KEY
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },
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
  helmet: {
    frameguard: false,
    hidePoweredBy: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist',
}

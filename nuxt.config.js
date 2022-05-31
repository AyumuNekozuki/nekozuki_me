export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nekozuki.me',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ねこづきあゆむのWebサイトです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'nekozuki.me' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.nekozuki.me' },
      { hid: 'og:title', property: 'og:title', content: 'nekozuki.me' },
      { hid: 'og:description', property: 'og:description', content: 'ねこづきあゆむのWebサイトです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.nekozuki.me/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nekozuki_dev' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/nicoicon_fonts/nicoicon.css',
    '~/assets/style/color.scss',
    '~/assets/style/loading.scss',
    '~/assets/style/text_area.scss',
    '~/assets/style/linklist.scss',
    '~/assets/style/contents_list.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-154884607-3'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    // 'nuxt-microcms-module',
    '@nuxtjs/date-fns',
    'nuxt-fontawesome',
    'nuxt-helmet',
    '@nuxtjs/pwa'
  ],

  webfontloader: {
    google: {
      families: [
        'Noto+Sans+JP:400,700',
        'M+PLUS+Rounded+1c:100,300,400,500,700,800,900'
      ]
    }
  },

  // memo: microcms なんかうごかない
  microcms: {
    options: {
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
    prefix: '/',
    proxy: true,
  },
  proxy: {
    '/api_nicorepo/': {
      target: 'https://public.api.nicovideo.jp',
      pathRewrite: {
        '^/api_nicorepo/': '/v1/timelines/nicorepo/'
      }
    },
    '/api_mc_nekolog/': {
      target: 'https://nekolog.microcms.io',
      pathRewrite: {
        '^/api_mc_nekolog/': '/api/'
      },
      headers: { "X-MICROCMS-API-KEY": process.env.MC_BLOG_API_KEY },
    },
    '/api_mc_nekozukime/': {
      target: 'https://nekozuki-me.microcms.io',
      pathRewrite: {
        '^/api_mc_nekozukime/': '/api/'
      },
      headers: { "X-MICROCMS-API-KEY": process.env.MC_API_KEY },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist',

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    // manifest: {
    //   name: 'nekozuki.me',
    //   lang: 'ja',
    //   short_name: 'nekozuki.me',
    //   description: 'ねこづきあゆむのWebサイトです。',
    //   display: 'standalone',
    //   start_url: '/',
    //   theme_color: '#7f7fff',
    //   background_color: '#EFEFFF',
    // },
    // icon: {
    //   source: '/static/favicon.png',
    //   fileName: 'favicon.png'
    // },
    // workbox: {
    //   dev: true,
    //   offline: false,
    //   skipWaiting: true,
    //   clientsClaim: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: `/api_nicorepo/*`,
    //       handler: 'staleWhileRevalidate',
    //       method: 'GET',
    //       strategyOptions: {
    //         cacheExpiration: {
    //           maxAgeSeconds: 60 * 15, // 15分
    //         },
    //         cacheableResponse: {
    //           statuses: [200],
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: `/api_mc_nekolog/*`,
    //       handler: 'staleWhileRevalidate',
    //       method: 'GET',
    //       strategyOptions: {
    //         cacheExpiration: {
    //           maxAgeSeconds: 60 * 30, // 30分
    //         },
    //         cacheableResponse: {
    //           statuses: [200],
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: `/api_mc_nekozukime/*`,
    //       handler: 'staleWhileRevalidate',
    //       method: 'GET',
    //       strategyOptions: {
    //         cacheExpiration: {
    //           maxAgeSeconds: 60 * 60 * 3, // 3時間
    //         },
    //         cacheableResponse: {
    //           statuses: [200],
    //         },
    //       },
    //     },
    //     {
    //       // デフォルト（最後に記述する）
    //       urlPattern: '/*',
    //       handler: 'networkFirst',
    //       method: 'GET',
    //     },
    //   ],
    // }
  },

  loading: {
    color: '#fafafa',
    failedColor: 'red',
    height: '2px'
  },
}

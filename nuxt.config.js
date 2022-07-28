export default {
  target: 'static',
  head: {
    title: 'bblvrs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // {
      //   rel: 'preload',
      //   as: 'font',
      //   type: "font/woff2",
      //   href: '/fonts/<PATH>.woff2',
      //   crossorigin: 'anonymous'
      // },
    ]
  },
  css: [
      '~/assets/css/fonts.css',
      '~/assets/css/global.scss',
  ],
  plugins: [
    { src: '~/plugins/$api' },
	  { src: '~/plugins/height.js', mode: 'client' },
  ],
  components: false,
  buildModules: [
    // [
    //   "@nuxtjs/dotenv",
    //   {
    //     path: "./",
    //     filename: ".env"
    //   }
    // ],
    '@nuxtjs/style-resources'
  ],
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/i18n',
    // '@nuxtjs/sitemap',
    // '@nuxtjs/robots'
    // ['nuxt-lazy-load', {
    //   directiveOnly: true,
    //   observerConfig: {
    //     rootMargin: '0px 0px 200px 0px'
    //   }
    // }],
    // [
    //   "nuxt-compress",
    //   {
    //     gzip: {
    //       cache: true
    //     },
    //     brotli: {
    //       threshold: 10240
    //     }
    //   }
    // ],
  ],
  styleResources: {
    scss: ['./assets/css/resources/*.scss'],
    hoistUseStatements: true,
  },
  // i18n: {
  // seo: true,
  //   locales: [
  //     {
  //       code: 'ua',
  //       iso: 'uk',
  //       isCatchallLocale: true
  //     },
  //     {
  //       code: 'en',
  //       iso: 'en'
  //     }
  //   ],
  //   defaultLocale: 'ua',
  //   vueI18n: {
  //     fallbackLocale: 'ua',
  //     messages: {
  //       ua: require("./lang/ua.json"),
  //       en: require("./lang/en.json")
  //     }
  //   }
  // },
  hooks: {
    'modules:before': function (nuxt) {
      nuxt.options.features.transitions = false
      nuxt.options.features.validate = false
      nuxt.options.features.fetch = false
    }
  },
  // gtm: {
  //   id: '', // GTM ID HERE
  //   enabled: true
  // },
  // axios: {
  //   baseUrl: process.env.API_URL
  // },
  build: {
  },
  robots: {
    Sitemap: '', // SITEMAP URL HERE
    UserAgent: '*',
    Disallow: [],
    Allow: [
      '*/images',
      '/*/*.js',
      '/*/*.css',
      '/*/*.jpg',
      '/*/*.gif',
      '/*/*.png',
      '/*/*.svg'
    ]
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: process.env.CLIENT_URL,
    cacheTime: 1000 * 60 * 60 * 24,
    gzip: true,
    trailingSlash: false,
    // i18n: true, // IF i18n
    defaults: {
      lastmod: new Date()
    },
    exclude: [
      '/404',
      '/ru/404',
      '/en/404',
      // OTHER ROUTES
    ],
    routes: async () => {
      // ROUTES HERE
    }
  },
  generate: {
    fallback: '404.html',
    dir: 'dist',
    crawler: false,
    exclude: [],
    subFolders: false,
    // async routes() {
    //   // ROUTES HERE
    // }
  },
  router: {
    trailingSlash: false
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['font'].includes(type)
      }
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter(f => f.asType === 'script' && f.file === 'runtime.js')
          .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  }
}

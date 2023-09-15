export default {
 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-fichas-destacados',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      { 
        rel: 'stylesheet', 
        href: '/css/bootstrap.min.css' 
      },
    ],
    script: [
      {
        src: '/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slider-component/theme/antd.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css' ,
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue-cool-lightbox/dist/vue-cool-lightbox.min.css',
    './static/scss/main.scss',
  ],
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel.js',
    ssr: false
   },
    {
      src: '~/plugins/vue-slider-component.js',
      ssr: false
    },
    { src: '~/plugins/vue-cool-light-box.js' },
    { src: '~/plugins/skeleton-loader.js' },
    { src: '~/plugins/jw-vue-pagination.js', ssr: false },
    { src: '~plugins/leaflet.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',"@nuxtjs/svg",
    '@nuxtjs/google-fonts'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  googleFonts: {
    families: {
      Rubik: [400,600,700],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv', 
    'nuxt-leaflet',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
      prettify: false
    },
    extend (config, ctx) {
      config.resolve.symlinks = false
    }
  },
  extendRoutes (routes, resolve) {
    routes.push({
      name: 'Seminuevos',
      path: '/seminuevos/:param',
      component: resolve(__dirname, 'pages/seminuevos/_Seminuevos.vue'),
      chunkName: 'pages/seminuevos/_Seminuevos'
    })
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'adminPanel',
    htmlAttrs: {
      lang: 'ru'
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
    '~/node_modules/@braid/vue-formulate/dist/snow.min.css',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/style.css',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axiosPort.js',
    '~/plugins/formGenerator.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: 'http://server.na4u.ru/api/v1',
    baseURL: 'http://localhost:5000/api/v1'
  },

  router: {
    linkActiveClass: 'nav-link',
    linkExactActiveClass: 'active'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

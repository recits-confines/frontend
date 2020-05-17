import path from 'path'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: process.env.APP_LANG || 'fr'
    },
    title: 'Récits confinés',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#222b6e',
    height: '4px',
    continuous: true
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/formulate',
    { src: '~/plugins/shortkey', ssr: false },
    { src: '~/plugins/swing', ssr: false },
    { src: '~/plugins/storage', ssr: false },
    { src: '~/plugins/db', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry'
  ],
  /*
  ** Nuxt.js extra routes
  */
  generate: {
    routes: require(path.join(__dirname, 'forms/weekly.json')).map((week, index) => `/weekly/${index}`)
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL || '',
    https: true,
    retry: { retries: 3 }
  },
  /*
  ** PWA module configuration
  ** See https://pwa.nuxtjs.org/
  */
  pwa: {
    workbox: {
      importScripts: [
        'notifications.js'
      ]
    }
  },
  /*
  ** Sentry module configuration
  ** See https://github.com/nuxt-community/sentry-module
  */
  sentry: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

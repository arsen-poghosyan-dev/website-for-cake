// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  app: {
    head: {
      htmlAttrs: {lang: 'ru'},
      charset: 'utf-8',
      // viewport: 'width=500, initial-scale=1',
      viewport: 'content=width=device-width, initial-scale=1',

      title: 'App',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],

      meta: [
        {name: 'description', content: 'App'},
        // https://www.favicon-generator.org/
        // {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png'},
        // {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png'},
        // {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png'},
        // {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png'},
        // {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png'},
        // {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png'},
        // {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png'},
        // {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png'},
        // {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png'},
        // {rel: 'icon', sizes: '192x192', type: 'image/png', href: '/favicon/android-icon-192x192.png'},
        // {rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon/favicon-32x32.png'},
        // {rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicon/favicon-96x96.png'},
        // {rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon/favicon-16x16.png'},
        // {name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png'},

        {name: 'msapplication-TileColor', content: '#920ec0'},
        {name: 'theme-color', content: '#920ec0'},
        {name: 'msapplication-navbutton-color', content: '#920ec0'},
        {name: 'apple-mobile-web-app-status-bar-style', content: '#920ec0'},

      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
      duration: 300,
      onBeforeEnter: (el) => {

      },
      onEnter: (el, done) => {
      },
      onAfterEnter: (el) => {
      }
    }
    // pageTransition: {
    //     name: 'page',
    //     mode: 'out-in' // default
    // },
    // layoutTransition: {
    //     name: 'page',
    //     mode: 'out-in' // default
    // }
  },

})

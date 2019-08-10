import NuxtConfiguration from '@nuxt/config';

export default {
  mode: 'spa',
  head: {
    title: 'Freevue - POP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0' },
      { name: 'theme-color', content: '#72cc96' },
      {
        hid: 'description',
        name: 'description',
        content: "POP! Freevue's Small Project"
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Freevue POP' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' },
    ],
  },
  css: [
    'static/css/default.css'
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  loading: { color: '#72cc96' },
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) config.module = { rules: [] }
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'Freevue-Project',
    short_name: 'Freevue-POP',
    start_url: '/',
    Scope: '/',
    splash_pages: null,
    display: 'standalone',
    background_color: '#E4E4E6',
    theme_color: '#72cc96'
  },
  workbox: {
    offline: false,
    runtimeCaching: [
      {
        urlPattern: "/*",
        handler: "networkFirst",
        method: "GET"
      }
    ]
  },
} as NuxtConfiguration;

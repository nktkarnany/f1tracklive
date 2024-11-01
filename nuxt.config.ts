import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ],

  // mapbox: {
  //   accessToken: 'pk.eyJ1Ijoibmt0a2FybmFueSIsImEiOiJjbTJ5bHl5MnAwMjF6Mm1zOGpidXFlYTFoIn0.Xa2nwsPqC98sFQ9fTils4Q'
  // },

  spaLoadingTemplate: false,

  ssr: false,

  srcDir: 'app/infrastructure/ui',

  components: [{ path: 'components', pathPrefix: false }],

  css: ['assets/styles/index.scss'],

  devtools: { enabled: false },

  alias: {
    '@domain': resolve(__dirname, './app/domain'),
    '@infra': resolve(__dirname, './app/infrastructure'),
    '@usecases': resolve(__dirname, './app/usecases')
  },

  app: {
    head: {
      titleTemplate: 'F1 Track Live',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
});

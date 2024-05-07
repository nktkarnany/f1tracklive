// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/image', '@vueuse/nuxt'],

  spaLoadingTemplate: false,

  ssr: false,

  css: ['~/assets/styles/index.scss'],

  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: 'F1 Track Live',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
});

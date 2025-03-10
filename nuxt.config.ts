// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  app: {
    layoutTransition: true,
    pageTransition: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/supabase.js'],
  compatibilityDate: '2024-11-08',
  build: {
    transpile: ['echarts', 'vue-echarts']
  }
})
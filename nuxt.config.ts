// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/supabase.js'],
  compatibilityDate: '2024-11-08',
})
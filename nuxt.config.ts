// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
     modules: ["nuxt-microcms-module", "@nuxt/ui"],
     microCMS: {
       serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
       apiKey: process.env.MICROCMS_API_KEY,
     },
  
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  // app: {
  //   baseURL: '/nvrcd-web-lms/',
  //   },
  plugins: ['~/plugins/prism.js'],
     modules: ["@nuxt/ui"],
    runtimeConfig: {
      public: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        CMSapiKey: process.env.MICROCMS_API_KEY,
        apiKey: process.env.NUXT_FIREBASE_API_KRY,
        authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_FIREBASE_APP_ID,
      }
    }
  
})
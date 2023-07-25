// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        }
      ]
    }
  },
  routeRules: {
    "/": {
      swr: 600
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  pinia: {
    autoImports: [
      "defineStore",
      "acceptHMRUpdate"
    ]
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  ssr: true
})

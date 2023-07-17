// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
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
  css: ["assets/boxicons/css/boxicons.css"],
  ssr: true
})

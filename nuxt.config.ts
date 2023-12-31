// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})

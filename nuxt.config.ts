// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image'
  ],
  app: {
    baseURL: '/portfolioSite/',
    head: {
      title: 'Jeremy | Game Dev & Software Engineer', // Standard-Titel
      htmlAttrs: { lang: 'de' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Entdecke das Portfolio von Jeremy: Innovative, selbst programmierte Spiele zum Download, detaillierte Devlogs und tiefe Einblicke in meinen Code. Erfahre mehr über meine Skills als Software Engineer!' 
        }
      ],
    }
  },
  content: {
    renderer: {
      anchorLinks: {
        h3: false,
        h4: false
      }
    }
  }
})
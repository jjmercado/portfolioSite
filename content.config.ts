import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    devlog: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'devlog/**'
    }),
    polyslayer: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'devlog/polyslayer/*.md',      
      schema: z.object({
        date: z.date()
      })
    }),
    // spaceTrader: defineCollection({
    //   // Specify the type of content in this collection
    //   type: 'page',
    //   // Load every file inside the `content` directory
    //   source: 'devlog/space-trader/*.md',
    //   schema: z.object({
    //     date: z.date()
    //   })
    //}),
    games: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'games/*.md'
    })
  }
})
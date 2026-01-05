import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    devlog: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'devlog/**'
    }),
    dungeonCrawler: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'devlog/dungeon-crawler/*.md',      
      schema: z.object({
        //tags: z.array(z.string()),
        //image: z.string(),
        date: z.date()
      })
    }),
    spaceTrader: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'devlog/space-trader/*.md'
    }),
    games: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'games/*.md'
    })
  }
})
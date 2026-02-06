<template>
  <section id="games" class="py-16 sm:py-20">
    <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-4xl font-bold text-center mb-10">Meine Spiele</h2>
    
    <!-- Grid-Container für die dynamisch geladenen Karten -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Dynamische Schleife, die für jedes Spiel eine Karte generiert -->
      <div v-for="game in games" :key="game.slug" 
           class="group bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20">
        
        <!-- Bild/Video-Container -->
        <div class="w-full h-48 overflow-hidden">
          <!-- Standbild (wird angezeigt, wenn nicht gehovert) -->
          <NuxtImg :src="game.image" :alt="`${game.title} Standbild`" class="w-full h-full object-cover block group-hover:hidden group-focus-within:hidden"/>
          <!-- Animiertes GIF (wird bei Hover angezeigt) -->
          <video autoplay="true" loop="true" :src="game.video" :alt="`${game.title} Animation`" class="w-full h-full object-cover hidden group-hover:block group-focus-within:block"></video>
        </div>
        
        <!-- Inhalts-Container mit Link zur Detailseite -->
        <NuxtLink :to="`/games/${game.slug}`" class="p-6 flex-grow flex flex-col">
          <h3 class="text-xl font-bold text-white mb-2">{{ game.title }}</h3>
          <p class="text-slate-400 text-base flex-grow mb-4">{{ game.description }}</p>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in game.tags" :key="tag" class="bg-rose-400/10 text-rose-400 text-xs font-medium px-2.5 py-1 rounded-full">
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

// Lade die Daten für alle Spiele aus dem 'games' Content-Verzeichnis
const { data: gamesData } = await useAsyncData('games-list', () => 
  queryCollection('games').all()
);

const games = computed(() => {
  if (!gamesData.value) return [];
  
  // Verarbeite die Rohdaten in ein sauberes Format für das Template
  return gamesData.value.map(game => ({
    title: game.title,
    description: game.description,
    slug: game.path.split('/').pop(),
    image: game.meta.image,
    video: game.meta.video,
    tags: game.meta.tags || [] // Stellt sicher, dass tags immer ein Array ist
  }));
});

useSeoMeta({
  title: 'Spiele-Portfolio | C++ & SFML Projekte von Jeremy',
  description: 'Meine Reise durch die Spieleentwicklung: Von Grund auf programmierte Klassiker wie Pac-Man, Asteroids und Pong in C++ mit SFML. Entdecke Code & Logik hinter den Games.',
  
  ogTitle: 'C++ & SFML Game Dev Portfolio - Jeremy',
  ogDescription: 'Retro-Klassiker neu programmiert: Einblicke in die Engine-Grundlagen, Physik und KI meiner C++ Projekte.',
  ogImage: '/portfolioSite/games-overview-preview.png', 
  ogType: 'website'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://jjmercado.github.io/portfolioSite/games' }
  ]
})
</script>

<style scoped>
/* Hier sind keine zusätzlichen Stile nötig, da alles über Tailwind-Klassen gesteuert wird. */
</style>
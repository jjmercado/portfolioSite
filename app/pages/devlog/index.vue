<template>
  <div class="container mx-auto px-4 max-w-4xl">
  <div class="py-16 sm:py-20 text-center">
    <h1 class="text-4xl font-bold mb-10">Devlogs</h1>
    <p class="mt-6 text-lg leading-8 text-slate-300 m-4">
      Wähle ein Projekt aus, um die dazugehörigen Devlogs zu sehen.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtLink v-for="project in projects" :key="project.slug" :to="`/devlog/project/${project.slug}`" class="block overflow-hidden bg-gray-900/50 ring-1 ring-white/10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-purple-500">
        <img v-if="project.image" :src="project.image" :alt="project.displayName" class="w-full h-48 object-cover"/>
        <div class="p-4 text-center font-bold capitalize">{{ project.displayName }}</div>
      </NuxtLink>
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Wir holen uns mehr Informationen von useAsyncData: pending und error
const route = useRoute()
const projectRoute = route.path

// Konvertiert 'dungeon-crawler' zu 'dungeonCrawler'
const projectNameAsCamelCase = computed(() => {
  if (!projectRoute) return '';
  return projectRoute.replace(/-(\w)/g, (_, c) => c.toUpperCase());
});

const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('devlog').all()
})

const projects = computed(() => {
  if (!posts.value) return [];
  
  // 2. Verwende ein Map-Objekt, um Projekte zu sammeln und Duplikate zu vermeiden
  const projectMap = new Map();
  
  posts.value.forEach(post => {
    // Extrahiere den Projekt-Slug aus dem Pfad (z.B. 'dungeon-crawler')
    const projectSlug = post.path.split('/')[2];
    
    // Wenn wir dieses Projekt noch nicht in der Map haben, fügen wir es hinzu.
    // So wird nur der erste gefundene Eintrag pro Projekt verwendet.
    if (projectSlug && !projectMap.has(projectSlug)) {
      projectMap.set(projectSlug, {
        slug: projectSlug,
        // Der Anzeigename, z.B. 'dungeon crawler'
        displayName: projectSlug.replace('-', ' '),
        // Nimm den Bildpfad aus dem Post-Objekt
        image: post.meta.project_image ? '/portfolioSite' + post.meta.project_image : null 
      });
    }
  });
  // 3. Wandle die Werte der Map in ein Array um, das vom Template verwendet werden kann.
  return Array.from(projectMap.values());
});
</script>
<style scoped>

</style>
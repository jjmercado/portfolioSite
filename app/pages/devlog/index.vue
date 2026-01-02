<template>
  <div>
    <h1>Devlogs</h1>
    <p>Wähle ein Projekt aus, um die dazugehörigen Devlogs zu sehen.</p>

    <!-- NEUE DEBUG-AUSGABE -->
    <!-- <div style="border: 2px solid red; padding: 10px; margin-bottom: 20px;">
      <h3>Debugging-Info:</h3>
      <pre>Pending (lädt noch): {{ pending }}</pre>
      <pre>Error (Fehler): {{ error }}</pre>
      <pre>Posts (Daten): {{ page }}</pre>
    </div> -->
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtLink v-for="project in projects" :key="project.name" :to="`/devlog/project/${project.name}`" class="block overflow-hidden bg-gray-900/50 ring-1 ring-white/10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-purple-500">
        <img v-if="project.image" :src="project.image" :alt="project.name"/>
        <div class="p-4 text-center font-bold">{{ project.name }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Wir holen uns mehr Informationen von useAsyncData: pending und error
const route = useRoute()
const { data: page, pending, error } = await useAsyncData(route.path, () => {
  return queryCollection('devlog').select('meta').all()
})

console.log(page)

// Der Rest des Scripts bleibt gleich
const projects = computed(() => {
  if (!page.value) return [];
  
  const projectMap = new Map();
  page.value.forEach(post => {
    if (post && !projectMap.has(post)) {
      projectMap.set(post, {
        name: post.meta.project,
        image: post.meta.project_image || null
      });
    }
  });
  
  return Array.from(projectMap.values());
});
</script>
<style scoped>

</style>
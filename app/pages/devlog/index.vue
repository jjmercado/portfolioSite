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
    
    <div class="project-grid">
      <NuxtLink v-for="project in projects" :key="project.name" :to="`/devlog/project/${project.name}`" class="project-card">
        <img v-if="project.image" :src="project.image" :alt="project.name" class="project-image"/>
        <div class="project-name">{{ project.name }}</div>
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
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  display: block;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-name {
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}
</style>
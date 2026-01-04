<template>
  <main class="container mx-auto px-4 py-8">
    <div v-if="pending">
      <p>Lade Inhalt...</p>
    </div>
    <div v-else-if="error || !posts">
      <h1 class="text-4xl font-bold mb-4">Beitrag nicht gefunden</h1>
      <p>Für den Pfad '{{ posts.path }}' konnte leider kein Inhalt gefunden werden.</p>
      <NuxtLink :to="`/devlog`" class="block mt-8">Zurück zur Projektübersicht</NuxtLink>
    </div>
    <article v-else class="prose lg:prose-xl mx-auto">
      <!-- Titel des Devlog-Eintrags -->
      <h1 class="text-4xl font-bold mb-2">{{ posts.title }}</h1>
      <p class="text-gray-400 text-sm mb-8">
        Veröffentlicht am: {{ new Date(posts.meta.date).toLocaleDateString() }}
      </p>
      
      <!-- Hier wird der Markdown-Inhalt gerendert -->
      <ContentRenderer :value="posts" />

      <NuxtLink :to="`/devlog/project/${route.params.project}`" class="block text-center mt-12">Zurück zu den Einträgen von '{{ route.params.project }}'</NuxtLink>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const project = route.params.project

// Konvertiert 'dungeon-crawler' zu 'dungeonCrawler'
const projectNameAsCamelCase = computed(() => {
  if (!project) return '';
  return project.replace(/-(\w)/g, (_, c) => c.toUpperCase());
});

// Lade nur die Posts für das ausgewählte Projekt
const { data: posts } = await useAsyncData(route.path, () => 
  queryCollection(projectNameAsCamelCase.value).first()
);
</script>

<style scoped>
/* Füge hier bei Bedarf Stile hinzu, z.B. für die prose-Anpassung */
.prose pre {
  overflow-x: auto;
}
</style>
<template>
  <div class="container mx-auto px-4 max-w-4xl">
  <main class="container mx-auto px-4 py-8">
    <div v-if="pending">
      <p>Lade Inhalt...</p>
    </div>
    <div v-else-if="error || !posts">
      <h1 class="text-4xl font-bold mb-4">Beitrag nicht gefunden</h1>
      <p>Für den Pfad '{{ posts.path }}' konnte leider kein Inhalt gefunden werden.</p>
      <NuxtLink :to="`/devlog`" class="block mt-8">Zurück zur Projektübersicht</NuxtLink>
    </div>
    <article v-else class="prose prose-invert mx-auto">
      <!-- Titel des Devlog-Eintrags -->
      <h1 class="font-bold mb-2">{{ posts.title }}</h1>
      <p class="text-gray-400 text-sm mb-8">
        Veröffentlicht am: {{ new Date(posts.date).toLocaleDateString() }}
      </p>      
      <!-- Hier wird der Markdown-Inhalt gerendert -->
      <ContentRenderer :value="posts" />

    </article>
    <NuxtLink :to="`/devlog/project/${route.params.project}`" class="block w-fit mx-auto mt-12 rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
      Zurück zu den Einträgen von {{ route.params.project }}
    </NuxtLink>
  </main>
  </div>
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
  queryCollection(projectNameAsCamelCase.value).path(route.path).first()
);

useSeoMeta({
  title: () => `${posts.value?.title} | Jeremys Devlog`,
  description: () => posts.value?.description,
  
  ogTitle: () => posts.value?.title,
  ogDescription: () => posts.value?.description,
  ogImage: () => posts.value?.image || '/portfolioSite/default-devlog-share.png',
  
  ogType: 'article'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: `https://jjmercado.github.io/portfolioSite/devlog/${posts.value?.meta.project.toLowerCase()}/${posts.value?.title.toLowerCase()}` }
  ]
})
</script>

<style scoped>

</style>
<template>
  <div class="mx-auto max-w-2xl px-4">
    <h1 class="text-2xl font-bold tracking-tight text-white sm:text-4xl text-center py-4 sm:pt-6">
      Devlogs für: {{ project }}
    </h1>   
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" 
            class="m-4 block bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:bg-gray-900
         ring-1 ring-purple-500 
         md:ring-white/10 md:hover:ring-purple-500">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <small>{{ new Date(post.date).toLocaleDateString() }}</small>
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink :to="'/devlog'" class="block w-fit mx-auto mt-12 rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Zurück zu den Einträgen von {{ route.params.project }} &rarr;</NuxtLink>
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
  queryCollection(projectNameAsCamelCase.value).all()
);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
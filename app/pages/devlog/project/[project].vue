<template>
  <div>
    <h1>Devlogs für: {{ project }}</h1>
    <p>
      <NuxtLink to="/devlog">Zurück zur Projektübersicht</NuxtLink>
    </p>
    
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <small>{{ new Date(post.meta.date).toLocaleDateString() }}</small>
        </NuxtLink>
      </li>
    </ul>
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
a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 8px;
}
a:hover {
  background-color: #f0f0f0;
}
</style>
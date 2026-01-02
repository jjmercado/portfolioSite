<template>
  <div>
    <h1>Devlogs für: {{ project }}</h1>
    <p>
      <NuxtLink to="/devlog">Zurück zur Projektübersicht</NuxtLink>
    </p>
    
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <small>{{ new Date(post.date).toLocaleDateString() }}</small>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
const project = route.params.project;

// Lade nur die Posts für das ausgewählte Projekt
const { data: posts } = await useAsyncData(`devlog-posts-${project}`, () => 
  queryContent('/devlog')
    .where({ project: { $eq: project } })
    .sort({ date: -1 })
    .find()
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
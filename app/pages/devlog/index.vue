<template>
  <div>
    <h1>Devlog</h1>
    <p>Hier sind alle meine Entwicklungs-Updates.</p>
    
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// queryContent holt alle Artikel aus dem 'devlog'-Ordner
// und sortiert sie nach dem Datum (neueste zuerst).
const { data: posts } = await useAsyncData('devlog-posts', () => 
  queryContent('/devlog').sort({ date: -1 }).find()
);
</script>

<style scoped>
/* Füge hier etwas Styling hinzu, damit es gut aussieht */
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
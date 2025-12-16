<template>
  <div class="detail-page">
    <h1>Spiele-Detailseite: {{ $route.params.slug }}</h1>
    <p>Hier kommen bald mehr Details zu diesem Spiel.</p>
    <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
  </div>
</template>

<script setup>
// In Zukunft kannst du hier basierend auf dem 'slug'
// die spezifischen Daten für das Spiel laden.
const route = useRoute();
console.log('Angefordertes Spiel:', route.params.slug);
</script>

<style scoped>
.detail-page {
  padding: 4rem 0;
  text-align: center;
}
.detail-page h1 {
  color: var(--accent-color);
}
</style>
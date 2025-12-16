<template>
  <div class="detail-page">
    <h1>Devlog-Eintrag #{{ $route.params.id }}</h1>
    <p>Hier kommt bald der vollständige Devlog-Eintrag.</p>
    <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
console.log('Angeforterter Devlog-Eintrag:', route.params.id);
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
<template>
  <main>
    <!-- ContentDoc rendert automatisch den passenden Markdown-Inhalt -->
    <ContentDoc />
  </main>
</template>

<script setup>
// Hier ist kein zusätzliches Script nötig,
// <ContentDoc /> kümmert sich um alles.
</script>

<style>
/* Gib dem Inhalt etwas Stil, besonders für Code-Blöcke, Überschriften etc. */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
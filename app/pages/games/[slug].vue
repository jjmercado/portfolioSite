<template>
  <main class="container mx-auto px-4 py-8">
    <!-- Überprüfen, ob 'data' geladen wurde -->
    <div v-if="data">
      <article class="mx-auto max-w-4xl">
        <!-- Titel des Spiels -->
        <h1 class="text-4xl font-bold mb-4 text-center">{{ data.title }}</h1>

        <!-- Video oder GIF -->
        <div class="video-container my-8">
          <video v-if="data.meta.video" :src="data.meta.video" autoplay loop muted playsinline class="w-full rounded-lg shadow-lg"></video>
          <img v-else-if="data.meta.gif" :src="data.meta.gif" alt="Gameplay GIF" class="w-full rounded-lg shadow-lg" />
        </div>

        <!-- Beschreibung des Spiels -->
        <div class="content-section my-8 prose lg:prose-xl mx-auto">
          <h2 class="text-2xl font-semibold mb-2 text-center">Über das Spiel</h2>
          <ContentRenderer :value="data" />
        </div>
        
        <!-- Technische Details -->
        <div class="tech-details my-8 p-4 border rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Technische Details</h3>
            <p><strong>Sprache/Engine:</strong> {{ data.meta.engine }}</p>
            <p><strong>Entwicklungszeit:</strong> {{ data.meta.devtime }}</p>
        </div>

        <!-- Download-Bereich -->
        <div class="download-section my-8 text-center">
          <h2 class="text-2xl font-semibold mb-4">Download</h2>
          <div class="flex justify-center gap-4">
            <NuxtLink v-if="data.meta.downloads && data.meta.downloads.windows" :href="data.meta.downloads.windows" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" external download>
              Windows
            </NuxtLink>
            <NuxtLink v-if="data.meta.downloads && data.meta.downloads.linux" :href="data.meta.downloads.linux" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" external download>
              Linux
            </NuxtLink>
          </div>
        </div>
        
        <NuxtLink to="/games" class="block w-fit mx-auto mt-12 rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
          Zurück zur Spieleübersicht
        </NuxtLink>

      </article>
    </div>

    <!-- Dieser Block wird angezeigt, wenn KEIN Dokument gefunden wurde -->
    <div v-else class="text-center">
        <h1 class="text-4xl font-bold mb-4">Dokument nicht gefunden</h1>
        <p>Für den Pfad '{{ path }}' konnte leider kein Inhalt gefunden werden.</p>
        <p>Bitte überprüfen Sie den Dateinamen und Pfad in Ihrem `content`-Verzeichnis.</p>
        <NuxtLink to="/games" class="block text-center mt-8">Zurück zur Spieleübersicht</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
// Wir verwenden queryContent mit dem manuell erstellten Pfad
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('games').path(route.path).first();
});
</script>

<style scoped>
.container {
  max-width: 960px;
}

.video-container {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}

/* Stellt sicher, dass der Prose-Stil von Nuxt Content die Farben nicht überschreibt */
.prose a {
    color: var(--accent-color);
}
</style>
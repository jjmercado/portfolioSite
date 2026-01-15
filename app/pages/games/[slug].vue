<template>
  <main class="container mx-auto px-4 py-8">
    <!-- Überprüfen, ob 'data' geladen wurde -->
    <div v-if="data">

      <h1 class="text-4xl font-bold mb-4 text-center">{{ data.title }}</h1>
      
      <!-- Video oder GIF -->
      <div class="video-container my-8">
        <video v-if="data.meta.video" :src="data.meta.video" autoplay loop muted playsinline class="w-full rounded-lg shadow-lg"></video>
        <NuxtImg v-else-if="data.meta.gif" :src="data.meta.gif" alt="Gameplay GIF" class="w-full rounded-lg shadow-lg" />
      </div>
      
      <!-- Titel des Spiels -->
      <article class="mx-auto">
        <!-- Beschreibung des Spiels -->
        <div class="container bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 content-section my-8 prose-headings:text-white prose lg:prose-xl">
          <h2 class="font-semibold mb-2 text-center">Über das Spiel</h2>
          <ContentRenderer class="text-white" :value="data" />
        </div>
      </article>

        <!-- Technische Details -->
        <div class="container mx-auto bg-gray-100/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 max-w-4xl tech-details my-8 p-4 border rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Technische Details</h3>
            <p><strong>Sprache:</strong> {{ data.meta.language }}</p>
            <p v-if="data.meta.framework"><strong>Framework:</strong> {{ data.meta.framework }}</p>
            <p v-if="data.meta.engine"><strong>Engine:</strong> {{ data.meta.engine }}</p>
            <p><strong>Entwicklungszeit:</strong> {{ data.meta.devtime }}</p>
            <p>
              <strong>GitHub: </strong> 
              <NuxtLink target="_blank" :to="data.meta.githubLink" class="underline font-bold text-blue-600 dark:text-blue-400">
                {{data.title}} Source-Code
              </NuxtLink>
            </p>
        </div>

        <!-- Download-Bereich -->
        <div class="download-section my-8 text-center">
          <h2 class="text-2xl font-semibold mb-4">Download</h2>
          <div class="flex justify-center gap-4">
            <NuxtLink external download="" v-if="data.meta.downloads.windows" :to="data.meta.downloads.windows" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Windows
            </NuxtLink>
            <NuxtLink external download="" v-if="data.meta.downloads.linux" :to="data.meta.downloads.linux" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Linux
            </NuxtLink>
          </div>
        </div>
        
        <NuxtLink to="/games" class="block w-fit mx-auto mt-12 rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
          Zurück zur Spieleübersicht
        </NuxtLink>
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
</style>
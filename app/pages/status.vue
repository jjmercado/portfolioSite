<template>
  <div class="text-gray-200 min-h-screen">
    <div class="container mx-auto px-4 py-12 sm:py-16 max-w-4xl">
      
      <!-- Seitenkopf -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projektstatus & Roadmap
        </h1>
        <p class="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Transparenter Einblick in den aktuellen Entwicklungsfortschritt meiner Projekte – woran ich gerade arbeite und welche Meilensteine als Nächstes anstehen.
        </p>
      </div>

      <!-- Status-Komponente -->
      <ProjectStatus />

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Projektstatus & Roadmap | Jeremy – Game Development',
  description: 'Aktueller Entwicklungs- und Projektstatus von Project Blackbird: Meilensteine, erledigte Aufgaben und geplante Features.',
  
  ogTitle: 'Projektstatus & Roadmap – Jeremy',
  ogDescription: 'Verfolge den aktuellen Entwicklungsstand und die Meilensteine meiner Spieleprojekte in Echtzeit.',
  ogType: 'website'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://jjmercado.github.io/portfolioSite/status' }
  ]
})
</script>

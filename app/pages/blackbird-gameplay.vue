<template>
  <div class="fff-page text-gray-200 min-h-screen flex flex-col items-center justify-center px-4 py-16">

    <!-- Header -->
    <div class="text-center mb-10 max-w-2xl">
      <h1 class="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
        Blackbird – Gameplay-Vorschau
      </h1>
      <p class="text-slate-400 text-lg">
        Ein erster Einblick in das aktuelle Gameplay-Stadium von <strong class="text-white">Blackbird</strong>.
      </p>
    </div>

    <!-- Video -->
    <div class="video-wrapper w-full max-w-4xl">
      <video
        id="gameplay-video"
        controls
        playsinline
        preload="metadata"
        src="/games/blackbird/videos/BlackbirdGameplayFFF.mp4"
      />
    </div>
  </div>
</template>

<script setup>
// TODO: TEMPORÄR – nach FFF-Einreichung diese Seite (blackbird-gameplay.vue) wieder löschen

useSeoMeta({
  title: 'Blackbird – Gameplay-Vorschau | Astral Anvil Studios',
  description: 'Gameplay-Vorschau von Blackbird für die FFF Filmfernsehfond Einreichung.',
  robots: 'noindex, nofollow' // Seite nicht in Suchmaschinen indexieren
})

useHead({
  htmlAttrs: { lang: 'de' }
})
</script>

<style scoped>
.fff-page {
  background: radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.12) 0%, transparent 60%),
              #0a0a0a;
}

.video-wrapper {
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(168, 85, 247, 0.25),
    0 25px 60px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(168, 85, 247, 0.1);
}

.video-wrapper video {
  width: 100%;
  display: block;
  background: #000;
}
</style>

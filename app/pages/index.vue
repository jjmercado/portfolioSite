<template>
  <div> <!-- Die <NuxtLayout> Hülle ist jetzt in app.vue, also brauchen wir sie hier nicht mehr -->
<!-- Ersetze die komplette <section id="hero"> in app/pages/index.vue -->

<section id="hero" class="text-center pt-24 sm:pt-24">  <!-- Hintergrund-Glow-Effekt -->
  <!-- Inhalt -->
  <div class="mx-auto max-w-2xl px-4">
    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Ich erschaffe interaktive Welten als
      <span class="text-purple-400">Indie Game Developer</span>
    </h1>
    <p class="mt-6 text-lg leading-8 text-slate-300">
      Von der ersten Codezeile bis zum fertigen Spiel – hier dokumentiere ich meine Reise und präsentiere meine Projekte.
    </p>
    <div class="mt-10">
      <NuxtLink to="/games" class="rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
        Zu meinen Spielen
      </NuxtLink>
    </div>
  </div>
</section>

<!-- Ersetze die komplette <section id="about"> -->
<section id="about" class="py-20">
  <div class="container mx-auto bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-4xl">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Vom Handwerk zum Code: Meine Game-Dev Reise</h2>
    <p class="mt-6 text-lg leading-8 text-slate-300">
      Hi! Ich bin Jeremy. 
      Früher habe ich als Schreiner Möbel gebaut und war acht Jahre bei der Marine – heute bin ich Test-Engineer
      und leidenschaftlicher Spieleentwickler. 
      Auf dieser Seite dokumentiere ich meinen Weg in der <span class="text-1xl font-semibold text-purple-400">Godot Engine</span>, 
      teile meine Workflows in der <span class="text-1xl font-semibold text-purple-400">3D-Modellierung</span> und schreibe über alles, was mich technisch begeistert.

      Aktuell im Fokus: Mein erstes eigenes 3D-Spiel, an dem ich nach Feierabend schraube. 
      Schau in mein <span class="text-1xl font-semibold text-purple-400">Devlog</span>, um zu sehen, wie aus einer Idee Code und Grafik wird!        
    </p>
  </div>
  <div class="mt-10 text-center">
    <NuxtLink to="/about" class="rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
      Näheres zu mir
    </NuxtLink>
  </div>
</section>

<!-- Ersetze die komplette <section id="games"> in app/pages/index.vue -->

<section id="games" class="content-section">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl font-bold text-center mb-10">Meine Spiele</h2>
  
    <!-- Grid-Container für die Karten -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Karte 1: Dungeon Crawler -->
      <NuxtLink to="/games/dungeon-crawler" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/dungeon-crawler.jpg" alt="Dungeon Crawler" class="w-full h-48 object-cover"> -->
          
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Snake Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Ein prozedural generierter Dungeon Crawler, entwickelt mit Godot. Fokus auf schnelles Gameplay und Loot-Systeme.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-400/10 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">C++</span>
              <span class="bg-green-400/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">SFML</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <!-- Karte 2: Space Trader -->
      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Pac-Man Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-400/10 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">C++</span>
              <span class="bg-green-400/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">SFML</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Asteroids Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-400/10 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">C++</span>
              <span class="bg-green-400/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">SFML</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Pong Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-400/10 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">C++</span>
              <span class="bg-green-400/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">SFML</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Pac-Man Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-400/10 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">Unity</span>
              <span class="bg-purple-400/10 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">C#</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Snake Klon"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-400/10 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">Unity</span>
              <span class="bg-purple-400/10 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">C#</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/20">          <!-- Optional: Bild hier einfügen -->
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Tiny Swords"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-400/10 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full">Unity</span>
            <span class="bg-purple-400/10 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full">C#</span>
          </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/games/space-trader" class="group block">
        <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
          <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">Projekt "Poly Slayer"</h3>
            <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
            
            <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-full">Godot</span>
            <span class="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-full">GDScript</span>
          </div>
          </div>
        </div>
      </NuxtLink>

    </div>
  </div>
</section>

<section id="latest-devlogs" class="content-section pt-24">
  <div class="container mx-auto px-4 max-w-4xl"> <!-- max-w-4xl für eine angenehme Breite -->
    <h2 class="text-3xl font-bold text-center mb-10">Neueste Devlog-Einträge</h2>
    
    <!-- Container für die untereinander angeordneten Einträge -->
    <div class="space-y-6"> <!-- space-y-6 fügt Abstand zwischen den Elementen hinzu -->

      <!-- Fallback-Nachricht, wenn keine Einträge geladen werden -->
      <p v-if="!latestPosts || latestPosts.length === 0">Keine Devlog-Einträge gefunden.</p>

      <!-- Schleife, die für jeden Eintrag eine Karte generiert -->
      <NuxtLink v-else v-for="post in latestPosts" :key="post.path" :to="post.path"
              class="block bg-gray-900/50 p-6 rounded-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-purple-500 hover:bg-gray-900">
        
        <div class="flex justify-between items-baseline">
            <h3 class="text-xl font-bold text-white">{{ post.title }}</h3>
            <p class="text-slate-400 text-sm">
                {{ new Date(post.date).toLocaleDateString() }}
            </p>
        </div>
        <p class="text-slate-300 mt-2">{{ post.description }}</p>
      </NuxtLink>

    </div>
    <div class="mt-10 text-center">
      <NuxtLink to="/games" class="rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
        Alle DevLogs ansehen &rarr;
      </NuxtLink>
    </div>
  </div>
</section>

<!-- Ersetze die komplette <section id="contact"> -->
<section id="contact" class="py-20 sm:py-24 text-center">
  <div class="container mx-auto px-4 max-w-4xl bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Lass uns vernetzen!</h2>
    <p class="mt-6 text-lg leading-8 text-slate-300">
      Du hast eine Idee für ein gemeinsames Projekt, Feedback zu meinen Spielen oder möchtest dich einfach nur austauschen? Ich freue mich, von dir zu hören.
    </p>
    <div class="mt-10">
      <a href="mailto:ihre-email@domain.com" class="rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105">
        Schreib mir eine E-Mail
      </a>
    </div>
  </div>
</section>
  </div>
</template>

<script setup>
  // Holen Sie sich die 3 neuesten Devlog-Einträge aus einem bestimmten Projekt
  // ÄNDERN SIE HIER 'dungeon-crawler' zum gewünschten Projekt-Slug
  const projectName = 'dungeonCrawler';

  const { data: latestPosts } = await useAsyncData(`latest-posts-${projectName}`, () => 
    queryCollection(projectName)
      .order('date', 'DESC')
      .limit(3)
      .all()
  );

    // Metadaten für die Seite (gut für SEO)
  useHead({
    title: 'Home',
    meta: [
      { name: 'startpage', content: 'Erfahre hier alles über mich und über meine Kompetenzen in der Spiele- und Webentwicklung.' }
    ]
  });
</script>

<style scoped>
.content-section {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .content-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
<template>
  <div> <!-- Die <NuxtLayout> Hülle ist jetzt in app.vue, also brauchen wir sie hier nicht mehr -->
<!-- Ersetze die komplette <section id="hero"> in app/pages/index.vue -->

<section id="hero" class="text-center py-24 sm:py-32">  <!-- Hintergrund-Glow-Effekt -->
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
      <NuxtLink to="#games" class="rounded-md bg-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:bg-purple-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
        Zu meinen Spielen
      </NuxtLink>
    </div>
  </div>
</section>

<!-- Ersetze die komplette <section id="about"> -->
<section id="about" class="py-20 sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
    
    <!-- Bild-Spalte -->
    <div class="flex justify-center lg:justify-start">
      <div class="w-64 h-64 rounded-full bg-gray-800 ring-4 ring-purple-500/50 flex items-center justify-center">
        <!-- Hier kommt dein Bild hin -->
        <span class="text-slate-400">Dein Bild</span>
      </div>
    </div>

    <!-- Text-Spalte -->
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Über mich</h2>
      <p class="mt-6 text-lg leading-8 text-slate-300">
        Hallo! Ich bin Jeremy. Seit meiner Kindheit bin ich von Videospielen fasziniert. Diese Faszination hat mich dazu bewogen, nicht nur zu spielen, sondern selbst kreativ zu werden und einzigartige Spielerlebnisse zu schaffen, die in Erinnerung bleiben.
      </p>
      <p class="mt-4 text-lg leading-8 text-slate-300">
        Mein Fokus liegt auf <span class="font-semibold text-purple-400">Gameplay-Mechaniken</span> und <span class="font-semibold text-purple-400">prozeduraler Generierung</span>, um dynamische und wieder spielbare Welten zu erschaffen.
      </p>
    </div>

  </div>
</section>

<!-- Ersetze die komplette <section id="games"> in app/pages/index.vue -->

<section id="games" class="content-section">
  <h2 class="text-3xl font-bold text-center mb-10">Meine Spiele</h2>
  
  <!-- Grid-Container für die Karten -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <!-- Karte 1: Dungeon Crawler -->
    <NuxtLink to="/games/dungeon-crawler" class="group block">
      <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
        <!-- Optional: Bild hier einfügen -->
        <!-- <img src="/path/to/dungeon-crawler.jpg" alt="Dungeon Crawler" class="w-full h-48 object-cover"> -->
        
        <div class="p-6 flex-grow flex flex-col">
          <h3 class="text-xl font-bold text-white mb-2">Projekt "Dungeon Crawler"</h3>
          <p class="text-slate-400 text-base flex-grow mb-4">Ein prozedural generierter Dungeon Crawler, entwickelt mit Godot. Fokus auf schnelles Gameplay und Loot-Systeme.</p>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-full">Godot</span>
            <span class="bg-cyan-400/10 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded-full">GDScript</span>
          </div>
        </div>
      </div>
    </NuxtLink>

    <!-- Karte 2: Space Trader -->
    <NuxtLink to="/games/space-trader" class="group block">
      <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-rose-500/20">
        <!-- Optional: Bild hier einfügen -->
        <!-- <img src="/path/to/space-trader.png" alt="Space Trader" class="w-full h-48 object-cover"> -->

        <div class="p-6 flex-grow flex flex-col">
          <h3 class="text-xl font-bold text-white mb-2">Projekt "Space Trader"</h3>
          <p class="text-slate-400 text-base flex-grow mb-4">Eine 2D-Weltraum-Handelssimulation mit einer dynamischen Wirtschaft. Entwickelt in Unity.</p>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-rose-400/10 text-rose-400 text-xs font-medium px-2.5 py-1 rounded-full">Unity</span>
            <span class="bg-rose-400/10 text-rose-400 text-xs font-medium px-2.5 py-1 rounded-full">C#</span>
          </div>
        </div>
      </div>
    </NuxtLink>

  </div>
</section>


 <!-- Ersetze die komplette <section id="devlog"> in app/pages/index.vue -->
<section id="devlog" class="content-section">
  <h2 class="text-3xl font-bold text-center mb-10">Aktuelle Devlog-Einträge</h2>
  
  <div class="space-y-6 max-w-3xl mx-auto">

    <!-- Devlog Eintrag 1 -->
    <NuxtLink to="/devlog" class="block p-6 bg-gray-900/50 ring-1 ring-white/10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-purple-500">
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
        <span class="text-sm font-medium text-slate-400 mb-1 sm:mb-0">15. Dezember 2025</span>
        <h4 class="text-lg font-semibold text-white">Dungeon Crawler: Neues Partikelsystem</h4>
      </div>
      <p class="mt-2 text-slate-300">Ich habe das Magie-System überarbeitet und neue Partikeleffekte für Feuer- und Eiszauber hinzugefügt. Das Feedback fühlt sich jetzt viel wuchtiger an!</p>
    </NuxtLink>

    <!-- Devlog Eintrag 2 -->
    <NuxtLink to="/devlog" class="block p-6 bg-gray-900/50 ring-1 ring-white/10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-purple-500">
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
        <span class="text-sm font-medium text-slate-400 mb-1 sm:mb-0">10. Dezember 2025</span>
        <h4 class="text-lg font-semibold text-white">Space Trader: Handelsrouten-UI</h4>
      </div>
      <p class="mt-2 text-slate-300">Das neue UI-Panel zur Visualisierung von Handelsrouten ist fertig. Spieler können jetzt die profitabelsten Routen auf der Sternenkarte sehen.</p>
    </NuxtLink>

    <!-- Devlog Eintrag 3 -->
    <NuxtLink to="/devlog" class="block p-6 bg-gray-900/50 ring-1 ring-white/10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-purple-500">
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
        <span class="text-sm font-medium text-slate-400 mb-1 sm:mb-0">01. Dezember 2025</span>
        <h4 class="text-lg font-semibold text-white">Projektstart "Dungeon Crawler"</h4>
      </div>
      <p class="mt-2 text-slate-300">Der erste Prototyp steht! Die Spielerfigur kann sich in einem zufällig generierten Level bewegen. Die nächsten Schritte sind Gegner und ein Kampfsystem.</p>
    </NuxtLink>

  </div>
</section>

<!-- Ersetze die komplette <section id="contact"> -->
<section id="contact" class="py-20 sm:py-28 text-center">
  <div class="mx-auto max-w-2xl px-4">
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

<style>
/* Füge diese neuen Stile am Ende deines <style>-Blocks in pages/index.vue hinzu */
.project-card-link, .devlog-link {
  text-decoration: none;
  color: inherit;
  display: block; /* Wichtig, damit der Link den ganzen Bereich einnimmt */
}

/* Die alten Stile bleiben unverändert */
/* ... (Rest deines CSS) ... */
.hero-section {
  text-align: center;
  padding: 6rem 0;
}
/* ... usw. ... */
</style>
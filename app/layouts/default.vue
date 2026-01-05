<template>
  <div class="relative isolate min-h-screen">
    <!-- Globaler Hintergrund-Glow -->
       <header class="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav class="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-purple-400">
          Jeremy
        </NuxtLink>

        <!-- Desktop Navigation (sichtbar ab 'md' Breakpoint) -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="hover:text-purple-400 transition-colors">Home</NuxtLink>
          <NuxtLink to="/games" class="hover:text-purple-400 transition-colors">Spiele</NuxtLink>
          <NuxtLink to="/devlog" class="hover:text-purple-400 transition-colors">Devlogs</NuxtLink>
        </div>

        <!-- Burger Menu Button (nur sichtbar auf kleinen Bildschirmen) -->
        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Menü öffnen">
            <!-- Burger Icon -->
            <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4"></path>
            </svg>
            <!-- Close (X) Icon -->
            <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu (Dropdown) -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-slate-800">
        <div class="flex flex-col items-center space-y-4 py-6">
          <NuxtLink to="/" @click="isMobileMenuOpen = false" class="text-lg hover:text-purple-400">Home</NuxtLink>
          <NuxtLink to="/games" @click="isMobileMenuOpen = false" class="text-lg hover:text-purple-400">Spiele</NuxtLink>
          <NuxtLink to="/devlog" @click="isMobileMenuOpen = false" class="text-lg hover:text-purple-400">Devlogs</NuxtLink>
        </div>
      </div>
    </header>

      <!-- HIER WIRD DER SEITENINHALT EINGEFÜGT -->
      <main>
        <slot />
      </main>

      <!-- 6. Footer -->
      <footer class="main-footer">
        <div class="social-links">
          <a href="https://github.com/ihr-profil" target="_blank">GitHub</a>
          <a href="https://ihr-profil.itch.io/" target="_blank">itch.io</a>
          <a href="https://linkedin.com/in/ihr-profil" target="_blank">LinkedIn</a>
        </div>
        <p>&copy; 2025 Jeremy. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reaktiver Zustand zur Steuerung des mobilen Menüs
const isMobileMenuOpen = ref(false);
</script>

<style>
/* Globale Stile & Layout-Stile (bleiben größtenteils gleich) */
/* Ersetze den :root Block in app/layouts/default.vue */
:root {
  --bg-color: #0a0a0a; /* Fast reines Schwarz */
  --primary-color: #e2e8f0; /* Helles Grau für Text */
  --secondary-color: #94a3b8; /* Gedämpftes Grau für Untertexte */
  --accent-color: #a855f7; /* Ein kräftiges Lila (Purple-500 von Tailwind) */
  --card-bg: #1e293b; /* Ein dunkles Blau-Grau für Kartenhintergründe */
}

body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--primary-color);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.portfolio-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header & Footer */
.main-header, .main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--card-bg);
}
.main-footer {
  border-bottom: none;
  border-top: 1px solid var(--card-bg);
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  font-size: 0.9rem;
  color: var(--secondary-color);
}

/* Ändere diese Regel in app/layouts/default.vue */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent-color); /* <-- Diese Zeile wurde hinzugefügt/geändert */
}

nav a, .social-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--secondary-color);
  transition: color 0.3s ease;
  font-weight: 500;
}
nav a:hover, .social-links a:hover {
  color: var(--primary-color);
}

/* Stile für den aktiven Link */
.router-link-exact-active {
  color: #c084fc; /* purple-400 */
}
</style>
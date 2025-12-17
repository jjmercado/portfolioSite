<template>
  <div class="relative isolate min-h-screen">
    <!-- Globaler Hintergrund-Glow -->
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <!-- Dieser Div erzeugt jetzt einen Verlauf über die ganze Breite -->
      <div class="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-purple-900/20 to-transparent"></div>
    </div>

    <!-- Dein eigentlicher Seiteninhalt -->
    <div class="portfolio-container">
      <!-- 1. Header / Navigation -->
      <header class="main-header">
        <div class="logo">
          <NuxtLink to="/">Jeremy's Devlog</NuxtLink>
        </div>
        <nav>
          <a href="#games">Spiele</a>
          <a href="#about">Über mich</a>
          <NuxtLink to="/devlog">Devlog</NuxtLink>
          <a href="#contact">Kontakt</a>
        </nav>
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
  </div>
</template>

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
</style>
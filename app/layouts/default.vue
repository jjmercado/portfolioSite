<template>
  <div class="portfolio-container">
    <!-- 1. Header / Navigation -->
    <header class="main-header">
      <div class="logo">Jeremy</div>
      <nav>
        <a href="#about">Über mich</a>
        <a href="#projects">Projekte</a>
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
        <a href="https://linkedin.com/in/ihr-profil" target="_blank">LinkedIn</a>
      </div>
      <p>&copy; 2025 Jeremy. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<style>
/* Globale Stile & Layout-Stile */
:root {
  --bg-color: #121212;
  --primary-color: #f0f0f0;
  --secondary-color: #a0a0a0;
  --accent-color: #00dc82;
  --card-bg: #1e1e1e;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav a, .social-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--secondary-color);
  transition: color 0.3s ease;
}
nav a:hover, .social-links a:hover {
  color: var(--primary-color);
}
</style>
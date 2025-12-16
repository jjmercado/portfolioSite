<template>
  <NuxtLayout>
    <!-- Hero Sektion -->
    <section id="hero" class="hero-section">
      <h1>Full-Stack Entwickler & Web-Enthusiast</h1>
      <p class="subtitle">Ich verwandle Ideen in schnelle, moderne und benutzerfreundliche Webanwendungen.</p>
      <a href="#contact" class="cta-button">Kontakt aufnehmen</a>
    </section>

    <!-- Über mich Sektion -->
    <section id="about" class="content-section">
      <h2>Über mich</h2>
      <p>
        Hallo! Ich bin Jeremy, ein leidenschaftlicher Entwickler aus [Ihre Stadt]. Seit [Anzahl] Jahren beschäftige ich mich mit der Konzeption und Entwicklung von Webanwendungen. Mein Fokus liegt auf der Schaffung von intuitiven Benutzeroberflächen und robusten Backends.
      </p>
    </section>

    <!-- Projekte Sektion -->
    <section id="projects" class="content-section">
      <h2>Meine Projekte</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Projekt-Titel 1</h3>
          <p>Eine kurze Beschreibung des Projekts und der verwendeten Technologien (z.B. Nuxt, Vue, TypeScript).</p>
        </div>
        <div class="project-card">
          <h3>Projekt-Titel 2</h3>
          <p>Eine kurze Beschreibung des Projekts und der verwendeten Technologien.</p>
        </div>
        <div class="project-card">
          <h3>Projekt-Titel 3</h3>
          <p>Eine kurze Beschreibung des Projekts und der verwendeten Technologien.</p>
        </div>
      </div>
    </section>

    <!-- Kontakt Sektion -->
    <section id="contact" class="content-section">
      <h2>Lassen Sie uns reden!</h2>
      <p>Haben Sie ein Projekt im Kopf oder möchten sich einfach nur vernetzen? Schreiben Sie mir gerne eine E-Mail.</p>
      <a href="mailto:ihre-email@domain.com" class="email-link">ihre-email@domain.com</a>
    </section>
  </NuxtLayout>
</template>

<style>
/* Stile, die NUR für den Inhalt dieser Seite gelten */

/* Hero Sektion */
.hero-section {
  text-align: center;
  padding: 6rem 0;
}
.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-section .subtitle {
  font-size: 1.2rem;
  color: var(--secondary-color);
  max-width: 600px;
  margin: 0 auto 2rem auto;
}
.cta-button {
  background-color: var(--accent-color);
  color: var(--bg-color);
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
  display: inline-block;
}
.cta-button:hover {
  transform: scale(1.05);
}

/* Allgemeine Content Sektionen */
.content-section {
  padding: 4rem 0;
  border-bottom: 1px solid var(--card-bg);
}
.content-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* Projekte */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.project-card {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
}
.project-card:hover {
  border-color: var(--accent-color);
}
.project-card h3 {
  margin-top: 0;
  color: var(--accent-color);
}

/* Kontakt */
#contact {
  text-align: center;
}
.email-link {
  font-size: 1.2rem;
  color: var(--accent-color);
  text-decoration: none;
}
</style>
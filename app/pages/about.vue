<template>
  <div class=" text-gray-800 dark:text-gray-200 min-h-screen">
    <div class="container mx-auto p-4 sm:p-6 lg:p-8">
      <div class="max-w-4xl mx-auto p-6 sm:p-8">

        <!-- 1. Vorstellung -->
        <section class="mb-10 text-center">
          <img src="/games/dungeon-crawler/images/placeholder.png" alt="Dein Name" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 dark:border-gray-700">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Hallo, ich bin [Dein Name]</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Hier kannst du eine kurze und einladende Vorstellung über dich schreiben. Erzähle, was dich antreibt, was deine Leidenschaft ist und was Besucher auf deiner Webseite finden können.
          </p>
        </section>

        <!-- 2. Kompetenzbereiche (NEUE STRUKTUR) -->
        <section class="mb-10">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-2">Meine Kompetenzbereiche</h2>
          <div class="space-y-12">
            
            <!-- Iteration durch die Hauptbereiche -->
            <div v-for="area in competencies" :key="area.title" class="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <span class="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">{{ area.level }}</span>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ area.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">{{ area.description }}</p>

              <!-- Sektion für Werkzeuge & Technologien -->
              <div v-if="area.toolCategories" class="space-y-4">
                <div v-for="category in area.toolCategories" :key="category.name">
                  <h4 class="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">{{ category.name }}</h4>
                  <div class="flex flex-wrap gap-3">
                    <span v-for="tool in category.tools" :key="tool" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md">
                      {{ tool }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Sektion für Projekte -->
              <div v-if="area.projects" class="mt-6">
                 <h4 class="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">Relevante Projekte</h4>
                 <div class="space-y-4">
                   <div v-for="project in area.projects" :key="project.name" class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <p class="font-bold text-gray-900 dark:text-white">{{ project.name }}</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ project.description }}</p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tech in project.stack" :key="tech" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-medium px-2 py-1 rounded-full">
                          {{ tech }}
                        </span>
                      </div>
                   </div>
                 </div>
              </div>

              <!-- Sektion für Grundlagen & Lernfelder -->
              <div v-if="area.topics" class="mt-4">
                <div class="flex flex-wrap gap-3">
                  <span v-for="topic in area.topics" :key="topic" class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-sm font-medium px-3 py-1.5 rounded-full">
                    {{ topic }}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// NEUE STRUKTUR für Kompetenzbereiche
const competencies = ref([
  {
    title: 'Spieleentwicklung',
    level: 'Hauptfokus & Expertise',
    description: 'Meine größte Leidenschaft. Ich konzipiere und entwickle sowohl 2D- als auch 3D-Spiele, vom ersten Prototyp bis zum fertigen Produkt.',
    toolCategories: [
      { name: 'Game Engines', tools: ['Godot', 'Unity (Grundlagen)'] },
      { name: 'Sprachen & Bibliotheken', tools: ['GDScript', 'C#', 'C++ mit SFML'] },
      { name: 'Asset-Erstellung', tools: ['Blender (3D-Modellierung)', 'Aseprite (Pixel Art)'] },
      { name: 'Allgemeine Werkzeuge', tools: ['VS Code', 'Git & GitHub'] },
    ]
  },
  {
    title: 'Webentwicklung',
    level: 'Praktische Erfahrung',
    description: 'Ich erstelle moderne, responsive und performante Webanwendungen. Dabei setze ich auf bewährte Frameworks, aber auch auf grundlegende Web-Technologien.',
    projects: [
      { 
        name: 'Portfolio (Diese Website)',
        description: 'Serverseitig gerenderte Seite mit Nuxt.js für optimale Performance und SEO.',
        stack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'GitHub Actions']
      },
      { 
        name: 'Projekt "Vanilla"',
        description: 'Eine einfache, performante Website, die bewusst auf große Frameworks verzichtet.',
        stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
      }
    ]
  },
  {
    title: 'Grundlagen & Lernfelder',
    level: 'Wissbegierig & Lernend',
    description: 'Neben meinen Hauptgebieten beschäftige ich mich mit den fundamentalen Konzepten der IT und erkunde neugierig neue Themen.',
    topics: [
      'IT-Grundlagen (Hardware & Netzwerk)',
      'Linux-Systemadministration',
      'Shell-Scripting',
      'Aktuelles Lernfeld: IT-Sicherheit & Hacking'
    ]
  }
]);

// Metadaten für die Seite (gut für SEO)
useHead({
  title: 'Über Mich - [Dein Name]',
  meta: [
    { name: 'description', content: 'Erfahre mehr über mich, meine Kompetenzen in der Spiele- und Webentwicklung.' }
  ]
});
</script>

<style scoped>
/* Hier kannst du bei Bedarf zusätzliches, seiten-spezifisches CSS hinzufügen */
</style>
<template>
  <div class=" text-gray-800 dark:text-gray-200 min-h-screen">
    <div class="container mx-auto p-4 sm:p-6 lg:p-8">
      <div class="max-w-4xl mx-auto p-6 sm:p-8">
        <section class="mb-10">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-2">Meine Skills</h2>
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
                      <NuxtLink class="underline font-bold text-blue-600 dark:text-blue-400" v-if="project.url" :to="project.url" target="_blank">Chor Website</NuxtLink>
                      <div class="flex flex-wrap gap-2 py-2">
                        <span v-for="tech in project.stack" :key="tech" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md">
                          {{ tech }}
                        </span>
                      </div>
                   </div>
                 </div>
              </div>

              <!-- Sektion für Grundlagen & Lernfelder -->
              <div v-if="area.topics" class="mt-4">
                <div class="flex flex-wrap gap-3">
                  <span v-for="topic in area.topics" :key="topic" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1.5 rounded-md">
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
      { name: 'Game Engines', tools: ['Godot', 'Unity', 'Unreal (Grundlagen)'] },
      { name: 'Sprachen & Bibliotheken', tools: ['GDScript', 'C#', 'C++', 'SFML'] },
      { name: 'Asset-Erstellung', tools: ['Blender (3D-Modellierung)', 'Inkscape'] },
      { name: 'Allgemeine Werkzeuge', tools: ['VS Community', 'VS Code', 'Git', 'GitHub', 'CMake'] },
      { name: 'Betriebssysteme', tools: ['Linux', 'Windows'] },
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
        name: 'Projekt "Chor"',
        url: 'https://www.gesangverein-1848.de/',
        description: 'Eine einfache, performante Website, die bewusst auf große Frameworks verzichtet.',
        stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
      }
    ]
  },
  {
    title: 'Professionelles Umfeld & Werkzeuge',
    level: 'Berufserfahrung',
    description: 'In meinem beruflichen Alltag setze ich auf etablierte und kollaborative Werkzeuge, um effizient im Team zu arbeiten.',
    toolCategories: [
      { 
        name: 'Kollaboration & Projektmanagement', 
        tools: ['Confluence', 'Microsoft Teams', 'Azure DevOps'] 
      },
      { 
        name: 'Entwicklung & Infrastruktur', 
        tools: ['Visual Studio Professional','GitLab', 'Team Foundation', 'Azure (Grundlagen)', 'Windows'] 
      },
      { 
        name: 'Automatisierung', 
        tools: ['Powershell'] 
      },
    ]
  },
  {
    title: 'Grundlagen & Lernfelder',
    level: 'Wissbegierig & Lernend',
    description: 'Neben meinen Hauptgebieten beschäftige ich mich mit den fundamentalen Konzepten der IT und erkunde neugierig neue Themen.',
    topics: [
      'Aktuelles Lernfeld: IT-Sicherheit & Hacking',
      'Computer-Netzwerke',
      'C von A bis Z',
      'C++ das umfassende Handbuch',
      'Handbuch für Fachinformatiker',
      'Handbuch für Softwareentwickler',
      'Die Kunst des Gamedesign'
    ]
  }
]);

// Metadaten für die Seite (gut für SEO)
useHead({
  title: 'Skills',
  meta: [
    { name: 'skills', content: 'Erfahre hier über meine Kompetenzen in der Spiele- und Webentwicklung.' }
  ]
});
</script>

<style scoped>
/* Hier kannst du bei Bedarf zusätzliches, seiten-spezifisches CSS hinzufügen */
</style>
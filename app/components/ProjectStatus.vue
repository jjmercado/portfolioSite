<template>
  <div id="project-status" class="w-full">
    <!-- Haupt-Container mit dezentem Farbverlauf und Rahmen -->
      <div class="bg-gray-900/80 rounded-2xl border border-purple-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        
        <!-- Subtiler Hintergrund-Glow -->
        <div class="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {{ statusData.statusLabel }}
              </span>
              <span class="text-xs text-gray-400">Stand: {{ statusData.lastUpdated }}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Projektstatus: <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{{ statusData.projectName }}</span>
            </h2>
            <p class="text-sm text-gray-400 mt-1">{{ statusData.projectType }}</p>
          </div>

          <!-- Link zum Devlog -->
          <NuxtLink 
            :to="`/devlog/project/${statusData.devlogSlug}`"
            class="inline-flex items-center justify-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]">
            <span>Zum Projekt-Devlog</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Aktueller Fokus -->
        <div class="my-6 bg-purple-950/30 border border-purple-500/20 rounded-xl p-4 sm:p-5 flex items-start gap-4">
          <div class="p-2 bg-purple-600/20 rounded-lg text-purple-400 shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div class="text-xs font-semibold tracking-wider text-purple-300 uppercase">Aktueller Fokus</div>
            <div class="text-base text-gray-200 font-medium mt-0.5">
              {{ statusData.currentFocus }}
            </div>
          </div>
        </div>

        <!-- Fortschrittsbalken -->
        <div class="mb-8">
          <div class="flex justify-between items-center text-sm mb-2">
            <span class="text-gray-300 font-medium">Entwicklungs-Meilensteine</span>
            <span class="text-purple-400 font-semibold">{{ completedCount }} von {{ totalCount }} abgeschlossen ({{ progressPercentage }}%)</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700/50">
            <div 
              class="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-700 ease-out"
              :style="{ width: `${progressPercentage}%` }">
            </div>
          </div>
        </div>

        <!-- Meilenstein-Liste -->
        <div class="space-y-3">
          <div 
            v-for="item in statusData.milestones" 
            :key="item.id"
            :class="[
              'p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5',
              item.status === 'done' ? 'bg-gray-800/30 border-gray-800/80 opacity-75' : '',
              item.status === 'in_progress' ? 'bg-purple-950/20 border-purple-500/40 shadow-sm shadow-purple-500/10' : '',
              item.status === 'planned' ? 'bg-gray-800/20 border-gray-800/50' : ''
            ]">
            
            <!-- Status-Icon -->
            <div class="mt-0.5 shrink-0">
              <!-- Done Icon -->
              <span v-if="item.status === 'done'" class="flex h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center border border-emerald-500/30">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>

              <!-- In Progress Icon -->
              <span v-else-if="item.status === 'in_progress'" class="flex h-5 w-5 rounded-full bg-purple-500/20 text-purple-300 items-center justify-center border border-purple-500/40 animate-pulse">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>

              <!-- Planned Icon -->
              <span v-else class="flex h-5 w-5 rounded-full bg-gray-700/40 text-gray-500 items-center justify-center border border-gray-700">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>

            <!-- Content -->
            <div class="flex-grow">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 
                  :class="[
                    'text-base font-semibold transition-colors',
                    item.status === 'done' ? 'line-through text-gray-400' : '',
                    item.status === 'in_progress' ? 'text-white' : '',
                    item.status === 'planned' ? 'text-gray-400' : ''
                  ]">
                  {{ item.title }}
                </h3>
                
                <!-- Status Badge -->
                <span 
                  :class="[
                    'text-xs font-semibold px-2 py-0.5 rounded-md self-start sm:self-auto uppercase tracking-wider',
                    item.status === 'done' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : '',
                    item.status === 'in_progress' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : '',
                    item.status === 'planned' ? 'bg-gray-800 text-gray-400 border border-gray-700' : ''
                  ]">
                  {{ item.status === 'done' ? 'Erledigt' : item.status === 'in_progress' ? 'In Arbeit' : 'Geplant' }}
                </span>
              </div>
              <p 
                v-if="item.description" 
                :class="[
                  'text-xs sm:text-sm mt-1',
                  item.status === 'done' ? 'text-gray-500' : 'text-gray-400'
                ]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import statusData from '../data/projectStatus.json';

const totalCount = computed(() => statusData.milestones.length);
const completedCount = computed(() => statusData.milestones.filter(m => m.status === 'done').length);
const progressPercentage = computed(() => {
  if (totalCount.value === 0) return 0;
  return Math.round((completedCount.value / totalCount.value) * 100);
});
</script>

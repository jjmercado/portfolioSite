<template>
    <section id="games" class="content-section">
        <h2 class="text-3xl font-bold text-center mb-10">Meine Spiele</h2>
        
        <!-- Grid-Container für die Karten -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Karte 1: Dungeon Crawler -->
            <NuxtLink to="/games/dungeon-crawler" class="group block">
            <div class="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <div class="w-full h-48 overflow-hidden">
                    <img src="/images/games/crawler/placeholder.png" alt="Dungeon Crawler Standbild" class="w-full h-full object-cover block group-hover:hidden">
                    <img src="/images/games/crawler/placeholder.gif" alt="Dungeon Crawler Animation" class="w-full h-full object-cover hidden group-hover:block">
                </div>
                
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
                <div class="w-full h-48 overflow-hidden">
                    <img src="/images/games/dungeon/placeholder.png" alt="Space Trader Standbild" class="w-full h-full object-cover block group-hover:hidden">
                    <img src="/images/games/dungeon/placeholder.gif" alt="Space Trader Animation" class="w-full h-full object-cover hidden group-hover:block">
                </div>

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
</template>
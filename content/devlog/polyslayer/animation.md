---
title: 'Vom Blockout zum Game-Ready: Der Animations-Workflow'
description: 'Wie die Animationen für PolySlayer entstehen. Ein Einblick in den iterativen Prozess vom groben Timing bis zum finalen Schliff.'
date: '2025-02-14'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/weightpainting/test_pose_wp_shaded.png'
---

# Animationen – Schritt für Schritt zum flüssigen Gameplay

Nachdem das Rigging und Weight Painting abgeschlossen sind, hauchen wir unserem Helden Leben ein. Gute Animationen sind das Herzstück eines packenden Combat-Systems. Mein Ansatz dabei ist **iterativ**: Ich arbeite mich vom Groben ins Detail vor.

# Ausgangspose

- <NuxtImg src="/games/polyslayer/images/animation/walkAnim_StartPoint.png" alt="Ausgangspose"/>

## Phase 1: Die grobe Animation (Blocking)

Zuerst erstelle ich eine sehr einfache Version der Bewegung. Hier geht es noch nicht um flüssige Übergänge, sondern rein um das **Timing** und die **Key-Posen**. Sitzt der Schwung des Schwertes?

- <NuxtImg src="/games/polyslayer/images/animation/blockingAnim.png" alt="Test Pose"/>

- <video loop autoplay muted playsinline src="/portfolioSite/games/polyslayer/videos/animation/blockingAnim.mp4"></video>

---

## Phase 2: Präzision und In-Betweens

Sobald das Grundgerüst steht, werde ich kleinteiliger. Ich füge Zwischenschritte (In-Betweens) hinzu, achte auf die Kurven der Bewegungen (Graph Editor) und stelle sicher, dass der Körper etwas in die Knie geht. Hier bekommt die Animation ihre erste richtige Dynamik.

- <NuxtImg src="/games/polyslayer/images/animation/bitMorePreciseWalkAnim.png" alt="Better In-Betweens"/>

<video loop autoplay muted playsinline src="/portfolioSite/games/polyslayer/videos/animation/bitMorePreciseAnim.mp4"></video>

---

## Phase 3: Das Endresultat (Polishing)

Im letzten Schritt folgt der Feinschliff. Wir korrigieren kleine Mesh-Fehler, fügen "Secondary Motion" hinzu (z. B. leichtes Nachschwingen von Rüstungsteilen) und stellen sicher, dass die Animation aus jedem Winkel gut aussieht.

<video loop autoplay muted playsinline src="/portfolioSite/games/polyslayer/videos/animation/finalResult.mp4"></video>

---

## Ausblick: Das Animations-Set

Ein Held braucht natürlich mehr als nur eine lauf Animation. Aktuell arbeite ich an einem vollständigen Set, damit sich das Spiel später "rund" anfühlt:

* **Locomotion:** Eine dynamische Renn-Animation.
* **Idle:** Die Wartestellung, damit der Charakter auch im Stillstand lebendig wirkt.
* **Skills:** Insgesamt **4 einzigartige Skill-Animationen**, die mächtige Spezialangriffe visualisieren.

### Wie geht es weiter?
Sobald der komplette Animations-Zirkel steht, exportieren wir alles in die Engine und kümmern uns um die **Animation-State-Machine**, damit die Übergänge zwischen Laufen, Kämpfen und Stehen nahtlos funktionieren!
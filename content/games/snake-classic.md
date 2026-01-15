---
title: 'Snake Classic'
description: 'Dieses Projekt ist meine Implementierung des Arcade-Klassikers Snake, entwickelt in C++ unter Verwendung der SFML-Bibliothek. Das Ziel war es, die grundlegenden Mechaniken des Spiels von Grund auf zu programmieren.'
image: '/games/snake-classic/images/snake-classic.png'
video: '/portfolioSite/games/snake-classic/videos/snake-classic.mp4'
gif: ''
engine: ''
framework: 'SFML'
language: 'C++'
devtime: 'ca. 1 Monate'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/SnakeApp.zip'
    linux: '/downloads/SnakeApp.tar.gz'
tags:
    - C++
    - SFML
---

### Projektbeschreibung: Snake

Dieses Projekt ist meine Umsetzung des legendären Arcade-Klassikers Snake, entwickelt in C++ mit der SFML-Bibliothek. Das Ziel des Projekts war die Implementierung einer dynamischen Listen-Logik und eines grid-basierten Bewegungssystems, um die klassischen Gameplay-Mechaniken originalgetreu nachzubilden.

### Das Spielprinzip

Der Spieler steuert eine Schlange durch ein zweidimensionales Spielfeld. Mit jedem aufgenommenen Item wächst die Schlange, was die Navigation zunehmend erschwert. Die Kernmechaniken umfassen:

- Grid-Movement: Die Schlange bewegt sich in festen Schritten auf einem unsichtbaren Gitter, wobei die Richtung nur um 90 Grad geändert werden kann.

- Wachstums-Logik: Jedes Mal, wenn der Kopf der Schlange mit einem Futter-Objekt kollidiert, wird ein neues Segment am Ende angehängt.

- Game-Over-Conditions: Das Spiel endet, sobald der Kopf die Spielfeldbegrenzung berührt oder mit dem eigenen Körper kollidiert (Self-Collision).

### Technische Highlights & Features

- Datenstrukturen: Effiziente Verwaltung der Schlangensegmente (z. B. mittels std::vector oder std::deque), um das Nachrücken der Glieder performant zu berechnen.

- Input-Buffering: Implementierung eines Buffers für Tastatureingaben, um zu verhindern, dass die Schlange durch zu schnelle Richtungswechsel eine unmögliche 180-Grad-Wende in sich selbst vollführt.

- Grid-basierte Kollisionserkennung: Mathematische Prüfung der Positionen auf dem Koordinatensystem zur Erkennung von Treffern (Kopf vs. Futter oder Kopf vs. Körper).

- Randomized Spawning: Algorithmus zur Platzierung von Futter auf freien Feldern, die nicht vom Körper der Schlange besetzt sind.

- Frame-Rate Independent Logic: Trennung von Spielgeschwindigkeit (Tick-Rate) und Rendering, um die Schlangengeschwindigkeit unabhängig von der Bildwiederholrate zu steuern.
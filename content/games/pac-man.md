---
title: 'Pac-Man'
description: 'Dieses Projekt ist meine Implementierung des zeitlosen Arcade-Hits Pac-Man, entwickelt in C++ unter Verwendung der SFML-Bibliothek. Der Fokus lag hierbei auf der Umsetzung komplexer Pfadfindungs-Algorithmen und einer kachel-basierten (Tile-based) Weltlogik.'
image: '/games/pac-man/images/pac-man.png'
video: '/portfolioSite/games/pac-man/videos/pac-man.mp4'
gif: ''
engine: ''
framework: 'SFML'
language: 'C++'
devtime: 'ca. 3 Monate'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/crawler_win.zip'
    linux: '/downloads/PacMan.tar.gz'
tags:
    - C++
    - SFML
---

### Projektbeschreibung: Pac-Man

Dieses Projekt ist meine Implementierung des zeitlosen Arcade-Hits Pac-Man, entwickelt in C++ unter Verwendung der SFML-Bibliothek. Der Fokus lag hierbei auf der Umsetzung komplexer Pfadfindungs-Algorithmen und einer kachel-basierten (Tile-based) Weltlogik.

### Das Spielprinzip

Der Spieler steuert Pac-Man durch ein Labyrinth, mit dem Ziel, alle Punkte (Pellets) zu fressen, während er vier Geistern ausweicht. Das Gameplay zeichnet sich durch folgende Mechaniken aus:

- Tile-Based Navigation: Die gesamte Welt besteht aus einem Raster, das die Bewegung einschränkt und die Kollision mit Wänden definiert.

- Geister-KI: Jedes der vier Geister-Objekte verfolgt eine eigene Strategie (z. B. direktes Verfolgen, Abfangen oder zufälliges Umherschweifen).

- Power-Pellets: Das Einsammeln spezieller Items kehrt die Rollen kurzzeitig um, sodass Pac-Man die Geister fressen kann.

- Warp-Tunnel: Seitliche Ausgänge, die den Spieler sofort auf die gegenüberliegende Seite des Spielfelds transportieren.

### Technische Highlights & Features

- Wegfindungs-KI: Implementierung von Algorithmen zur Richtungsentscheidung der Geister (z. B. Ziel-Kachel-Berechnung basierend auf Distanzmetriken wie der Manhattan-Distanz).

- State-Machine: Steuerung der verschiedenen Zustände von Pac-Man und den Geistern (Chase, Scatter, Frightened) mittels einer robusten State-Machine.

- Tilemap-System: Effizientes Rendering des Labyrinths durch eine Tilemap, bei der die Map-Daten aus einer Textdatei oder einem Array geladen werden.

- Präzise Kollisionslogik: Prüfung von Kollisionen auf Sub-Pixel-Ebene innerhalb des Rasters, um ein flüssiges „Abbiegen“ an Ecken zu ermöglichen (Pre-turn Logic).

- Animations-System: Sprite-Sheet-Animationen für das Öffnen/Schließen des Mundes von Pac-Man sowie die Blickrichtung der Geister.
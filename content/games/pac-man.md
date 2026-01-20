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
githubLink: 'https://github.com/jjmercado/Pac-Man'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/PacMan.zip'
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

- Power-Pellets: Das Einsammeln spezieller Items kehrt die Rollen kurzzeitig um, sodass Pac-Man die Geister fressen kann.

- Warp-Tunnel: Seitliche Ausgänge, die den Spieler sofort auf die gegenüberliegende Seite des Spielfelds transportieren.

### Steuerung

Das Spiel ist für zwei Spieler an einer Tastatur konzipiert:

- Pac-Man: Tasten <kbd>W</kbd> (Hoch), <kbd>S</kbd> (Runter), <kbd>A</kbd> (Links), <kbd>D</kbd> (Rechts)

### Technische Highlights & Features

- Wegfindungs-KI: Die Wegfindung basiert auf "Schildern" die an den Kreuzungen stehen und
eine zufällige Auswahl an Wegen, nach Kreuzung, bietet.

- State-Machine: Steuerung der verschiedenen Zustände von Pac-Man und den Geistern (Chase, Scatter, Frightened).

- Tilemap-System: Effizientes Rendering des Labyrinths durch eine Tilemap, bei der die Map-Daten aus einem Array geladen werden.

- Animations-System: Sprite-Sheet-Animationen für das Öffnen/Schließen des Mundes von Pac-Man.
---
title: 'Asteroids'
description: 'Dieses Projekt ist meine Implementierung des Arcade-Klassikers Asteroids, entwickelt in C++ unter Verwendung der SFML-Bibliothek. Das Ziel war es, die grundlegenden Mechaniken eines 2D-Space-Shooters von Grund auf zu programmieren.'
image: '/games/asteroids/images/Asteroids.png'
video: '/portfolioSite/games/asteroids/videos/Asteroids.mp4'
gif: ''
engine: ''
framework: 'SFML'
language: 'C++'
devtime: 'ca. 1 Monate'
githubLink: 'https://github.com/jjmercado/Asteroids'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/crawler_win.zip'
    linux: '/downloads/Asteroids.tar.gz'
tags:
    - C++
    - SFML
---

### Projektbeschreibung: Asteroids

Dieses Projekt ist meine Implementierung des Arcade-Klassikers Asteroids, entwickelt in C++ unter Verwendung der SFML-Bibliothek (Simple and Fast Multimedia Library). Das Ziel war es, die grundlegenden Mechaniken eines 2D-Space-Shooters von Grund auf zu programmieren.

### Das Spielprinzip

Der Spieler steuert ein dreieckiges Raumschiff in einem zweidimensionalen Asteroidenfeld. Die Besonderheit liegt in der Steuerung und der Physik:

- **Wrapping-World:** Objekte, die den Bildschirmrand verlassen, erscheinen auf der gegenüberliegenden Seite wieder (Screen Wrapping).

- **Zerstörung:** Große Asteroiden zerfallen bei Treffern in kleinere, schnellere Fragmente.

### Steuerung

Das Spiel ist für zwei Spieler an einer Tastatur konzipiert:

- Raumschiff: Taste <kbd>W</kbd> (vorwärts), <kbd>A</kbd> (links Rotieren), <kbd>D</kbd> (rechts Rotieren) und <kbd>Leertaste</kbd> (schießen)

### Technische Highlights & Features

- **Vektorphysik:** Berechnung Rotation und Geschwindigkeit basierend auf vektorieller Mathematik.

- **Kollisionserkennung:** Implementierung von Hitboxen, um Interaktionen zwischen Geschossen, Asteroiden und dem Schiff zu prüfen.

- **Game Loop:** Ein sauberer Game-Loop zur Trennung von Input-Verarbeitung, Logik-Update und Rendering.

- **Ressourcenmanagement:** Laden und Verwalten von Texturen über SFML.
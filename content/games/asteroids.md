---
title: 'Asteroids'
description: 'Dieses Projekt ist eine moderne Implementierung des Arcade-Klassikers Asteroids, entwickelt in C++ unter Verwendung der SFML-Bibliothek. Das Ziel war es, die grundlegenden Mechaniken eines 2D-Space-Shooters von Grund auf zu programmieren.'
image: '/games/asteroids/images/Asteroids.png'
video: '/games/asteroids/videos/Asteroids.mp4'
gif: ''
engine: ''
framework: 'SFML'
language: 'C++'
devtime: 'ca. 3 Monate'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/crawler_win.zip'
    linux: '/downloads/Asteroids.tar.gz'
tags:
    - C++
    - SFML
---

### Projektbeschreibung: Asteroids (C++ & SFML)

Dieses Projekt ist meine Implementierung des Arcade-Klassikers Asteroids, entwickelt in C++ unter Verwendung der SFML-Bibliothek (Simple and Fast Multimedia Library). Das Ziel war es, die grundlegenden Mechaniken eines 2D-Space-Shooters von Grund auf zu programmieren.

### Das Spielprinzip

Der Spieler steuert ein dreieckiges Raumschiff in einem zweidimensionalen Asteroidenfeld. Die Besonderheit liegt in der Steuerung und der Physik:

- Trägheit: Das Schiff bewegt sich nach dem Beschleunigen physikalisch korrekt weiter, was     präzises Manövrieren erfordert.

- Wrapping-World: Objekte, die den Bildschirmrand verlassen, erscheinen auf der gegenüberliegenden Seite wieder (Screen Wrapping).

- Zerstörung: Große Asteroiden zerfallen bei Treffern in kleinere, schnellere Fragmente.

### Technische Highlights & Features

- Objektorientierte Programmierung: Umsetzung von Klassen für Ship, Bullet, Asteroid mit Vererbung und Polymorphie.

- Vektorphysik: Berechnung Rotation und Geschwindigkeit basierend auf vektorieller Mathematik.

- Kollisionserkennung: Implementierung von Hitboxen, um Interaktionen zwischen Geschossen, Asteroiden und dem Schiff zu prüfen.

- Game Loop: Ein sauberer Game-Loop zur Trennung von Input-Verarbeitung, Logik-Update und Rendering.

- Ressourcenmanagement: Laden und Verwalten von Texturen über SFML.
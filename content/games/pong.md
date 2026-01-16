---
title: 'Pong'
description: 'Dieses Projekt ist meine Umsetzung von Pong, dem Pionier der Videospielgeschichte. Entwickelt in C++ mit der SFML-Bibliothek, lag der Schwerpunkt hier auf der präzisen Berechnung von Reflexionsphysik, der Implementierung einer einfachen KI und der Synchronisation von Spielzuständen.'
image: '/games/pong/images/pong.png'
video: '/portfolioSite/games/pong/videos/pong.mp4'
gif: ''
engine: ''
framework: 'SFML'
language: 'C++'
devtime: 'ca. 1 Monate'
githubLink: 'https://github.com/jjmercado/Pong'
buildsystem: 'CMake'
downloads:
    windows: '/downloads/crawler_win.zip'
    linux: '/downloads/Pong.tar.gz'
tags:
    - C++
    - SFML
---

### Projektbeschreibung: Pong

Dieses Projekt ist meine Umsetzung des Arcade-Klassikers Pong, ausgelegt als lokales 2-Spieler-Spiel. Entwickelt in C++ mit der SFML-Bibliothek, bietet es eine solide Basis, die gerne erweitert werden kann.

### Das Spielprinzip

Pong simuliert ein Tischtennis-Duell. Der Ball prallt von Wänden und Paddles ab.

#### Reflexions-Gameplay: 
- Der Ball prallt von den oberen und unteren Begrenzungen sowie von den Spieler-Paddles ab.

#### Punktesystem:
- Ein Punkt wird vergeben, wenn der Ball die hintere Spielfeldbegrenzung eines Spielers überschreitet. Das Spiel endet nach Erreichen einer vordefinierten Punktzahl.

#### Game-Loop:
- Saubere Trennung von Input, Spiellogik und Rendering für flüssiges Gameplay.

### Technische Highlights & Features

#### Vektor-Reflexion:
- Mathematische Berechnung der Abprallwinkel. Die Flugbahn wird manipuliert, je nachdem, an welcher Stelle des Paddles der Ball auftrifft (Steilerer Winkel bei Treffern an den Kanten).

#### AABB-Kollisionserkennung: 
- Implementierung von Axis-Aligned Bounding Boxes zur schnellen und zuverlässigen Erkennung von Kollisionen zwischen Ball, Wänden und Paddles.

#### UI & Scoring-System: 
- Dynamische Anzeige des Spielstands mittels SFML-Text-Komponenten und Echtzeit-Aktualisierung des Spielfelds.
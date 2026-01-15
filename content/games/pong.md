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

Zwei Spieler (oder ein Spieler gegen den Computer) steuern vertikale Paddles am linken und rechten Bildschirmrand. Ziel ist es, einen Ball so zu schlagen, dass der Gegner ihn verfehlt.

### Das Spielprinzip

Der Spieler steuert Pac-Man durch ein Labyrinth, mit dem Ziel, alle Punkte (Pellets) zu fressen, während er vier Geistern ausweicht. Das Gameplay zeichnet sich durch folgende Mechaniken aus:

- Reflexions-Gameplay: Der Ball prallt von den oberen und unteren Begrenzungen sowie von den Spieler-Paddles ab.

- Dynamische Ballphysik: Die Geschwindigkeit des Balls erhöht sich nach jedem erfolgreichen Schlag, um den Schwierigkeitsgrad kontinuierlich zu steigern.

- Punktesystem: Ein Punkt wird vergeben, wenn der Ball die hintere Spielfeldbegrenzung eines Spielers überschreitet. Das Spiel endet nach Erreichen einer vordefinierten Punktzahl.

### Technische Highlights & Features

- Vektor-Reflexion: Mathematische Berechnung der Abprallwinkel. Die Flugbahn wird manipuliert, je nachdem, an welcher Stelle des Paddles der Ball auftrifft (Steilerer Winkel bei Treffern an den Kanten).

- AABB-Kollisionserkennung: Implementierung von Axis-Aligned Bounding Boxes zur schnellen und zuverlässigen Erkennung von Kollisionen zwischen Ball, Wänden und Paddles.

- Gegner-KI: Ein lernfähiger oder fest definierter Algorithmus für den Computergegner, der die Y-Position des Paddles basierend auf der Balltrajektorie verfolgt.

- Screen-Shakes & Feedback: Implementierung von visuellen Effekten oder Sound-Triggern bei Kollisionen zur Verbesserung des "Game Feels".

- UI & Scoring-System: Dynamische Anzeige des Spielstands mittels SFML-Text-Komponenten und Echtzeit-Aktualisierung des Spielfelds.
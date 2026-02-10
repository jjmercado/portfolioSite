---
title: 'Ausrüstungs-Texturing: Die komplette Rüstung im Detail'
description: 'Devlog #5: Wie wir über 5 Millionen Polygone in 26k Triangles backen – Texturing und Normal Maps bei PolySlayer.'
date: '2025-02-06'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/texturing/texturing_result.png' 
---

# Das Texturing-Update – Die Rüstung ist bereit!

Willkommen zum fünften Devlog von **PolySlayer**. Nachdem wir uns im letzten Schritt mit den Grundformen beschäftigt haben, geht es heute ans Eingemachte: Das komplette **Texturing der Ausrüstung**.

In dieser Phase haben wir der gesamten Rüstung ihren finalen Look verliehen. Auch wenn das aktuelle Farbschema bereits gut funktioniert, halten wir uns die Option offen, die Farben im späteren Polishing-Prozess noch einmal feinabzustimmen, um sie perfekt an die Spielwelt anzupassen.

## Das Ergebnis: Die vollständige Rüstung

Hier seht ihr den aktuellen Stand der Texturen. Der Fokus lag darauf, den Materialien wie Metall, Leder und Stoff eine eigene Identität zu geben, damit die Rüstung trotz des Low-Poly-Stils hochwertig und "griffig" wirkt.
    <NuxtImg src="/games/polyslayer/images/texturing/texturing_result.png" alt="PolySlayer Character Armor Texturing Result" />

---

## Der "Normal Map"-Effekt: Details ohne Performance-Verlust

Ein entscheidender Teil unseres Workflows ist die Nutzung von **Normal Maps**. Um zu verdeutlichen, wie viel Tiefe diese Technik dem Spiel verleiht, haben wir einen direkten Vergleich vorbereitet. Die Normal Map "faked" das Licht auf der Oberfläche und lässt das Low-Poly-Modell so detailliert wie das High-Poly-Original aussehen.

### Performance-Check: High-Poly vs. Low-Poly

Der Unterschied in der Optimierung ist gewaltig. Durch das "Baken" der Details sparen wir Millionen von Polygonen, was die Performance massiv steigert:

| Version | Triangle Count | Status |
| :--- | :--- | :--- |
| **High-Poly Modell** | **~ 5.637.000** | **Unspielbar (nur für Details)** |
| **Low-Poly Modell** | **26.906** | **Optimiert für Gameplay** |

> **Der Clou:** Dank der Normal Map sieht das 26k-Modell im Spiel fast identisch zum 5,6-Millionen-Modell aus.

### Videovergleich: Mit vs. Ohne Normal Map

Hier seht ihr das Schwert und die Rüstung im direkten Vergleich. Achtet darauf, wie das Licht ohne Normal Map flach wirkt und mit Normal Map plötzlich jede Scharte und Kante betont wird.

**Ohne Normal Map (Flaches Mesh):**
<video loop autoplay muted playsinline src="/portfolioSite/games/polyslayer/videos/result_texturing_without_normal.mp4"></video>

**Mit Normal Map (Full Detail):**
<video loop autoplay muted playsinline src="/portfolioSite/games/polyslayer/videos/result_texturing_with_normal.mp4"></video>

---

### Wie geht es weiter?
Nachdem die Ausrüstung nun steht, rückt das Rigging und die Animation näher. Bleibt dran für das nächste Update!
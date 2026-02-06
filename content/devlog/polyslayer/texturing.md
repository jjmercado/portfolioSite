---
title: 'Texturing'
description: 'Texturing der Ausrüstung'
date: '2025-02-05'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/thirdCharacter.png' 

---

# Devlog #4: Texturierung der Ausrüstung

In diesem Update werfen wir einen Blick auf den Texturierungs-Prozess meiner Assets, am Beispiel des Schwertes. Dies war gleichzeitig ein wichtiger Testlauf für meinen Workflow: Ich experimentiere derzeit noch damit, ob ich die einzelnen Komponenten eines Objekts in einer einzigen **Texture-Atlas** zusammenführe, um die Performance zu optimieren.

Da ich in diesem Bereich noch viel lerne, wird sich der Prozess in Zukunft sicher noch verfeinern. Aber um das Projekt optisch voranzutreiben und endlich etwas Farbe ins Spiel zu bringen, habe ich nun den ersten kompletten Durchgang gewagt.

### Der Workflow im Detail:

* **UV-Unwrapping:** Zuerst wurden die UVs erstellt, um die 3D-Oberfläche sauber auf eine 2D-Ebene zu projizieren.
   <NuxtImg src="/games/polyslayer/images/texturing/uv_editing.png" alt="uv unwrapping"/>


* **Normal Map Baking:** Um feine Details ohne zusätzliche Polygone darzustellen, habe ich eine Normal Map gebacken.
   <NuxtImg src="/games/polyslayer/images/texturing/sword_normalmap.png" alt="sword normal map"/>


* **Color Texture:** Hier wurde die Basis-Farbe (Albedo) festgelegt, um dem Schwert seinen Look zu geben.
   <NuxtImg src="/games/polyslayer/images/texturing/sword_color.png" alt="sword color texture"/>


* **Metallic & Roughness:** Zum Abschluss wurden die Materialeigenschaften definiert, damit Metall auch wirklich wie Metall glänzt.
   <NuxtImg src="/games/polyslayer/images/texturing/sword_metal.png" alt="sword metal texture"/>

### Das Ergebnis

Nachdem alle Maps kombiniert wurden, ist hier das fertige Schwert in Blender:

   <NuxtImg src="/games/polyslayer/images/texturing/sword_texturing_result.png" alt="sword result"/>

---
---
title: 'Ausrüstungs-Texturing: Der erste Look für unseren Helden'
description: 'Von grauen Modellen zu lebendigen Helden: Ein Blick auf das Texturing der Rüstung und den Einsatz von Normal Maps in PolySlayer.'
date: '2025-02-05'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/texturing_result.png' 
---

# Rüstungs-Texturing – Details, die den Unterschied machen

In diesem Update werfen wir einen Blick auf den Texturierungs-Prozess meiner Assets am Beispiel des Schwertes. Dies war gleichzeitig ein wichtiger Testlauf für meinen Workflow: Ich experimentiere derzeit damit, die einzelnen Komponenten eines Objekts in einer **Texture** zusammenzuführen, um die Performance im Spiel zu optimieren.

Da ich in diesem Bereich noch viel lerne, ist dieser Durchgang ein wichtiger Meilenstein, um endlich Farbe und Materialtiefe in die Welt zu bringen.

### Der Workflow im Detail:

* **UV-Unwrapping:** Zuerst wurden die UVs erstellt, um die 3D-Oberfläche für die Texturierung sauber auf eine 2D-Ebene zu projizieren.
<NuxtImg src="/games/polyslayer/images/texturing/uv_editing.png" alt="uv unwrapping"/>

* **Learning: Normal Map Baking & Shading:**
Beim Baking der Normal Map stieß ich auf ein interessantes Problem: Nutzt man **Shade Flat** auf dem Low-Poly-Modell, scheinen die harten Kanten der Polygone durch die Textur (siehe zweites Bild). Da ich jedoch eine glatte, abgerundete Optik erzielen wollte, habe ich das Modell vor dem Baking auf **Shade Smooth** gestellt. Das Ergebnis ist eine saubere Oberfläche ohne sichtbare Face-Kanten – wieder was gelernt!

*Das Problem (Shade Flat):*
<NuxtImg src="/games/polyslayer/images/texturing/sword_normal_map.png" alt="sword normal map flat"/>

*Die Lösung (Shade Smooth):*
<NuxtImg src="/games/polyslayer/images/texturing/sword_normal_map_current.png" alt="sword normal map smooth"/>

* **Color Texture (Albedo):** Hier wurde die Basis-Farbe festgelegt, um dem Schwert seinen finalen Look und Charakter zu geben.
<NuxtImg src="/games/polyslayer/images/texturing/sword_color.png" alt="sword color texture"/>

* **Metallic & Roughness:** Zum Abschluss wurden die Materialeigenschaften definiert. Diese Maps steuern, wie das Licht reflektiert wird, damit Metall auch wirklich wie Metall glänzt und sich vom Griff absetzt.
<NuxtImg src="/games/polyslayer/images/texturing/sword_metal.png" alt="sword metal texture"/>

### Das Ergebnis

Im folgenden Vergleich sieht man den enormen Unterschied, den eine Normal Map macht. Sie verleiht dem Low-Poly-Modell eine plastische Tiefe, ohne die Performance durch zusätzliche Polygone zu belasten:

<video loop autoplay src="/portfolioSite/games/polyslayer/videos/sword_normalmap_result.mp4">

---
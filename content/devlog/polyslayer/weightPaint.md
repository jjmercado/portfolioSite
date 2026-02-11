---
title: 'Weight Painting & Skinning: Wenn Metall auf Bewegung trifft'
description: 'So meistern wir das Weight Painting in PolySlayer. Über Knautschzonen, starre Rüstungsteile und den korrekten Export für Sockets.'
date: '2025-02-10'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/weightpainting_progress.png' 
---

# Weight Painting – Stabilität trifft Flexibilität

Nachdem das Rig steht, folgt die Königsdisziplin: das **Weight Painting**. Hier legen wir fest, welcher Knochen (Bone) welchen Teil des Modells wie stark beeinflusst. Die Herausforderung bei einer Rüstung? Ein Stiefel aus Stahl darf sich nicht so stark verbiegen wie ein Lederschuh.

## Harte Kanten vs. Knautschzonen

Im ersten Schritt weise ich den starren Ausrüstungsteilen ihre festen Gewichte zu. Ein Helm beispielsweise bekommt ein volles Weight (1.0) auf den **Head-Socket**, damit er starr bleibt und nicht bei jeder Kopfbewegung "wabbert".

Bei anderen Teilen schauen wir genau hin:
* **Stiefel & Handschuhe:** Diese müssen stabil wirken, aber an den Gelenken genug Flexibilität besitzen.
* **Brust & Beine:** Hier definieren wir bewusste "Knautschzonen". Es muss nicht physikalisch 100% korrekt sein, aber es muss im Spielverlauf glaubwürdig aussehen.

- <NuxtImg src="/games/polyslayer/images/weightpainting/helmet_socket_weightpaint.png" alt="Helmet not weightpainted"/>
- <NuxtImg src="/games/polyslayer/images/weightpainting/helmet_weightpainted.png" alt="Helmet weightpainted"/>

---

## Der Trick mit dem Schwert und den Sockets

Ein wichtiger Punkt für den Workflow: Das Schwert wird im Blender-File mitanimiert, damit ich die Bewegungsabläufe (wie Angriffe oder Ziehen der Waffe) perfekt beurteilen kann. 

**Wichtig für den Export:**
Das Schwert selbst wird beim finalen Export des Charakters weggelassen. Im Spiel wird es dynamisch über den Waffen-Socket zugewiesen. Das Gleiche gilt für die modulare Ausrüstung. 
Eine Ausnahme bilden die **Gauntlets (Handschuhe)**: Da wir hier die Fingerbewegungen benötigen, werden diese direkt mitanimiert, da im Spiel später die kompletten Hände inklusive Handschuh-Mesh ausgetauscht werden.

---

## Iteratives Arbeiten: Animation als Härtetest

Mein Workflow ist hier zyklisch: 
1. **Weight Painting** (Grob-Setup)
2. **Test-Animation** (Angriff, Laufen, Idle)
3. **Fehlerkorrektur:** Sobald in einer extremen Pose das Mesh unschön ineinander schiebt, kehre ich zum Weight Painting zurück und korrigiere die Einflüsse.

- <NuxtImg src="/games/polyslayer/images/weightpainting/test_pose_wp.png" alt="Test Pose"/>
- <NuxtImg src="/games/polyslayer/images/weightpainting/test_pose_wp_shaded.png" alt="Test Pose Shaded"/>

---

### Wie geht es weiter?
Das Mesh folgt nun sauber dem Rig. Als Nächstes tauchen wir voll in die **Animation** ein, um PolySlayer seinen ganz eigenen Charakter zu verleihen!
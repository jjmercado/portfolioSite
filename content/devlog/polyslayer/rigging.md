---
title: 'Rigging mit Rigify: Vom Mesh zum animierbaren Helden'
description: 'So nutzen wir das Rigify Addon in Blender für PolySlayer, inklusive Troubleshooting zu Face-Bones und Sockets.'
date: '2025-02-08'
project: 'PolySlayer'
project_image: '/games/polyslayer/images/rigging_result.png' 
---

# Das Rigging – Den Charakter zum Leben erwecken

Nachdem das Texturing abgeschlossen ist, wird es Zeit, dass sich unser Held auch bewegen kann. Für **PolySlayer** setzen wir auf das mächtige **Rigify-Addon** in Blender, um ein professionelles Human-Rig zu erstellen.

## Optimierung des Rigs: Weniger ist mehr

Da unser Charakter einen stilisierten Look hat und wir keine komplexen Mimiken benötigen, haben wir das Rig direkt entschlackt. Alle Gesichtszüge (Face Bones) wurden entfernt, um das Rig sauber und performant zu halten.

- <NuxtImg src="/games/polyslayer/images/rigging/rigify_rig_delete_face.png" alt="Delete Face Bones"/>
- <NuxtImg src="/games/polyslayer/images/rigging/rig_face_del.png" alt="Deleted Face Bones"/>

> **Pro-Tipp (Troubleshooting):** Achtet darauf, wirklich alle Face-Bones zu erwischen! Oft versteckt sich ein winziger Bone im Kopf-Bereich. Wenn dieser bleibt, wirft Rigify beim Generieren oder Upgraden des Rigs eine Fehlermeldung aus.
<NuxtImg src="/games/polyslayer/images/rigging/error_when_not_upgrade_face.png" alt="Error Message"/>

- <NuxtImg src="/games/polyslayer/images/rigging/hidden_face_bone.png" alt="Hidden Face Bone"/>


## Vorsicht bei überlappenden Bones

Ein weiterer Stolperstein beim Rigging in Blender sind überlappende Bones. Wenn man beim Editieren des Metarigs versehentlich Bones verschiebt, die exakt übereinander liegen sollten, quittiert Rigify das mit einem Error beim Generieren. Präzision im Edit-Mode ist hier das A und O.

- <NuxtImg src="/games/polyslayer/images/rigging/spine_not_overlapped.png" alt="Spine not overlaped"/>
- <NuxtImg src="/games/polyslayer/images/rigging/spine_overlapped.png" alt="Spine is overlapping"/>
- <NuxtImg src="/games/polyslayer/images/rigging/disjoint_error_message.png" alt="Disjoint Error Message"/>

---

## Custom Sockets für modulare Ausrüstung

Da PolySlayer verschiedene Rüstungsteile unterstützt, habe ich das Standard-Rig um **Extra-Bones** erweitert. Diese dienen als feste **Sockets** (Ankerpunkte) für unsere Ausrüstung:

* **Helm-Socket**
* **Waffen-Socket**
* **Brust- & Handschuh-Sockets**

Dadurch können wir Rüstungsteile später im Spiel dynamisch austauschen, während sie perfekt an der Bewegung des Skeletts haften.

- <NuxtImg src="/games/polyslayer/images/rigging/char_meta_rig.png" alt="Meta rig"/>

---

## Das Ergebnis: Ein einsatzbereites Rig

Wenn alle Fehlerquellen beseitigt sind, generiert Rigify das finale Control-Rig. Dieses Skelett verbinden wir nun mit unserem Mesh – der Grundstein für alle kommenden Animationen ist damit gelegt!

- <NuxtImg src="/games/polyslayer/images/rigging/char_rig.png" alt="Rig"/>

---

### Wie geht es weiter?
Das Skelett steht! Im nächsten Schritt widmen wir uns dem **Skinning und Weight Painting**, damit sich die Rüstung bei Bewegungen nicht unnatürlich verformt.
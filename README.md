# Fort McMurray: et si c'était chez vous ?

## Sources

http://cwfis.cfs.nrcan.gc.ca/carte-interactive?zoom=5&lon=-949823.20053316&lat=943970.57121972&month=05&day=24&year=2016#wb-cont

## Problèmes géographiques

attention à la rotation initiale
(projection témoin = EPSG 3978 - Canada Lambert https://epsg.io/3978 )

attention à la surface réelle (combattre mercator)

## Étapes

1) j'ai créé un gif animé qui contient l'extension du feu jour par jour du 1er mai au 17 juin 2016.
   => design graphique
   => ajouter la date en surimpression

2) une carte en-dessous, centrée sur Fort MM
   => centrer/zoomer comme il faut
   => choisir un fournisseur de fonds de carte et un fonds de carte "sympa" et cohérent visuellement avec le projet

3) un bouton "localisez-moi" qui demande au navigateur la position du visiteur, et déplace la carte
   => recalculer l'extension du feu en fonction de la latitude (à cause de la projection mercator ça change un peu)
   => mettre ce bouton en gros en évidence au milieu de la carte
   => supprimer les boutons de zoom, interdire le zoom.
   => recentrer sur FMM si on reclique sur le bouton

texte du bouton :
1. Et si la Bête était chez vous ?
2. Retour à Fort McMurray, Canada
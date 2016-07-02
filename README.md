# Fort McMurray: et si c'était chez vous ?

## Publication

- http://fortmacandthebeast.com/
- http://visionscarto.net/fort-mcmurray-et-l-incendie

## Sources

http://cwfis.cfs.nrcan.gc.ca/carte-interactive?zoom=5&lon=-949823.20053316&lat=943970.57121972&month=05&day=24&year=2016#wb-cont

## Problèmes géographiques

- attention à la rotation initiale (projection témoin = EPSG 3978 - Canada Lambert https://epsg.io/3978 )
- on recalcule l'extension du feu en fonction de la latitude (à cause de la projection web mercator)

## Étapes

- j'ai créé un gif animé qui contient l'extension du feu jour par jour du 1er mai au 30 juin 2016.
- une carte en-dessous, centrée sur Fort MM
- un bouton "localisez-moi" qui déplace la carte en fonction de la position du visiteur

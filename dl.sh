mkdir -p build
for day in `seq -w 1 31`; do
	d=201605$day
	echo $d
	wget -O "build/$d.png" "http://cwfis.cfs.nrcan.gc.ca/geoserver/public/wms?LAYERS=public%3Am3_polygons&PROJECTION=EPSG%3A3978&TRANSPARENT=TRUE&CQL_FILTER=date%3D%27$d%27%20and%20area%20%3E%201000&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&FORMAT=image%2Fpng&SRS=EPSG%3A3978&BBOX=-1053227.66570605,856772.33429395,-700432.27665706,1149567.7233429&WIDTH=2048&HEIGHT=2048"
done

for day in `seq -w 1 17`; do
	d=201606$day
	echo $d
	wget -O "build/$d.png" "http://cwfis.cfs.nrcan.gc.ca/geoserver/public/wms?LAYERS=public%3Am3_polygons&PROJECTION=EPSG%3A3978&TRANSPARENT=TRUE&CQL_FILTER=date%3D%27$d%27%20and%20area%20%3E%201000&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&FORMAT=image%2Fpng&SRS=EPSG%3A3978&BBOX=-1053227.66570605,856772.33429395,-700432.27665706,1149567.7233429&WIDTH=2048&HEIGHT=2048"
done

./manipulation.js

# gm convert ne gere pas le disposal transparent :(
#gm convert -loop 0 -delay 30 build/2016*.png build/wildfire.gif

gifsicle --disposal 3 --delay 30 --loopcount=0 build/*-2.gif -o wildfire.gif

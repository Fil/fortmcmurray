var mapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var mapAttrib = 'Données © <a href="http://cwfis.cfs.nrcan.gc.ca/carte-interactive?zoom=5&lon=-949823.20053316&lat=943970.57121972&month=06&day=17&year=2016#wb-cont" target=_blank>canada.ca</a> | Tuiles <a href="https://cartodb.com/" target=_blank>CartoDB</a>.';
var mapSrc = new L.TileLayer(mapUrl, {
    attribution: mapAttrib,
});

var fortmm = [56.726611, -111.379694];
var paris = [48.8534100, 2.3488000];

var map = new L.Map('map', {
    layers: [mapSrc],
    center: fortmm,
    zoom: 8,
    maxZoom: 8,
    minZoom: 8,
    zoomControl: false,
    scrollWheelZoom: false,
    touchZoom: false,
});

map.on('locationerror', function () {
    map.setView(paris);
});



function centrer_la_bete() {
    document.getElementById('fireimg').style.left = (map._size.x / 2 / 1.25 - 340) + 'px';
    document.getElementById('fireimg').style.top = (map._size.y / 2 / 1.25 - 680) + 'px';
}

function echelle_carte() {
    var scale = 0.8 * Math.cos(map.getCenter().lat * Math.PI / 180) / Math.cos(fortmm[0] * Math.PI / 180);
    if (scale >= 1) {
        document.getElementById('map').style.transform = 'scale(' + scale + ')';
        document.getElementById('fireimg').style.transform = 'scale(1)';
    }
    if (scale < 1) {
        document.getElementById('map').style.transform = 'scale(1)';
        document.getElementById('fireimg').style.transform = 'scale(' + (1 / scale) + ')';
    }
}

centrer_la_bete();
echelle_carte();

map.on('resize', centrer_la_bete);
map.on('move', echelle_carte);


var bete = false;

function bete_ou_back() {
    if (bete) {
        map.setView(paris);
        map.locate({
            setView: true,
            maxZoom: 8
        });
        document.getElementById("button")
            .innerHTML = '';

        setTimeout(function () {
            document.getElementById("button")
                .innerHTML = "<button class=back onclick='bete_ou_back()'>Retour à Fort McMurray, Canada</button>";
        }, 3000);
    } else {
        map.setView(fortmm);
        document.getElementById("button")
            .innerHTML = '';
        setTimeout(function () {
            document.getElementById("button")
                .innerHTML = "<button class=bete onclick='bete_ou_back()'>Et si la Bête était chez vous ?</button>";
        }, 1500);
    }

    bete = !bete;
}

setTimeout(bete_ou_back, 1000);
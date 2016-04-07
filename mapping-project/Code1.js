//Hier schreibst du die GeoJSON fuer deine Karte. 
var geojson =
	{ "type": "FeatureCollection",
	"features": [
		{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			// UNTEN VERAENDERN: Das ist der erste Punkt [Laengengrad, Breitengrad]
			"coordinates": [XX.XXX,XX.XXX]
			},
		"properties":{
			"prop0": "value0"}
			},
		{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			// UNTEN VERAENDERN: Das ist der zweite Punkt [Laengengrad, Breitengrad] 
			"coordinates": [XX.XXX,XX.XXX]
			},
		"properties":{
			"prop0": "value0"}
			},
		{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			// UNTEN VERAENDERN: Das ist der dritte Punkt [Laengengrad, Breitengrad] 
			"coordinates": [XX.XXX,XX.XXX]
			},
		"properties":{
			"prop0": "value0"}
		}
	]
};

// UNTEN VERAENDERN: Das ist die Basiskarte von Mapbox. Hier den MAP KEY von Mapbox eingeben
var map = L.mapbox.map('map', 'xx.xxxx');

map.featureLayer.setGeoJSON(geojson);

// UNTEN VERAENDERN: Das ist der Fokus fuer die Karte: ([Breitengrad, Laengengrad],Fokus). Fokus ist eine Nummer, 1-10, je hoeher die Nummer desto Naeher der Fokus
map.setView([XX.XXX,XX.XXX], X)


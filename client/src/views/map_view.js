const leaflet = require('leaflet');
const PubSub = require('../helpers/pub_sub.js');

//map view constructor
const MapView = function (mapDiv, userLocation, zoomLevel, allCastleData){
  this.allCastleData = allCastleData;
  this.mapDiv = mapDiv;
  this.userLocation = userLocation;
  this.zoomLevel = zoomLevel;
  this.leafletMap = null;

}

//initialises the map with openStreetMap tiles.
MapView.prototype.init = function () {
  const openStreetMapUrl ='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const openStreetMapTileLayer = new leaflet.TileLayer(openStreetMapUrl);

  //stores the map in the mapView object.
  this.leafletMap = leaflet
  .map(this.mapDiv)
  .setView(this.userLocation, this.zoomLevel)
  .addLayer(openStreetMapTileLayer);
};

//renders the map on the mapView with all castle pins and the user's location.
MapView.prototype.renderMap = function () {
  this.init();
  this.populateAllPins();
  this.addUserLocationPin();
};

//Adds the user's location to the map with a pin.
MapView.prototype.addUserLocationPin = function () {
  var homeIcon = leaflet.icon({
    iconUrl: 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_repicthousebase_1484336386-1.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
  });

  //adds the marker to the map.
  leaflet.marker(this.userLocation, {icon: homeIcon})
  .addTo(this.leafletMap)
  .bindPopup("You are here!")
  .openPopup();
};

//adds a marker icon for each castle. This is called in populateAllPins.
MapView.prototype.addMarker = function (coords, castleName, castlePrice) {
  var castleIcon = leaflet.icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/34/34188.svg',
    iconSize: [20, 20],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });

  //adds the marker to the map.
  leaflet.marker(coords, {icon: castleIcon})
  .addTo(this.leafletMap)
  .bindPopup(castleName + " £" + castlePrice);
};

//A loop through the castles array to add each castle to the map.
MapView.prototype.populateAllPins = function () {
  const castles = this.allCastleData;
  castles.forEach((castle) => {
    this.addMarker(castle.latlng, castle.name, castle.price);
  });
};


module.exports = MapView;

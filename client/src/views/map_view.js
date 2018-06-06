const leaflet = require('leaflet');
const PubSub = require('../helpers/pub_sub.js');

const MapView = function (mapDiv, userLocation, zoomLevel, allCastleData){
  this.allCastleData = allCastleData;
  this.mapDiv = mapDiv;
  this.userLocation = userLocation;
  this.zoomLevel = zoomLevel;
  this.leafletMap = null;

}

MapView.prototype.init = function () {
  const openStreetMapUrl ='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const openStreetMapTileLayer = new leaflet.TileLayer(openStreetMapUrl);

  this.leafletMap = leaflet
  .map(this.mapDiv)
  .setView(this.userLocation, this.zoomLevel)
  .addLayer(openStreetMapTileLayer);
};

MapView.prototype.renderMap = function () {
  // console.log('Under Construction');
  //map render
  this.init();
  // this.getLatLngsArray();
  this.populateAllPins();
  this.addUserLocationPin();


};

MapView.prototype.addUserLocationPin = function () {
  leaflet.marker(this.userLocation)
  .addTo(this.leafletMap)
  .bindPopup("You are here!")
  .openPopup();
};

MapView.prototype.addMarker = function (coords, castleName, castlePrice) {
  leaflet.marker(coords)
  .addTo(this.leafletMap)
  .bindPopup(castleName + " £" + castlePrice);
  // .openPopup();
};

// MapView.prototype.getLatLngsArray = function () {
//   const latLngArray = this.allCastleData.map((castle) => {
//     return castle.latlng});
//     console.log('Map View extraction of latlngs', latLngArray);
//     return latLngArray;
//   };

MapView.prototype.populateAllPins = function () {
  const castles = this.allCastleData;
  castles.forEach((castle) => {
    this.addMarker(castle.latlng, castle.name, castle.price);
  });
};


module.exports = MapView;

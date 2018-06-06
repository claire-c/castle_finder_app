const leaflet = require('leaflet');

const MapView = function (mapDiv, coords, zoomLevel, allCastleData){
  this.allCastleData = allCastleData;
  this.mapDiv = mapDiv;
  this.coords = coords;
  this.zoomLevel = zoomLevel;
  this.leafletMap = null;

}

MapView.prototype.init = function () {
  const openStreetMapUrl ='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const openStreetMapTileLayer = new leaflet.TileLayer(openStreetMapUrl);

  this.leafletMap = leaflet
  .map(this.mapDiv)
  .setView(this.coords, this.zoomLevel)
  .addLayer(openStreetMapTileLayer);
};


MapView.prototype.renderMap = function () {
  // console.log('Under Construction');
  //map render
  this.init();
  this.getLatLngsArray();
  this.populateAllPins();


};

MapView.prototype.addMarker = function (coords) {
  leaflet.marker(coords).addTo(this.leafletMap);
};

MapView.prototype.getLatLngsArray = function () {
  const latLngArray = this.allCastleData.map((castle) => {
    return castle.latlng});
    console.log('Map View extraction of latlngs', latLngArray);
    return latLngArray;
  };

MapView.prototype.populateAllPins = function () {
    const castlesLatLngs = this.getLatLngsArray();
    castlesLatLngs.forEach((castle) => {
      this.addMarker(castle);
    });
  };


  module.exports = MapView;

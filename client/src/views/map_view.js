const leaflet = require('leaflet');

const MapView = function (mapDiv, coords, zoomLevel){
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

};





module.exports = MapView;

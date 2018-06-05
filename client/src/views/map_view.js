const MapView = function (div){
this.div = div;

}

MapView.prototype.renderMap = function (allCastleData) {
  // console.log('Under Construction');
  const mapHeading = document.createElement('h2');
  mapHeading.id = "map-view-heading";
  mapHeading.textContent = "Map Placeholder";
  this.div.appendChild(mapHeading);


};





module.exports = MapView;

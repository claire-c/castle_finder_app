const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('./results_view.js');
const MapView = require('./map_view.js');

//containerView constructor
const ContainerView = function (container){
  this.container = container;
  this.userLocation = null;
};

//gathers all the pubSub methods.
ContainerView.prototype.bindEvents = function () {
  this.addLatLngListener();
  this.subscribeToAllCastleData();
};

//receives castle data from castles model.
ContainerView.prototype.subscribeToAllCastleData = function () {
  PubSub.subscribe('Castles:publish-all-castle-data', (evt) => {
    this.container.innerHTML = '';

    //new up a map and result view once castle data has arrived.
    const allCastleData = evt.detail;
    this.renderResultView(allCastleData);
    this.renderMapView(allCastleData);
  });
};

//new up a resultView.
ContainerView.prototype.renderResultView = function (allCastleData) {
  const resultViewDiv = document.createElement('div');
  resultViewDiv.id = 'result-view';

  const resultView = new ResultView(resultViewDiv);
  resultView.render(allCastleData);
  this.container.appendChild(resultViewDiv);
};

//new up a mapView.
ContainerView.prototype.renderMapView = function (allCastleData) {
  const mapViewDiv = document.createElement('div');
  const userLocation = this.userLocation;
  const zoomLevel = 7;
  mapViewDiv.id = 'mapid';
  const mapView = new MapView(mapViewDiv, userLocation, zoomLevel, allCastleData);
  this.container.appendChild(mapViewDiv);
  mapView.renderMap();
};

//adds users lat long to the containerView.
ContainerView.prototype.addLatLngListener = function () {
  PubSub.subscribe('FormView:Receive-Data-From-Form', (evt) => {
    this.userLocation = evt.detail;
  })
};

module.exports = ContainerView;

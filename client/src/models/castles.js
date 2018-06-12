const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

//castles constructor.
const Castles = function(){
  this.castleData = null;
};

//subscribe to form then call db and return castle data.
Castles.prototype.subscribeToFormView = function () {
  PubSub.subscribe('FormView:Receive-Data-From-Form', (evt) => {
    this.getDataAndReturnFromOurCastleAPI();
  })
};

Castles.prototype.getDataAndReturnFromOurCastleAPI = function () {
  const url = 'http://localhost:3000/api/castleInfo';
  const request = new Request(url);
  request.get()
  .then((allCastleData) => {
    this.castleData = allCastleData;
    this.publishAllCastleData();
  })
};

Castles.prototype.publishAllCastleData = function () {
  PubSub.publish('Castles:publish-all-castle-data', this.castleData);
};

module.exports = Castles;

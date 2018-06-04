const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

// // TODO: add in parameter to take the map api here later.
const Castles = function(){
  this.castleData = null;
};

// subscribe to the data from the formView
Castles.prototype.subscribeToFormView = function () {
  PubSub.subscribe('FormView:Receive-Data-From-Form', (evt) => {
// and access it from the console log
  console.log('In the model:', evt.detail);

  })

};

// request all the castle data from the server
Castles.prototype.getDataAndReturnFromOurCastleAPI = function () {
  const url = 'http://localhost:3000/api/castleInfo';
  const request = new Request(url);
  request.get()
    .then((allCastleData) => {
      console.log('Returned from server:', allCastleData);
    })


};
// log out the response




module.exports = Castles;

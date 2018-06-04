const PubSub = require('../helpers/pub_sub.js');

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




module.exports = Castles;

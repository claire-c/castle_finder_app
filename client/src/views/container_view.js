const PubSub = require('../helpers/pub_sub.js');

const ContainerView = function (container){
  this.container = container;
};

ContainerView.prototype.subscribeToAllCastleData = function () {
  // subscribe to castle data
  PubSub.subscribe('Castles:publish-all-castle-data', (evt) => {
    console.log('Container View:', evt.detail);
  })

  // console log out castle data
};

module.exports = ContainerView;

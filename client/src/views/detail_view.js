
const DetailView = function(castle){
  this.castle = castle;
};

DetailView.prototype.renderDetailView = function () {
  listItem = document.createElement('li');
  listItem.textContent = this.castle.name;
  return listItem;
};

module.exports = DetailView;

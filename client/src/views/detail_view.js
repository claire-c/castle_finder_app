//constructor for DetailView.
const DetailView = function(castle){
  this.castle = castle;
};

//renders each detailView inside a div.
DetailView.prototype.renderDetailView = function () {
  listItem = document.createElement('div');
  listItem.id = this.castle.name;

  listItemHeading = document.createElement('h3');
  listItemHeading.textContent = this.castle.name;
  listItem.appendChild(listItemHeading);

  listItemDescription = document.createElement('p');
  listItemDescription.textContent = this.castle.description;
  listItem.appendChild(listItemDescription);

  return listItem;
};

module.exports = DetailView;

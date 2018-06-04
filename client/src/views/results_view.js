const DetailView = require('./detail_view.js');

const ResultView = function(resultContainer, allCastleData){
  this.resultContainer = resultContainer;
  this.allCastleData = allCastleData;
}

ResultView.prototype.renderListView = function () {
  // Create a heading and for the result view container.
  const resultListHeading = document.createElement('h2');
  resultListHeading.id = "result-view-title";
  resultListHeading.textContent = "Results List:";
  this.resultContainer.appendChild(resultListHeading);

  // Create an ordered list called result-list-view
  const resultList = document.createElement('ol');
  resultList.id = "result-view-list";

  // Create a a list item by newing up a nested view of resultDetailItem for every castle in the castle data array.
  const castlesArray = this.allCastleData;
  castlesArray.forEach((castle) => {
    const detailView = new DetailView(castle).renderDetailView();
    resultList.appendChild(detailView);
  });

  this.resultContainer.appendChild(resultList);

};

module.exports = ResultView;

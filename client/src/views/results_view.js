const DetailView = require('./detail_view.js');

//constructor for ResultsView.
const ResultView = function(resultListDiv){
  this.resultListDiv = resultListDiv;
}

//renders the resultView comprised of detail views and header. Called in containerView.
ResultView.prototype.render = function (allCastleData) {
  this.renderResultViewHeading();
  this.renderListOfDetailViews(allCastleData);
};

// Create a heading and for the result view container.
ResultView.prototype.renderResultViewHeading = function () {
  const resultListHeading = document.createElement('h2');
  resultListHeading.id = "result-view-title";
  resultListHeading.textContent = "Results List:";
  this.resultListDiv.appendChild(resultListHeading);
};

//To render detail views for each castle.
ResultView.prototype.renderListOfDetailViews = function (allCastleData) {

  const resultList = document.createElement('div');
  resultList.id = "result-view-list";

  // News up a detailView for each castle and adds to the result list div.
  const castlesArray = allCastleData;
  castlesArray.forEach((castle) => {
    const detailView = new DetailView(castle);
    resultList.appendChild(detailView.renderDetailView());
  });

  this.resultListDiv.appendChild(resultList);
};

module.exports = ResultView;

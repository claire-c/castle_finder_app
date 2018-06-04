
const ResultView = function(resultContainer, allCastleData){
  this.resultContainer = resultContainer;
  this.allCastleData = allCastleData;
}

ResultView.prototype.renderDetailView = function () {
  const resultListHeading = document.createElement('h2');
  resultListHeading.id = "result-view-title";
  resultListHeading.textContent = "Results List:";
  this.resultContainer.appendChild(resultListHeading);

  const resultList = document.createElement('ol');

  const resultItem = document.createElement('li');
  resultItem.textContent = 'This has loaded successfully (test item).';

  resultList.appendChild(resultItem);

  this.resultContainer.appendChild(resultList);
};

module.exports = ResultView;

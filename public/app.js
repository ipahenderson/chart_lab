window.addEventListener('load', function(){
  var url = 'https://restcountries.eu/rest/v2/regionalbloc/eu';

  makeRequest(url, function () {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  // new PieChart();
  new ColumnChart(countries);

});
})



var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

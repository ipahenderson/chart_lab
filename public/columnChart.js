var getCountryNameAndPop = function(countries){
  var names = [];
  var populations = [];
  countries.forEach(function(country){
  names.push(country.name);
  populations.push(country.population);
  })
  return [names, populations];
}

// var getCountryName = function()
//
var colour = ['#166fff', '#16ff82', '#e7ff16', '#ff6b16', '#9a16ff', '#ff16b1', '#16ff86'];
var changer = colour[Math.floor(Math.random()*colour.length)];

var ColumnChart = function(countries){
  var container = document.querySelector('#column-chart')

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: "Populations of Countries"
    },
    series: [{
      name: ["Populations"],
      data: getCountryNameAndPop(countries)[1],
      color: changer
    }],
    xAxis: {
      categories: getCountryNameAndPop(countries)[0]
    }
  })

};

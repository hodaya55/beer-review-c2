

var BeerReviewApp = function () {
    var beers = [];
  
    var $beerList = $('.beers-list');
  
    var updateBeers = function () {
      $beerList.empty();
  
      for (var i = 0; i < beers.length; i += 1) {
        var beerHTML = "<li>" + beers[i].name + " - " + beers[i].category + " - " + beers[i].rate+"</li>";
  
        $beerList.append(beerHTML);
      }
    };
  
    var addBeer = function (beerName, beerCategory, beerRate) {
      beers.push({ name: beerName, category: beerCategory, rate: beerRate});
    };
  
    return {
      updateBeers: updateBeers,
      addBeer: addBeer
    }
  };
  
  var app = BeerReviewApp();
  
  $('.post-beer').on('click', function () {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rate = $("#rate option:selected").text();
    app.addBeer(name, category, rate);
    app.updateBeers();
  });











































































// var sortA= function(){
//     var sortArray=[];
//           beers = _.sortBy(beers,myRate);
//           for (var b in beers)
//                $('.beers-list-sort').append('<li>' + "name: "+beers[b].myName + " ,category: " + beers[b].myCategory + ",rate: "+beers[b].myRate+'</li>');

//      }


// function compare(a, b) {
//     const genreA = a.myRate.toUpperCase();
//     const genreB = b.myRate.toUpperCase();

//     let comparison = 0;
//     if (genreA > genreB) {
//       comparison = 1;
//     } else if (genreA < genreB) {
//       comparison = -1;
//     }
//     return comparison;
//   }

//   console.log(beers.sort(compare));



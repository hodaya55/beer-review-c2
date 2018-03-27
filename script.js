
var beers = []; // a global array called beers.

var addBeer = function (name, category, rate) {
    var beer = {
        myName: name,
        myCategory: category,
        myRate: rate
    }
    beers.push(beer);
}

var btnClick = function () {
    var n = $(".beer-input.form-control").val();
    var c = $(".category-input.form-control").val();
    var r= $("#rate option:selected").text();
    addBeer(n, c, r);
    renderBeers();
    $(".beers-list-sort").find("li").remove();
}

$(".post-beer").click(btnClick);


var renderBeers = function () {
    $(".beers-list").find("li").remove();
    $(".beers-list-sort").find("li").remove();

    for (var b in beers)
        $('.beers-list').append('<li>' + "name: "+beers[b].myName + " ,category: " + beers[b].myCategory + ",rate: "+beers[b].myRate+'</li>');
    
}

var bool=false;

var sortASC=function sortByKey(a, b) {

    $(".beers-list-sort").find("li").remove();

    beers= beers.sort(function(a, b) {
        var x = a["myRate"]; var y = b["myRate"];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });


    if (!bool)
 {  
    //   beers= beers.sort(function(a, b) {
    //     var x = a["myRate"]; var y = b["myRate"];
    //     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    // });

    $(".beers-list-sort").find("li").remove();
    $("#sortBtn").text('Sort By DES');
    bool=true;

 }

 else 
      {
        $(".beers-list-sort").find("li").remove();
        $("#sortBtn").text('Sort By ASC');
          beers.reverse();
          bool=false;
        }

        $(".beers-list-sort").find("li").remove();
    for (var b in beers)
        $('.beers-list-sort').append('<li>' + "name: "+beers[b].myName + " ,category: " + beers[b].myCategory + ",rate: "+beers[b].myRate+'</li>');

}


$("#sortBtn").click(sortASC);








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
  
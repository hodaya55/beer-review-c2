
var beers=[]; // a global array called beers.

var addBeer= function (name, category){
var beer= {
    "name-beer": name,
    "category-beer": category
         }
         beers.push(beer);
}

var btnClick= function(){
    addBeer($(".beer-input form-control").val(),$(".category-input form-control").val());
}

$(".post-beer").click(btnClick);



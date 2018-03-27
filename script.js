
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
}

$(".post-beer").click(btnClick);


var renderBeers = function () {
    $(".beers-list").find("li").remove();

    for (var b in beers)
        $('.beers-list').append('<li>' + "name: "+beers[b].myName + " ,category: " + beers[b].myCategory + ",rate: "+beers[b].myRate+'</li>');
    
}


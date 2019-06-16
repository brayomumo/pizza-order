$(document).ready(function(){

var removeOrder = document.getElementsByClassName('btn-danger')

for (var i = 0; i< removeOrder.length; i++){
    var button = removeOrder[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        sumTotal()
    })

    function sumTotal (){
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')[0]
        for(var i = 0; i <cartRows; i++){
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            console.log(priceElement)
        }
    }
}







})






// var first = {
//      name : getElementById("sixthTooping"),
//       price: 700}
// var second = {
//      name: getElementById("secondTooping"),
//       price: 500}
// var third = { 
//     name: getElementById("thirdTooping"),
//      price: 1000}
// var fourth = {
//     name: getElementById("fourthTooping"),
//      price: 1000}
// var fifth = {
//     name: getElementById("fifthTooping"),
//      price: 1200}

// var firstCons = {
//  name: "toppings",
//  types : [first, second, third, fourth, fifth]
 
// }


// var sizeOne = {name: "small", price: 1000, firstCons}
// var sizeTwo = {name: "medium", price: 1200, firstCons}
// var sizeThree = {name: "large", price: 1500, firstCons}

// var sizes=[sizeOne, sizeTwo, sizeThree]



// sizes.forEach (function(size){
// console.log(size.firstCons);
// })
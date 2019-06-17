// business logic

function topping(topp) {
    this.topp = topp,
        this.majina = ['bacon', 'chicken', 'beef', 'vegetables'],
        this.price = 0
    if (topp == majina[0]) {
        this.price += 100;
    } else if (topp == majina[1]) {
        this.price += 150;
    } else if (topp == majina[2]) {
        this.price += 200
    } else if (topp == majina[3]) {
        this.price += 250
    } else if (topp == majina[4]) {
        this.price += 300
    } else if (topp == majina[5]) {
        this.price += 400
    }
    return this.price;
}
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function ORDERClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('pizza-title')[0].innerText
    var price = shopItem.getElementsByClassName('pizza-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('pizza-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class=" cart-item cart-column">

    <img class="cart-item-image" src="${imageSrc}" width="50" height="100">

    <br><br>

    
    </div>
    <span class="cart-price cart-column">${price}</span>
    <p id="pizza-topping"></p>
    <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)+ topping.price
    }
    total = Math.round(total * 100) / 100
    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

// user Interface
$(document).ready(function() {

    var matopping = document.getElementsByClassName('topping').value
    console.log(matopping)

    // function myFunction(){
    //     var matopping = document.getElementsByClassName("input.topping").value
        
    // }
    
    // Remove items from the cart
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var ORDERButtons = document.getElementsByClassName('pizza-button')
    for (var i = 0; i < ORDERButtons.length; i++) {
        var button = ORDERButtons[i]
        button.addEventListener('click', ORDERClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

})

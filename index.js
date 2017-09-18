var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;

  var cart_item = {}

  cart_item[item] = price;

  cart.push(cart_item);

  console.log(item + " has been added to your cart.");

  return cart

}

function viewCart() {

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var items = [];

    for (var i = 0; i <= cart.length; i++) {
      for (item in cart[i]) {
        cart.push(item + "at $" + cart[i][item]);
      }
    }
  }
}

function total() {
  for (var i = 0; i < cart.length; i++) {
    return cart[i][item]
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

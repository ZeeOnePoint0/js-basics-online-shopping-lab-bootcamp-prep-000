var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemPrice = Math.floor(Math.random() * 100) + 1;

  var items = {};

  items[item] = itemPrice;

  cart.push(items);

  console.log(item + " has been added to your cart.");

  return cart;



}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
      var price = [];

      for (i in cart) {

        var price = cart[i];

        for (var j in price) {

          price.push(j + "at $" + price[j]);
        }
      }
    var vCart = price.join(", ");
    console.log("In your cart, you have" + vCart + ".");
  }
}

function total() {
  tote = []

  for (let i = 0; i < cart.length; i++) {
    tote.push(cart[i])
  }
  return cart[i][item];
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
  // write your code here
}

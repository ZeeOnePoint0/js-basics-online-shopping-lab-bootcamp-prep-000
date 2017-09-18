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
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
    }
    else{
      var items = []
      for(var i= 0; i< cart.length; i++){
        for(var item in cart[i]){
          items.push(item + " at $" + cart[i][item])
        }
      }
      console.log("In your cart, you have " + items.join(", ") + ".")
    }

}


function total() {

  var t = 0

   for(var i=0; i< cart.length; i++){

     for (var item in cart[i]){

       t+= cart[i][item]
     }
   }
   return t
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
  // write your code here
}

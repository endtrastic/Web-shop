// cart.js
let cart = []; // Initialize the cart

module.exports = {
  getCart: () => cart,
  addToCart: (item) => {
    cart.push(item);
  },
  clearCart: () => {
    cart = [];
  }
};
// JavaScript for the 'Add to Cart' feature (Basic example)
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

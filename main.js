let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active'); 
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


// let cart=[];
// let totalPrice=0;
// function addToCart(){
//   cart.push({name: productName, price: productPrice});
//   totalPrice+=ProductPrice;
//   updateCardDisplay();
// }

// function updateCardDisplay() {
//   const cartItems = document.getElementById('cart-items');
//   const totalPriceElement = document.getElementById('total-price');

  
//   cartItems.innerHTML = '';
//   cart.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = `${item.name} - $${item.price}`;
//     cartItems.appendChild(li);
//   });

  
//   totalPriceElement.textContent = totalPrice;
// }
let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let searchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
// search.js

document.addEventListener("DOMContentLoaded", function () {
    // Function search bas ma  zabatit
    function performSearch() {
        //search input
        var searchInput = document.getElementById("search-box").value.toLowerCase();

        // (menu and products)
        var items = document.querySelectorAll("#searchContainer .box");

        // Loop 
        items.forEach(function (item) {
            var itemName = item.querySelector("h3").innerText.toLowerCase();

            // If the item name contains the search input, display the item; otherwise, hide it
            if (itemName.includes(searchInput)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    document.getElementById("search-box").addEventListener("input", performSearch);
});

$(document).ready(function () {
    // Remove item from the cart
    $(".cart-item .fa-times").on("click", function () {
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
        return false; 
    });
});

let cartItem= document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=() =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


//aam  nsammiyoun bi variables  ta n2dar nghayer fyoun
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
}

  // Shopping cart object to store added items
  var shoppingCart = [];
    
  // add item to the cart
  function addToCart(item) {
      shoppingCart.push(item);
      updateCart(); //update the cart display
  }

  // Fonction to update the cart display
  function updateCart() {
      // Clear the existing items in the cart container
      var cartContainer = document.querySelector('.cart-items-container');
      cartContainer.innerHTML = '';

      // Loop 3al items in the shopping cart wbtzidoun 3al  cart container
      shoppingCart.forEach(function (item, index) {
          var cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <span class="fas fa-times" onclick="removeFromCart(${index})"></span>
              <img src="${item.image}" alt="${item.name}">
              <div class="content">
                  <h3>${item.name}</h3>
                  <div class="price">${item.price}</div>
              </div>
          `;
          cartContainer.appendChild(cartItem);
      });
  }

  // Function to remove item from the cart
  function removeFromCart(index) {
      shoppingCart.splice(index, 1);
      updateCart(); // Call the function to update the cart display
  }
  
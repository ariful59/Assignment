import { products } from "./product.js";
import { addToCart } from "./shoppingCart.js";

function displayProductList() {
  let productList = document.getElementById("productList");
  productList.innerHTML = ' ';
  products.forEach(function (product) {
    let productRaw = document.createElement('div');
    productRaw.classList.add('w-full', 'max-w-sm', 'ml-10', 'mt-2', 'mx-4', 'bg-gray-100', 'border', 'border-gray-400', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
    productRaw.innerHTML = `
        <img class="p-8 rounded-t-lg" src="${product.image}"
          alt="product image" />
      <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.name}</h5>
        <div class="flex items-center mt-2.5 mb-5">
        ${product.description}
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="cart-button" data-product-id="${product.id}">Add to cart</button>
        </div>
      </div>`
    productList.appendChild(productRaw);
  });
  let cartButton = document.querySelectorAll(`button[value="cart-button"]`);
  //console.log(cartButton);
  cartButton.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
}
displayProductList();
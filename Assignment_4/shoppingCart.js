import { products } from "./product.js";
let cartItems = [];
document.getElementById("clear-cart").addEventListener("click", () => clearAll());

export function addToCart(event) {
    const productId = parseInt(event.target.dataset.productId);
    const product = products.find((product) => product.id === productId);
    if (product) {
        const existingItem = cartItems.find((item) => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({product, quantity: 1 });
        }
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartList');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('w-full', 'max-w-sm', 'ml-10', 'mt-2', 'mx-4', 'bg-gray-100', 'border', 'border-gray-400', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');
        cartItem.innerHTML = `
        <img class="p-10 rounded-t-sm" src="${item.product.image}" alt="product image"/>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${item.product.name}</h5>
        <div class="flex items-center mt-2.5 mb-1">${item.product.description}</div>
        <div class="text-2xl font-bold mb-3 text-gray-500">Quantity: ${item.quantity}</div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$${item.product.price}</span>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="increaseValue" data-product-id="${item.product.id}">+</button>
            <button
            class="text-black bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800" value="decreaseValue" data-product-id="${item.product.id}">-</button>
          <button
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800" value="removeValue" data-product-id="${item.product.id}">Remove</button>
        </div>
      </div>`;
        cartItemsContainer.appendChild(cartItem);
    });

    const increaseValue = document.querySelectorAll(`button[value="increaseValue"]`);
    increaseValue.forEach((button) => {
        button.addEventListener('click', increaseValueFromCart);
    });

    const decreaseValue = document.querySelectorAll(`button[value="decreaseValue"]`);
    decreaseValue.forEach((button) => {
        button.addEventListener('click', decreaseValueFromCart);
    });

    const removeItem = document.querySelectorAll(`button[value="removeValue"]`);
    removeItem.forEach((button) => {
        button.addEventListener('click', removeItemFromCart);
    });

    const cartSubtotal = document.getElementById('cartSubtotal');
    cartSubtotal.textContent = `Total Prices $${calculateSubtotal()}`;
}
function increaseValueFromCart(event){
    const productId = parseInt(event.target.dataset.productId);
    const existingItem = cartItems.find((item) => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    }
    displayCartItems();
}
function decreaseValueFromCart(event){

    const productId = parseInt(event.target.dataset.productId);
    const existingItem = cartItems.find((item) => item.product.id === productId);
    if (existingItem) {
        if(--existingItem.quantity <= 0){
            removeItemFromCart(event);
        }
    }
    displayCartItems();
}
function removeItemFromCart(event){
    const productId = parseInt(event.target.dataset.productId);
    const index = cartItems.findIndex((item) => item.product.id === productId);
    if(index != -1) {
        cartItems.splice(index, 1);
    }
    displayCartItems();
}
function calculateSubtotal() {

    let sum = 0;
    cartItems.forEach((item) =>{
        sum += item.quantity * item.product.price;
    });
    return sum.toFixed(2);
}

function clearAll(){
    cartItems = [];
    displayCartItems();
}
let searchForm = document.querySelector('.search-form-container');

let cart = document.querySelector('.shopping-cart-container');

let loginForm = document.querySelector('.login-form-container');



document.querySelector('#search-btn').addEventListener("click", () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    
})
    

document.querySelector('#cart-btn').addEventListener("click", () => {
   cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
     
})
    

document.querySelector('#login-btn').addEventListener("click", () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    
})
    

document.querySelector('#menu-btn').addEventListener("click", ()=> {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
})
    

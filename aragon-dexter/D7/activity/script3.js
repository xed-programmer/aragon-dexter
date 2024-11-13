const btnAddToCart = document.querySelector('.btn-add-to-cart');

btnAddToCart.addEventListener('click', handleAddClick);

function handleAddClick(event){
    const btn = event.target;
    const parent = btn.parentNode;

    console.log(parent.getAttribute('data-prod-name'));
    
    const cartList = document.querySelector('#cart-list');

    const li = document.createElement('li');

    li.setAttribute('class','list-group-item');

    li.textContent = parent.getAttribute('data-prod-name');
    cartList.appendChild(li);
}
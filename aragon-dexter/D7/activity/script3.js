const btnAddToCart = document.querySelectorAll('.btn-add-to-cart');

btnAddToCart.forEach(btn => btn.addEventListener('click', handleAddClick))

const myCart = new Map();

function handleAddClick(event){
    console.log('clicked');
    
    const btn = event.target;
    const parent = btn.parentNode;

    const product = {
        name: parent.getAttribute('data-prod-name'),
        price: parent.getAttribute('data-prod-price')
    }

    addToCart(product);
    
    const cart = myCart.get(product.name);

    const cartList = document.querySelector('#cart-list');
    const cartListItem = document.getElementById(cart.id);    

    if(cartListItem){
        // cartListItem.textContent = product.name + ' ' + product.price + ' - ' +cart.quantity;
        const quantity = cartListItem.querySelector('#'+cart.id+'_qty');
        quantity.textContent = 'Qty: ' + cart.quantity;
    }else{
        const li = document.createElement('li');
    
        li.setAttribute('class','list-group-item');
        li.setAttribute('id',cart.id);
    
        // li.textContent = product.name + ' ' + product.price + ' - ' +cart.quantity;

        const p = document.createElement('p');
        p.setAttribute('class', 'col-2')
        p.textContent = product.name;

        const p1 = document.createElement('p');
        p1.textContent = 'Amount: ₱' + product.price;
        const p2 = document.createElement('p');
        p2.textContent = 'Qty: 1';
        p2.setAttribute('id',cart.id+'_qty');
        const btnDelete = document.createElement('button');
        btnDelete.setAttribute('class','btn btn-danger btn-sm');
        btnDelete.setAttribute('data-prod-name',product.name);
        btnDelete.addEventListener('click', handleDeleteItemInCart);
        btnDelete.textContent = 'Delete';

        const div = document.createElement('div');
        div.setAttribute('class','d-flex justify-content-between align-items-center col-10');
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(btnDelete);


        const div1 = document.createElement('div');
        div1.setAttribute('class','d-flex justify-content-between');
        div1.appendChild(p);
        div1.appendChild(div);
        li.appendChild(div1)
        cartList.appendChild(li);
    }

    
}

function addToCart(product){
    const cart = myCart.get(product.name);
    if(cart){
        cart.quantity = cart.quantity + 1;
    }else{
        myCart.set(product.name, {
            'id': product.name.replaceAll(' ', '_'),
            'price': product.price,
            'quantity': 1
        });
    }

    updateTotalInCart();
}

function updateTotalInCart(){
    let total = 0;
    myCart.forEach(cart=>{
        total = cart.price * cart.quantity + total;
    });

    document.querySelector('#total-amount').textContent = total.toFixed(2);
}

function handleDeleteItemInCart(event){
    const btnDelete = event.target;
    // console.log(btnDelete);
    
    const item = btnDelete.getAttribute('data-prod-name');

    myCart.delete(item);

    btnDelete.parentNode.parentNode.parentNode.remove();
    updateTotalInCart();
}
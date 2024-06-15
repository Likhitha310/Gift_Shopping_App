document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');

    let cart = [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-details">
                    <span>${item.name}</span>
                    <span>Price: $${item.price.toFixed(2)}</span>
                </div>
                <div>
                    <span>Quantity: ${item.quantity}</span>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    const products = [
        { id: 1, name: 'Flower Bouquet 1', price: 29.99, image: 'Gift_Images/Bouquet/Bouquet1.jpg' },
        { id: 2, name: 'Flower Bouquet 2', price: 30.99, image: 'Gift_Images/Bouquet/Bouquet2.jpg' },
        { id: 3, name: 'Chocolate Box 1', price: 19.99, image: 'Gift_Images/Chocolate/Chocolate1.jpg' },
        { id: 4, name: 'Chocolate Box 2', price: 20.99, image: 'Gift_Images/Chocolate/Chocolate2.jpg' },
        { id: 5, name: 'Teddy Bear 1', price: 25.99, image: 'Gift_Images/Teddy/Teddy1.jpg' },
        { id: 6, name: 'Teddy Bear 2', price: 26.99, image: 'Gift_Images/Teddy/Teddy2.jpg' },
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    productList.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const id = parseInt(event.target.dataset.id);
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            renderCart();
        }
    });

    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item-btn')) {
            const id = parseInt(event.target.dataset.id);
            const itemIndex = cart.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                renderCart();
            }
        }
    });

    clearCartBtn.addEventListener('click', () => {
        cart = [];
        renderCart();
    });

    renderCart();
});

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "phone",
        price: 115000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600"
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "phone",
        price: 95000,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600"
    },

    {
        id: 3,
        name: "AirPods Pro",
        category: "audio",
        price: 24900,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600"
    },

    {
        id: 4,
        name: "Sony Headphones",
        category: "audio",
        price: 18900,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },

    {
        id: 5,
        name: "Apple Watch",
        category: "watch",
        price: 39900,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600"
    },

    {
        id: 6,
        name: "Galaxy Watch",
        category: "watch",
        price: 29900,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },

    {
        id: 7,
        name: "Power Bank 20000mAh",
        category: "accessory",
        price: 2500,
        image: "https://images.unsplash.com/photo-1609592424195-4b7b5d9d6d0b?w=600"
    },

    {
        id: 8,
        name: "65W Fast Charger",
        category: "accessory",
        price: 1800,
        image: "https://images.unsplash.com/photo-1583863788430-2e1a8d3a6c9a?w=600"
    }
];


let cart = [];


function showProducts(list) {

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";


    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `
            
            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <span class="category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <div class="price">
                    ৳${product.price.toLocaleString()}
                </div>

                <button
                    class="add-button"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


function filterProducts(category) {

    if (category === "all") {

        showProducts(products);

    } else {

        const filtered =
            products.filter(
                product =>
                    product.category === category
            );

        showProducts(filtered);
    }

}


function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );

    cart.push(product);

    updateCart();

    alert(
        product.name +
        " added to your cart!"
    );

}


function updateCart() {

    document.getElementById(
        "cart-count"
    ).innerText = cart.length;


    const cartItems =
        document.getElementById(
            "cart-items"
        );


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    } else {

        cartItems.innerHTML = "";

        cart.forEach((product, index) => {

            cartItems.innerHTML += `

                <div class="cart-item">

                    <span>
                        ${product.name}
                    </span>

                    <span>
                        ৳${product.price.toLocaleString()}

                        <button
                            onclick="removeFromCart(${index})"
                        >
                            ❌
                        </button>

                    </span>

                </div>

            `;

        });

    }


    const total =
        cart.reduce(
            (sum, product) =>
                sum + product.price,
            0
        );


    document.getElementById(
        "cart-total"
    ).innerText =
        "৳" + total.toLocaleString();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document.getElementById(
        "cart-modal"
    ).style.display = "flex";

}


function closeCart() {

    document.getElementById(
        "cart-modal"
    ).style.display = "none";

}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Order system coming soon!"
    );

}


/* WEBSITE START */

showProducts(products);

updateCart();
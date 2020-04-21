document.querySelectorAll(".remove").forEach(function(elem) {
    elem.addEventListener("click"), shoppingCart.removeItem;
    console.log("hello");
});

var products = {
    1 : {
        author : "Author 1",
        name : "Example 1",
        img : "https://pngimg.com/uploads/vans/vans_PNG22.png",
        count : 0,
        price : 54.99
    },
    2 : {
        author : "Author 2",
        name : "Example 2",
        img : "https://upload.wikimedia.org/wikipedia/commons/8/83/Shoes%2C_leather_tennis_%28pair%29_%28AM_2017.30.1-4%29.jpg",
        count : 0,
        price : 54.99
    },
    3 : {
        author : "Author 3",
        name : "Example 3",
        img : "https://storage.needpix.com/rsynced_images/shoes-3445390_1280.jpg",
        count : 0,
        price : 54.99
    },
    4 : {
        author : "Author 4",
        name : "Example 4",
        img : "https://storage.needpix.com/rsynced_images/shoes-4116754_1280.jpg",
        count : 0,
        price : 54.99
    },
    5 : {
        author : "Author 5",
        name : "Example 5",
        img : "https://cdn.pixabay.com/photo/2019/10/01/02/29/shoes-4517062_960_720.jpg",
        count : 0,
        price : 54.99
    },
    6 : {
        author : "Author 6",
        name : "Example 6",
        img : "https://live.staticflickr.com/8751/16977244516_4babea3887_b.jpg",
        count : 0,
        price : 54.99
    },
    7 : {
        author : "Author 7",
        name : "Example 7",
        img : "https://live.staticflickr.com/8226/8565614146_73030927c3_b.jpg",
        count : 0,
        price : 54.99
    },
    8 : {
        author : "Author 8",
        name : "Example 8x",
        img : "https://storage.needpix.com/rsynced_images/shoe-3734828_1280.jpg",
        count : 0,
        price : 54.99
    }
};

window.addEventListener("load", function() {
    var productsGrid = document.getElementById("productsGrid");
    for(var i in products) {
        product = document.createElement("section");
        product.classList.add("product");
        img = document.createElement("img");
        img.src = products[i]["img"];
        img.classList.add("productImage");

        product.appendChild(img);
        productsGrid.appendChild(product);
        node = document.createElement("section");
        node.classList.add("productName");
        nodeChild = document.createElement("h3");
        nodeChild.innerText = products[i]["author"];
        node.appendChild(nodeChild);
        product.appendChild(node);

        productName = document.createElement("p");
        productName.innerHTML = products[i]["name"]
        node.appendChild(productName);

        productBuy = document.createElement("section");
        productBuy.classList.add("productBuy");
        product.appendChild(productBuy);

        productPrice = document.createElement("p");
        productPrice.innerHTML = "$" + products[i]["price"];
        productPrice.classList.add("productPrice");
        productBuy.appendChild(productPrice);

        buyButton = document.createElement("button");
        buyButton.innerHTML = "Buy Now!";
        buyButton.classList.add("buyButton");
        buyButton.onclick = shoppingCart.addItem;
        buyButton.dataset.id = i;   
        productBuy.appendChild(buyButton);

    }
});

var shoppingCart = {
    data : [],

    addItem : function() {
        var i = this.dataset.id;
        var product = products[i];
        if(shoppingCart.data[i] != null) {
            shoppingCart.data[i].count++;
            console.log(shoppingCart.data);
            return;
        }
        (shoppingCart.data[i]) = {
            author : product['author'],
            name : product['name'],
            count : 0,
            img : product['img'],
            price : product['price']
        }
        var cartItems = document.getElementById("cartItems");
        var cartProduct = document.createElement("section");
        cartProduct.classList.add("cartProduct");
        
        cartItems.appendChild(cartProduct);
        
        var img = document.createElement("img");
        img.src = shoppingCart.data[i].img;
        img.classList.add("productImage");
        cartProduct.appendChild(img);

        var cartProductDescription = document.createElement("section");
        cartProductDescription.classList.add("cartProductDescription");
        cartProduct.appendChild(cartProductDescription);

        var pName = document.createElement("p");
        var pSize = document.createElement("p");
        var pPrice = document.createElement("p");
        var pRemove = document.createElement("p");

        pName.innerHTML = shoppingCart.data[i].name;
        pSize.innerHTML = "Size " + "M";
        pPrice.innerHTML = "$" + shoppingCart.data[i].price;
        pRemove.innerHTML = "Remove?";

        pName.classList.add("name");
        pSize.classList.add("size");
        pPrice.classList.add("price");
        pRemove.classList.add("remove");
        pRemove.dataset.id = this.dataset.id;
        pRemove.addEventListener("click", shoppingCart.removeItem);

        cartProductDescription.appendChild(pName);
        cartProductDescription.appendChild(pSize);
        cartProductDescription.appendChild(pPrice);
        cartProductDescription.appendChild(pRemove);
        console.log(shoppingCart.data);
    
    },
    removeItem : function(i) {
        shoppingCart.data.splice(event.target.dataset.id, 1);
        event.target.closest(".cartProduct").remove();
        console.log(shoppingCart.data);
    }
};

console.log("Ehll");
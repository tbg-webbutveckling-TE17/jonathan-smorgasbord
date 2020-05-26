document.querySelectorAll(".remove").forEach(function(elem) {
    elem.addEventListener("click", shoppingCart.removeItem);
    console.log("hello");
});

document.getElementById("clearForm").addEventListener("click", function() {
    document.getElementById("cartItems").reset();
});

document.getElementById("clearItems").addEventListener("click", function() {
    shoppingCart.data = {};
    document.getElementById("cartItemsDisplay").innerHTML = "";
    shoppingCart.viewCart("hidden");

});

document.querySelectorAll(".moreInfo").forEach(function(elem) {
    elem.addEventListener("click", function() {
        event.target.querySelectorAll('')
    });
    console.log("hello");
});

var products = {
    1 : {
        author : "Author 1",
        name : "Example 1",
        img : "https://i.pinimg.com/originals/5f/ca/07/5fca078feec5b31b286a234f2e6e6cfb.jpg",
        price : 45.99,
        count : 0,
        description : "Made in a collab with /invalid author/, 100% cotton, best washed using the strength of 50 muscular men."
    },
    2 : {
        author : "Author 2",
        name : "Example 2",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3pQP-ADoFZ2BAHTvayyxNsdQ0ZK_QWhdQ3XB3bdSxPXqeczw9&usqp=CAU",
        price : 45.99,
        count : 0,
        description : "100% cotton, best washed using the strength of 10 muscular men."
    },
    3 : {
        author : "Author 3",
        name : "Example 3",
        img : "https://storage.needpix.com/rsynced_images/shoes-3445390_1280.jpg",
        count : 0,
        price : 64.99,
        description : "100% cotton, best washed using the strength of 90 muscular men."
    },
    4 : {
        author : "Author 4",
        name : "Example 4",
        img : "https://storage.needpix.com/rsynced_images/shoes-4116754_1280.jpg",
        count : 0,
        price : 44.99,
        description : "100% cotton, best washed using the strength of 15 muscular men."
    },
    5 : {
        author : "Author 5",
        name : "Example 5",
        img : "https://cdn.pixabay.com/photo/2019/10/01/02/29/shoes-4517062_960_720.jpg",
        count : 0,
        price : 34.99,
        description : "100% cotton, best washed using the strength of 12 muscular men."
    },
    6 : {
        author : "Author 6",
        name : "Example 6",
        img : "https://live.staticflickr.com/8751/16977244516_4babea3887_b.jpg",
        count : 0,
        price : 54.99,
        description : "100% cotton, best washed using the strength of 60 muscular men."
    },
    7 : {
        author : "Author 7",
        name : "Example 7",
        img : "https://live.staticflickr.com/8226/8565614146_73030927c3_b.jpg",
        count : 0,
        price : 64.99,
        description : "100% cotton, best washed using the strength of 33 muscular men."
    },
    8 : {
        author : "Author 8",
        name : "Example 8x",
        img : "https://storage.needpix.com/rsynced_images/shoe-3734828_1280.jpg",
        count : 0,
        price : 74.99,
        description : "Limited edition, only temporarily in stock, 100% cotton & best washed using the strength of 500 muscular men."
    }
};

window.addEventListener("load", function() {
    shoppingCart.viewCart("hidden")
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

        // moreInfo = document.createElement("p");
        // moreInfo.classList.add("moreInfo");
        // productBuy.appendChild(moreInfo);
        // moreInfo.innerHTML = "More info";

        itemDescription = document.createElement("p");
        itemDescription.classList.add("productInfo");
        product.appendChild(itemDescription);
        itemDescription.innerHTML = products[i]["description"];

    }
});

var shoppingCart = {
    data : [],

    countInt: [],

    addItem : function() {
        var i = this.dataset.id;
        var product = products[i];
        if(shoppingCart.data[i] != null) {
            shoppingCart.data[i].count++;
            shoppingCart.countInt[i].innerHTML = "Count: " + shoppingCart.data[i].count;
            return;
        }
        (shoppingCart.data[i]) = {
            author : product['author'],
            name : product['name'],
            count : 1,
            img : product['img'],
            price : product['price']
        }
        var cartItems = document.getElementById("cartItems");
        var cartItemsDisplay = document.getElementById("cartItemsDisplay")
        var cartProduct = document.createElement("section");
        cartItemsDisplay.appendChild(cartProduct);
        cartProduct.classList.add("cartProduct");
        
        var img = document.createElement("img");
        img.src = shoppingCart.data[i].img;
        img.classList.add("productImage");
        cartProduct.appendChild(img);

        var cartProductDescription = document.createElement("section");
        cartProductDescription.classList.add("cartProductDescription");
        cartProduct.appendChild(cartProductDescription);
        cartProduct.dataset.id = this.dataset.id;


        var pName = document.createElement("p");
        var pCount = document.createElement("p");
        var pPrice = document.createElement("p");
        var pRemove = document.createElement("p");

        shoppingCart.countInt[i] = pCount;

        pName.innerHTML = shoppingCart.data[i].name;
        pCount.innerHTML = "Count: " + shoppingCart.data[i].count;
        pPrice.innerHTML = "$" + shoppingCart.data[i].price;
        pRemove.innerHTML = "Remove?";

        pName.classList.add("name");
        pCount.classList.add("size");
        pPrice.classList.add("price");
        pRemove.classList.add("remove");
        pRemove.dataset.id = this.dataset.id;
        pRemove.addEventListener("click", shoppingCart.removeItem);

        cartProductDescription.appendChild(pName);
        cartProductDescription.appendChild(pCount);
        cartProductDescription.appendChild(pPrice);
        cartProductDescription.appendChild(pRemove);
        console.log(shoppingCart.data);
    
        var submitText = document.getElementById("submitText");
        var submitString = "";
        for (let index = 0; index < shoppingCart.data.length; index++) {
            if(shoppingCart.data[index] != null) {
                submitString += `[${index}] Name: ${shoppingCart.data[index].name} + Count: ${shoppingCart.data[index].count} Price: ${shoppingCart.data[index].price} \n`
                // JSON.stringify((shoppingCart.data[index], ["name", "count", "price"]))
            }
        }
        submitText.innerHTML = submitString;
        shoppingCart.viewCart("visible")
    },
    removeItem : function(i) {
        shoppingCart.data.splice(event.target.dataset.id, 1);
        event.target.closest(".cartProduct").remove();
        console.log(shoppingCart.data);
        var cartItemsDisplay = document.getElementById("cartItemsDisplay")
        var result = cartItemsDisplay.innerHTML.trim();
        if(result == "") {
            shoppingCart.viewCart("hidden")
        }
    },
    viewCart : function(bool) {
        document.getElementById("cartItemsDisplay").style.visibility = bool;
        document.getElementById("cartItems").style.visibility = bool;
        document.getElementById("clearItems").style.visibility = bool;
        if(bool == "hidden") {
            document.getElementById("cartInfo").innerHTML = "Your cart is empty! Add items to continue to checkout."
        }
    }
};

console.log("Ehll");
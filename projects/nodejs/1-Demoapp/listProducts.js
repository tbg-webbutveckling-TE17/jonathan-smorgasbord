var faker = require('faker')

for (let i = 0; i < 10; i++) {
    console.log(`Name: ${faker.commerce.productName()} Price: $${faker.commerce.price()}` );
}
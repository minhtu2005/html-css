let products = [
    { id: 1, product_name: "Laptop", price: 1200 },
    { id: 2, product_name: "Smartphone", price: 800 },
    { id: 3, product_name: "Tablet", price: 500 },
    { id: 4, product_name: "Headphones", price: 100 },
    { id: 5, product_name: "Mouse", price: 20 }
];
function sortProductsByPriceAscending(products) {
    products.sort((a, b) => a.price - b.price);
}
function printProducts(products) {
    products.forEach(product => {
        console.log(`ID: ${product.id}, Product Name: ${product.product_name}, Price: $${product.price}`);
    });
}
sortProductsByPriceAscending(products);
console.log("Danh sách products sau khi được sắp xếp tăng dần theo giá:");
printProducts(products);
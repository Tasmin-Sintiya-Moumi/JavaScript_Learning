// Write a function that takes an array of product objects and returns the total stock using reduce.

let obj = [{name: "Book", price: 250}, {name: "Pen", price: 25},
    {name: "Laptop", price: 65000}, {name: "Phone", price: 25000}];

function product(obj){
    return obj.reduce((total, s) => total + s.price, 0);
}

console.log(product(obj));
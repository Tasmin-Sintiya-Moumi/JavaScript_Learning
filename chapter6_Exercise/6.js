//Sort an array of objects by price from highest to lowest.

let obj = [{name: "Book", price: 250}, {name: "Pen", price: 25},
    {name: "Laptop", price: 65000}, {name: "Phone", price: 25000}];

obj.sort((a,b) => b.price - a.price);

console.log(obj);
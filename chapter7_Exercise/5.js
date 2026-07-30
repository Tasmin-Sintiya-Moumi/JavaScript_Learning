// Stringify an object, then parse it back, and prove the round trip worked by printing a property. 

const obj={name: "Moumi", dept: "CSE"};

const x = JSON.stringify(obj);
console.log(x);

const y = JSON.parse(x);
console.log(y.name);
console.log(y.dept);
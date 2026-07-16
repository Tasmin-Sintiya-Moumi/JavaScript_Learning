//Use map to convert an array of taka amounts into strings like '450 BDT'. 

let arr = [250, 350, 450, 550];

let amount = arr.map((s) => `${s} BDT`);

console.log(amount);
// Use reduce to count how many numbers in an array are even.

let arr = [3, 4, 5, 6, 10 , 13];

let even = arr.reduce((cnt, nums) => nums % 2 == 0 ? cnt + 1 : cnt ,0);

console.log(even);
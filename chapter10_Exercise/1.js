// Use setTimeout to print 'Time up!' after 3 seconds, and prove other code runs meanwhile. 

console.log("hello");

setTimeout(() => {
    console.log("Time up!");
}, 3000);

console.log("Students");
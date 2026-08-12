/*Write a function applyTwice(fn, value) that returns fn(fn(value)). 
Test it with a function that doubles a number.*/

function applyTwice(fn , value)
{
    return fn(fn(value));
}

function double (n){
    return n * 2;
}

console.log(applyTwice(double, 10));
//Compute the sum of numbers from 1 to 100 with a loop, then verify with the formula n(n+1)/2. 

let sum =0;

for(let i=1; i<=100; i++)
{
    sum += i;
}
console.log(sum);

let n = 100;

let sum1 = n*(n+1)/2;

console.log(sum1);
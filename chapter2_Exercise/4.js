//What does "5" + 3 print? What does "5" - 3 print? 
// Run both, then write one sentence explaining the difference.

let x = "5";
let y = 3;

console.log(x+y);
/*Answer will be '53'.This is because here 5 is string and when 1st string gets (+) operator it is concatenated.
2nd value is considered string.*/

console.log(x-y);
/*Answer will be '2'. This is because 5 is a string and when 1st string gets (-) operator it doesn't concatenate rather it converts
the string into number and performs the operation.*/

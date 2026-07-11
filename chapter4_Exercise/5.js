/*FizzBuzz: for 1 to 30, print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, 
otherwise the number. This is a famous interview question — solve it without AI.*/

for(let i=1; i<=30; i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    
}
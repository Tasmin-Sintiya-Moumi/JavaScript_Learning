//Print a 5-row pyramid of stars using nested loops. 

for(let i=1; i<=5; i++)
{
    let s ="";
    for(let j=1; j<=5-i;j++)
    {
        s += " ";
    }
    for(let k=1; k<=2*i-1; k++)
    {
        s +="*";
    }
    console.log(s);
}
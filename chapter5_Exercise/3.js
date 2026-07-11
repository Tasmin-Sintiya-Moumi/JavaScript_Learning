//Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.

function max3(a,b,c)
{
    if(a>b && a>c)
    {
        return a;
    }
    else if(b>a && b>c)
    {
        return b;
    }
    else if(c>b && c>a)
    {
        return c;
    }
}

console.log(max3(5,2,7))
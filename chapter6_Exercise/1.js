//Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max).

let a = [3,7,2,9,4];

for(let i=0; i<a.length; i++)
{
    for(let j=0; j<a.length - 1 -i; j++)
    {
        if(a[j] > a[j+1])
        {
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}

console.log(a[a.length - 1]);
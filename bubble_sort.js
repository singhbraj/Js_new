
let a = [64,25,12,22,11];
let l =a.length

for(let i =0; i<l; i++)
{
   for(j=0; j<l-1-i; j++)
   {
       if(a[j]>a[j+1])
       {
           let temp = a[j];
           a[j]=a[j+1];
           a[j+1] = temp
       }
   }
}

console.log(a)
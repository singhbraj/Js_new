

let a = [64,25,12,22,11];
let l =a.length

for(let i =0; i<l-1; i++)
{
    let min_idx = i;
    for(let j=i+1; j<l; j++)
    {
        if(a[j]<a[min_idx])
        min_idx=j
    }
    let temp = a[i];
    a[i] = a[min_idx];
    a[min_idx] = temp
}
// swap()       

console.log(a)
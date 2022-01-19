let a = [8,2,1,5,6,7,1,2];


// Method - 1  

let b = [];
let len = a.length;

for(let i = 0; i<len ; i++)
{
    if(b.indexOf(a[i])===-1)
    {
        b.push(a[i]);
    }
}

console.log(b)


//  Method -2 

// a.sort();

// let temp;
// // let b = [];

// for(let i =0; i<len ; i++)
// {
//     if(a[i]!==temp)
//     {
//         b.push(a[i])
//         temp = a[i];
//     }
// }

// console.log(b)

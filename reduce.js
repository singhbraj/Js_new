
const arr = [5,1,3,2,6];

// sum or max

// function findSum(arr){
//     let sum=0;
//     for (let i =0; i<arr.length;i++)
//     {
//         sum+=arr[i]
//     }
//     return sum;
// }

// console.log(findSum(arr))


// function findMax(arr){
//     let max=0;
//     for (let i = 0; i<arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//          max=arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr))




// const output  = arr.reduce(function(acc,curr){
//  return acc+=curr
// },0)

const output = arr.reduce(function(acc,curr){
        if(curr>acc)
        {
           acc = curr;
        }
        return acc
},0)

console.log(output)
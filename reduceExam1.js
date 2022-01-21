const a = [1,2,3,4];


a.reduce((acc,curr,index,arr)=>{
    arr[index] = arr[index]*2;
},0);

console.log(a);


let array = [12,35,1,35,34,1];


const getSecondLargestELement = (arr) =>{
   arr.sort((a,b)=>a-b)
   let second = arr[arr.length-1]
   for(let i=arr.length-1; i>0; i--){
    if(arr[i]<second){
        second = arr[i]
        break;
    }
    else
    continue;

   }
   
   return second;

}

const arr = getSecondLargestELement(array);
console.log(arr)

/*  All permutaions  */

let output=[]

const permutation = (str,index) =>{
/* console.log(output.length)
res.push("braj") */
     if(index>=str.length){
         return output.push(str)
     }
     for(let i = index; i<str.length; i++){
      str = swap(str,index,i)
      permutation(str,index+1,output)
      str = swap(str,index,i)
      }

/* return res; */



}

function swap(a, i, j)
{
    let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}






permutation("abc",0)
console.log({output})



function getSum (a){
    return function(b){
      if(b)  return getSum(a+b);
      return a;
       }
    }





console.log(getSum(2)(3)(6)());

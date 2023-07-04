
function curry(func) {
    /* console.log(func.length)*/
    // console.log(func)


    return function curriedFunc(...args){
        console.log(args.length)
      if (args.length >= func.length){
        return func(...args)
      } else {
        return function(...next) {
            console.log({args})
            console.log({next})
          return curriedFunc(...args, ...next)
        }
      }
    }
  }
  
  
  
  let sum = (a, b, c, d) => a + b + c + d;
// function sum(a,b,c,d){
//     return a+b+c+d;
// }
//   console.log(sum.length)
  const totalSum = curry(sum)
  console.log(totalSum(1)(2))
//   console.log(totalSum(1)(2)(3)(4))
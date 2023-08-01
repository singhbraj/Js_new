


// const val = {salary:100000};
// const getSalary =(person) =>person.salary;
// const addBonus = (netSalary) =>netSalary+10000;
// const deductTax = (grossSalary) =>grossSalary-(grossSalary*.3);





// const pipe = (...fns)=>{
//     return function(val){
//         fns.forEach((fn)=>{
//           console.log({val})
//         val = fn(val)
//       })
//       return val;
//     }
// }



// const result = pipe(getSalary,addBonus,deductTax)(val)

// console.log(result)



const obj = {
    a:{
        b:(a,b,c)=>a+b+c,
        c:(a,b,c)=>a+b-c,
    },
    d:(a,b,c) => a-b-c
}


const pipe = (obj) =>{
    return (...args)=>{
        Object.keys(obj).forEach((key)=>{
            // console.log(key)
            if(typeof obj[key] ==='function'){
               obj[key] = obj[key](...args)
            //    console.log(obj[key])
            }else{
                pipe(obj[key])(...args)
            }
        })
    return obj;
    }
}


console.log(pipe(obj)(1,1,1));
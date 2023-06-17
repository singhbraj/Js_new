


Promise.myall = function(promises){
 return new Promise((resolve,reject)=>{
    let result = []
    let total = 0;

    promises.forEach((item,index)=>{
        Promise.resolve(item).then((res)=>{
            result[index] = res;
            total++;
            if(total === promises.length){
                resolve(result)
            }
        }).catch((error)=>reject(error))
    })
})

}



const prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg1")
    }, 1000)
})
  
const prom2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("error")
    }, 2000)
})
  
const prom3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg2")
    }, 3000)
})
  
const prom4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg3")
    }, 3000)
})


Promise.all([prom1,prom2,prom3,prom4]).then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err))

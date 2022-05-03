let promise = new Promise((resolve,reject)=>{
    console.log(1)
    resolve(25);
    })
    
    console.log(2)
    
    setTimeout(()=>{
    console.log(3)
    },0)
    
    
    promise.then(()=>{
    console.log(4)
    })
    
    console.log(5)
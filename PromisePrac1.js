
const PromisePollyFill = function(executor){

    let onResolve, isFullfilled, isCalled,val
    
    function resolve(value){
        isFullfilled = true
        val = value
        if(typeof onResolve === 'function'){
            onResolve(value)
            isCalled = true
        }
    }
    
    this.then=((cb)=>{
         onResolve = cb
        if(isFullfilled && !isCalled){
            isCalled = true;
            onResolve(val)
        }
    return this
    })
    
    try{
    executor(resolve)
    }catch(e){
    console.log(e)
    }
    
    }
    
    const promise = new PromisePollyFill((resolve,reject)=>{
     setTimeout(()=>{ 
     resolve(2)
     },3000) 
     } 
    )
    
    promise.then((res)=>{
    console.log(res)})
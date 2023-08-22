

const cachedApiCall = (time) =>{

    const cache={}

    return async (url,config={}) =>{

        const key = `${url}${JSON.stringify(config)}`;

        const entry = cache[key]

        // console.log(entry?.expiry)
        // console.log(Date.now())

        if(!entry || Date.now()>entry.expiry){
            console.log("The fresh API call has made")
         try{
             const response = await fetch(url,config)
             const res = await response.json()
             cache[key] = {value:res,expiry:Date.now()+time}
         }catch(e){
            console.log("error while making api call",e)
         }
            
        }

        return cache[key].value

    } 

} 





const call = cachedApiCall(800)

call('https://jsonplaceholder.typicode.com/todos/1',{}).then(a=>console.log(a))
setTimeout(()=>{
    call('https://jsonplaceholder.typicode.com/todos/1',{}).then(a=>console.log(a))
},800)

setTimeout(()=>{
    call('https://jsonplaceholder.typicode.com/todos/1',{}).then(a=>console.log(a))
},1700)
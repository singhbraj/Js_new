
const loggerFunc = () =>{
    console.log("Throttled Function")
}


const throttle = (fn,limit) =>{
    let flag = true
        return function(){
            let context = this;
            // console.log(context)
            let args = arguments;
        
            if(flag){
                fn.apply(context,args)
                flag=false;
                setTimeout(()=>{
                   flag =true
                },limit)
            }

        }

} 

const betterLoggerFunction = throttle(loggerFunc,1000)
window.addEventListener("resize",betterLoggerFunction)


// const normalFunc = () =>{
//     console.count("Normal Function")
// }

// window.addEventListener("resize", normalFunc)


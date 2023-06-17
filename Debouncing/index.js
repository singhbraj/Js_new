// Debouning in JavaScript  
let count = 0;
const getData = (name,age) =>{
    // calls an API and gets Data
   console.log(name,age);
    console.log("Fetching Data....",count++)

}

// const debounce = function (fn,d) {
//     let timer;
//     return function(){
        
//         let context = this;
//         args = arguments;
//         clearInterval(timer);
//        timer = setTimeout(()=>{
//             fn.apply(context,arguments)
//         },d)
//     }
// }


const debounce = function(fn,d){
   let timer
    return function(){

        // let context = this;
        // console.log(this)
        let args = arguments
        clearInterval(timer)
       timer =  setTimeout(()=>{
            fn(...args)
        },d)

    }

}

// let Person = {
//     name:'braj',
//     age:24
// }
 
const betterFunction = debounce(getData,1000)

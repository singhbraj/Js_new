// Debouning in JavaScript  

let count = 0;
const getData = (name) =>{

    // calls an API and gets Data
   console.log(name);
    console.log("Fetching Data....",count++)

}

const debounce = function (fn,d) {

    let timer;

    return function(){
        let context = this;
        args = arguments;
        clearInterval(timer);
       timer = setTimeout(()=>{
            fn.apply(context,arguments)
        },d)
    }

}



 
const betterFunction = debounce1(getData,300)

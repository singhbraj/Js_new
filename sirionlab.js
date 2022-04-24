// function multiply(a) {
//     console.log(a);
//     if (a > 16)
//         throw `a is higher than 16`;
//     return Promise.resolve(a * a);
// }

// function abc(value) {
//     Promise.resolve(2)
//         .then(multiply)
//         .then(multiply)
//         .then(multiply)
//         .then(multiply)
//         .then(multiply)
//         .catch(error => {
//             console.log(`Caught: ${error}`);
//             return 3;
//         })
//         .then(multiply)
//         .then(console.log)
// }

// 2
// 4
// 16
// 3
// 9


// //2 
// //4 
// //16 
// //256 
// //error 
// //9 




function isPromise(p) {
    if (typeof p === 'object' && typeof p.then === 'function') {
      return true;
    }
  
    return false;
  }

function returnsPromise(f) {
    if (
      f.constructor.name === 'AsyncFunction' ||
      (typeof f === 'function' && isPromise(f()))
    ) {
      console.log('✅ Function returns promise');
      return true;
    }
  
    console.log('⛔️ Function does NOT return promise');
    return false;
  }



let arr = [
    function() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve("Requirement"), 1000);
        });
    },
    function() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve("Design"), 1000);
        });
    },
    function() {
        return "Team Loading";
    },
    function() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve("Development"), 3000);
        });
    },
    function() {
        return "Testing";
    },
    function() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve("Bug Fixing"), 1000);
        });
    },
    function() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve("Live"), 1000);
        });
    },
    function(){
    return new Promise((resolve,reject)=>{
    setTimeout(reject("Some error"),1000)
    })
}
];




for(let i=0; i<arr.length; i++){
   
    if(returnsPromise(arr[i])){
        arr[i]().then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    else{
        console.log(arr[i]())
    }

}
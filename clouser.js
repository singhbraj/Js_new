// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();


const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++
        console.log(`${passengerCount} passengers`)
        
    }
}

const booker =  secureBooking()
booker()
console.dir(booker)
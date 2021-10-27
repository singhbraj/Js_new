  
//   function x(){
//       var i= 1;
//       setTimeout(function(){
//           console.log(i)
//       },1000)
//   }

//   x()

//   function x(){
    
//     for(let i = 1; i<=5; i++)
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

// x()

function x(){
    
    

    for(var i = 1; i<=5; i++)
    {
    function close(i)
    {
        setTimeout(function(){
            console.log(i)
        },i*1000)

    }
    close(i)
}
}

x()
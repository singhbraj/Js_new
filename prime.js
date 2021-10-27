

const prime = (num) =>{
 
    if(num<=1)
    return false;
    else if(num===2)
    return true
   else{
    for(let i = 2; i<=Math.sqrt(num); i++) {
        if(num%i===0)
        {
            console.log("Hello")
           return false
        }
    }
    
    return true;
}
}

console.log(prime(6))
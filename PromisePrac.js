
const cart = ["Mobile","Laptop","Earbuds"];

createOrder(cart).then(function(orderId){
    console.log(orderId)
}).then(function(orderId){
    return proccedToPayment(orderId)
}).then(function(res){
    console.log(res)
}).catch(function(err){
    console.log(err)
})


function createOrder(cart){
    const promise = new Promise(function(resolve,reject){

         if(!validate(cart)){
            const err = new Error("Something went wrong")
            reject(err)
         }
         else{
            const orderId = "12345";
            if(orderId){
                resolve(orderId)
            }
         }

         
         
        })
        return promise;

}

function validate(cart){
    return true
}


function proccedToPayment(orderId){

    const promise = new Promise(function(resolve,reject){
           resolve("Payment dome successfully!!")
    })

    return promise

}
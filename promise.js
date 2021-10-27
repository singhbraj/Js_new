var promise = new Promise(function(resolve,reject){
    const x = "Braj";
    const y = "Braj";
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
});

promise.then(function(){
    console.log('Success, You are Braj ')
}).catch(function(){
    console.log('Some error has occured')
})
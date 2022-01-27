// Using function binding

let multiply = function(x,y){
    console.log(x*y);
}


let multipleByTwo =  multiply.bind(this,2);
multipleByTwo(3)


// Using function clousers

let multiply = function(x){
    return function (y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(5)



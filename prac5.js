var  length = 10;
function fn(){
    console.log(this.length);
}

var obj = {
length:5,
method:function(fn){
    console.log(arguments);
    fn();
    arguments[0]();
}
}

obj.method(fn,1);



function executer(cb){
    cb(null,'hello');
}

executer(function(err,data){
    console.log(data)
})

// console.log("hi");
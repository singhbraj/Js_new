let obj={
    firstName:'Braj',
    lastName:'Kishor',
};

let printName = function(hometown,state,country){
    console.log(this.firstName + " " + this.lastName + "," + hometown + "," + state, "," + country );
}


let printMyName = printName.bind(obj,"Aligarh","UP");

printMyName("India");


Function.prototype.mybind = function(...args){

    let obj = this;
    params = args.splice(1);
    return function(...args2){
     obj.apply(args[0],[...params,...args2])
    }

}


let printMyName2 = printName.mybind(obj,'Aligarh','UP');
printMyName2("India")



let name ={
    firstname:'Braj',
    lastname:'Kishor'
}

// let printName = function(hometown,state,country){
//     console.log(this.firstname+' '+this.lastname+" "+hometown+ ' '+ state+' '+country );
// }

let printName = function(hometown,state,country){
    console.log(this.firstname + ' ' + this.lastname + ' ' + hometown + " " + state + " " + country);
}

// let printMyName = printName.bind(name,"Aligarh",'UP');
// printMyName('India')

Function.prototype.mybind = function(...args){

    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params, ...args2])
    }
}

let printMyName2 = printName.mybind(name,"Aligarh","UP");
printMyName2("India");



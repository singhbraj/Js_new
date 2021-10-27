

let obj = {
    name:"Braj",
    myAge:{
       age: 21
    }
}

let obj1 = {...obj};
obj1.name="Kishor";
obj1.myAge.age=24;
console.log(obj);
console.log(obj1)


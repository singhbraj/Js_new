
let obj={
    firstName:'Braj Kishor',
    lastName:'Singh',
}

let string = JSON.stringify(obj);
console.log(string);
let object = JSON.parse(string);
console.log(object);
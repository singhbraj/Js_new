function greet(name){
    return `Hello ${name}`;
}


// console.log(greet('Braj'));


const persons = ["Braj","Robin"];

const messages = persons.map(greet);
console.log(messages);


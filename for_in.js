// The for in statement loops through the properties of an object 

const person = {
    fname:"John",
    lname:'Doe',
    age:25
};

for(let key in person){
    console.log(person[key]);
}
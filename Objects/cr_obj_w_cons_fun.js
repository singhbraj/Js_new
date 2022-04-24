
const Person  = function(firstName,birthYear){

   // Instance properties
   this.firstName = firstName;
   this.birthYear = birthYear

   // Never do this
//    this.calcAge = function(){
//        console.log(2037-this.birthYear)
//    }

}


const braj = new Person('Braj',1998)
console.log(braj)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}


const robin = new Person('Robin',1997);

console.log(braj instanceof Person)


//  Prototypes


console.log(Person.prototype.constructor === Person,'Braj')

Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear)
}

console.log(Person.prototype)

braj.calcAge()
robin.calcAge()
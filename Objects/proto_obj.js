var Employee = {

    company:'xyz'

}

var emp1 = Object.create(Employee);
console.log(emp1);

delete emp1.company;
console.log(emp1);

console.log(emp1.company);



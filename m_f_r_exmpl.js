
const users = [
    {firstName:"Braj", lastName:"Kishor", age:26 },
    {firstName:"Robin", lastName:"Singh", age:75 },
    {firstName:"Ravi", lastName:"Mohan", age:50 },
    {firstName:"Shubham", lastName:"Mishra", age:26 },
];


//  Print fullname of each employee 


// const output = users.map(x=>x.firstName + " " + x.lastName);
// console.log(output)



//  {26:2, 75:1, 50:1}

const output = users.reduce(function(acc,curr){

    if(acc[curr.age])
    {
        acc[curr.age]++;
    }
    else
    {
        acc[curr.age] = 1;
    }
    return acc;

},{})

console.log(output);


//  print the first name of the user whose as <30

// const output = users.filter(x=>x.age<30).map(x=>x.firstName);

// const output = users.reduce(function(acc,curr){

//     if(curr.age < 26)
//     {
//         acc.push(curr.firstName)
//     }
//     return acc;
// },[])

// console.log(output)


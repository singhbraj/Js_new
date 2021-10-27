

// const numbers = [1,2,3];
// numbers[10] = 11;
// console.log(numbers)


// const arrTest = [10, 20, 30, 40, 50][1, 3];   
// console.log(arrTest);

// console.log([1, 2, 3] + [1, 3, 4]);

// let arr = [1,2,1,7,6,1];

// find the unique elements from there array

// let b = [];

// for(let i=0; i<arr.length; i++)
// {
//   if(b.indexOf(arr[i])===-1)
//   {
//     b.push(arr[i])
//   }
// }
// console.log(b)

// console.log(x);
// const x =5;

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a==b)
// console.log(a===b)
// console.log(b===c)

// 'use strict'
// let obj = {
//     firstName:"Braj",
//     age:23,
//     getName:function(){
//         console.log(`My name is ${this.firstName}`)
//         let self = this
//         function getAge(){
//           console.log(`My age is ${self.age}`)
//         }
//         getAge()
//     },
//    getAge:()=>{
//        console.log(this)
//     console.log(`My age is ${this.age}`)
//    }
// }
// obj.getName()

// let arr = [1,2,3];
// console.log(arr.toString())

// console.log(true+"Braj")
// console.log(true+1);

const profile = {
    name:"braj",
    getName:()=>{
        console.log(this.name);
    }
}
profile.getName();
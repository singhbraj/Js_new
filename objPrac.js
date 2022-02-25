// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
//  };

//  const keys  = Object.keys(student);
//  console.log(keys);

// delete student.rollno;
// console.log(student);


// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     }
//   ];

//   let car = {
//     "color": "red",
//     "type": "cabrio",
//     "registration": new Date('2016-05-02'),
//     "capacity": 2
//   } ;

//   cars.unshift(car);



//   let car1 = {
//     "color": "red",
//     "type": "cabrio",
//     "registration": new Date('2016-05-02'),
//     "capacity": 2
//    }

//    cars.push(car1);

// //   console.log(cars);

// let outCar = cars.find(car=>car.color==="red");
// console.log(outCar);



// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);
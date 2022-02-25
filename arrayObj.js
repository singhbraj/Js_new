var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr)
// console.log(eArr.next().value); // a
// console.log(eArr.next().value); // b
// console.log(eArr.next().value); // c
// console.log(eArr.next().value); // d
// console.log(eArr.next().value); // e

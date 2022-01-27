
let string = "Braj Kishor Singh";
// console.log(string);


let revStr = string.split(" ").map(word => word.split("").reverse().join("")).join(" ");
console.log(revStr);






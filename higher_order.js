

const radius = [2,4,6,8,10];

const area = function (radius)
{
    return Math.PI*radius*radius;
}

const circumference = function (radius) {
    return 2*Math.PI*radius
}

const diameter = function (radius) {
    return 2*radius;
}

// const Area = function (radius){
//     const output = [];
//     for(let i =0 ; i<radius.length; i++)
//     {
//         let res = Math.PI*radius[i]*radius[i];
//         output.push(res);
//     }
//     return output;
// }

Array.prototype.calculate=function(logic){
    const output = [];
    for(let i =0 ; i<this.length; i++)
    {
        let res = logic(this[i]);
        output.push(res);
    }
    return output;
}

// function circumference(radius){
//     const output = [];
//     for(let i =0 ; i<radius.length; i++)
//     {
//         let res = 2*Math.PI*radius[i];
//         output.push(res);
//     }
//     return output;
// }
// console.log(Area(radius))
console.log(radius.map(area))
console.log(radius.calculate(area))
// console.log(calculateArea(radius,area))
// console.log(calculateArea(radius,circumference))
// console.log(calculateArea(radius,diameter))
// console.log(diameter(radius))
// console.log(circumference(radius))
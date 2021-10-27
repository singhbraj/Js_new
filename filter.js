
const arr = [5,1,3,2,6];

// filter odd value


function isOdd(x)
{
    return x%2
}

const output = arr.filter(isOdd)
console.log(output);


const output = arr.filter(function isOdd(x)
{
    return x%2
})

console.log(output);

const output = arr.filter(x=>x%2)


console.log(output);

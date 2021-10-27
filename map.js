
const arr = [5,1,3,2,6];

// Map :- we use for transformation

// Double

// Triple

// Binay



function double(x){
    return x*2
}

function binary(x){
    return x.toString(2)
}

const output = arr.map(binary)
console.log(output);

const output = arr.map(function binary(x){
    return x.toString(2)
}
)

const output = arr.map( x  => x.toString(2))

console.log(output)
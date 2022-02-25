const array = [1,2,3,4,56,34,56];
array.forEach(e=>console.log(e));

// It expects a synchronous callback, it won't wait for promised to resolved

let ratings = [5, 4, 5]
let sum = 0

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
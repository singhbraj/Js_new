let arr = [[1, 2], [3, 4], [5, 6][(7, 8, 9)], [10, 11, 12, 13, 14, 15]];

const result = arr.reduce((curr, acc) => {
  if (Array.isArray(curr)) {
    acc = acc.concat(curr);
  } else acc.push(curr);

  return acc;
}, []);

console.log(result);

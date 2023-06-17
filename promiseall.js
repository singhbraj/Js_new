const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "rejected");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, "foo");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "promise4");
});
const promisesArray = [promise3, promise4, promise1];
function myPromiseAll(promisesArr) {
  const results = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    promisesArr.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
            console.log("__________res____________",res)
          results[index] = res;
          completed++;

          if (completed === promisesArr.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

const promiseAll = myPromiseAll(promisesArray);

promiseAll.then((result) => {
console.log(result);  // ['promise 1 resolved','promise 2 resolved',8]
});
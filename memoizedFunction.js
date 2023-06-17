function memoize(func) {
    const cache = {};

    return function (...args) { 
      const key = args[0]
     
      if (cache[key]) {
        return cache[key];
      }
  
      const result = func.apply(this, [key]);
      cache[key] = result;
  
      return result;
    };
  }
  
  function expensiveOperation(obj) {
    console.log("Performing expensive operation...");
    return obj;
  }
  
  const memoizedOperation = memoize(expensiveOperation);
  
  console.log(memoizedOperation({name:"braj", age:24}));  // Output: Performing expensive operation... 10
  console.log(memoizedOperation({name:"braj", age:24}));  // Output: 10 (Reads from cache instead of recomputing)
  
  
  
  
  
  
  
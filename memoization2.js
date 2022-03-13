

const add = (n) => (n+10);

console.log('Simple call', add(3));


//  a simple memoize function that takes in a function ans returns a memoized function


const memoize = (fn) => {

    let cache = {};

    return (...args) =>{

        let n =  args[0];
        
        if(n in cache){
            console.log('Fethng from cache');
            return cache[n];
        }
        else{
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }

    }
}


//  creating a memoized function for the 'add' pure function

const memoizeAdd = memoize(add);
console.log(memoizeAdd)
console.log(memoizeAdd(3))
console.log(memoizeAdd(3))
console.log(memoizeAdd(4))
console.log(memoizeAdd(4))
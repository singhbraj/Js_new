
function genericFunction(){
    const something = 'World'

    return function innerFunction(){
        console.log('Executing.....');
        return `Hello ${something}`;
    }

}

console.log(genericFunction()())
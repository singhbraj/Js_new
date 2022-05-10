const user = {
    name: 'braj'
    }
    const arrowFunction = function(){
    console.log(this.name,'Hello');
    }
    arrowFunction.bind(user)();    
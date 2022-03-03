const obj1 = {
    prop1:'initial state'
};

const obj2 = Object.freeze(obj1);
obj2.prop1 = 'new_data';
console.log(obj2.prop1);
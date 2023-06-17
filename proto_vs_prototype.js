// var cat = {breed: "Russian Blue"} // cat.__proto__ lists all its methods and cat.prototype returns undefined as expected
// var dog= {age: 7} // same for the dog variable
// // Now, let's see how we can get the cat object to access the properties of the dog object

// Object.setPrototypeOf(cat, dog) // allows the cat object to access the properties of the dog object

// // Even though we've used 'setPrototypeOf', the cat object still doesn't have a prototype property. It only has a reference to the dog object via __proto__:

// cat.hasOwnProperty('prototype') // returns false

// cat.age // returns 7






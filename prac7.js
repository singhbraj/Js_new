// console.log('name is ', name);
 
// var name;
 
// console.log('name is ', name);
 
// name = "Susan";
 
// console.log('name is ' ,name);


var a = 10;

function outerFunc(a) {
  function inner() {
    var b = 20;
    console.log(a + b);
  }

  return inner;
}

var func = outerFunc(a);

a = 30;

func();
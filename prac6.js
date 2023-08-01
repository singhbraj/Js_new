
var x = 21;

var fun = function(){
    // var x  x is undefine because this block has it's own x so it does not point lexical scope
    console.log(x);
    var x =20;
}

fun()


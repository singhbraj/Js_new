

String.prototype.isPallindrome = function(){

    let str = this.split('').reverse().join('');
    console.log(str)
    if(this===str)
    {
         console.log(str)
        return true;
    }
    else
    return false
}


let string1 = new String("ddadd");
let string2 = new String('brajkis');

console.log(typeof string1)

console.log(string1.isPallindrome())
console.log(string2.isPallindrome())

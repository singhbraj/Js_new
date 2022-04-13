

function sum(a,b){


    let result = ''
    let carrying = false

    

    while(a.length || b.length){

let num = parseInt(a.substring(a.length-1) || 0) + parseInt(b.substring(b.length-1)||0) + (+carrying);

carrying = (num>=10);
result=`${num.toString().split('')[1] || num}${result}`;
a=a.slice(0,-1);
b=b.slice(0,-1);

    }
 return carrying?`1${result}`:result;


}







console.log(sum('9999'+'999'));
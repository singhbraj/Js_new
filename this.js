"use strict";

console.log(this)

const calAge = function (birthYear){

    console.log(2037-birthYear);
    console.log(this);

}

calAge(1991)

const calAgeArrow = (birthYear)=>{

    console.log(2037-birthYear);
    console.log(this);

}

calAgeArrow(1991)


const jonas = {

    year:1991,
    calcAge:function(){
        console.log(this)
        console.log(2037-this.year)
    }
}

jonas.calcAge()



const braj = {
    year:2017,
}

braj.calcAge = jonas.calcAge;
braj.calcAge()
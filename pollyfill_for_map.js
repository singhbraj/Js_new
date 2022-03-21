const nums = [1,2,3,4];


// const multipleThree = nums.map((num,i,nums)=>num*3);


Array.prototype.myMap = function(cb){

    let tempArray = [];

    for(let i =0; i<this.length; i++){
        tempArray.push(cb(this[i],i,this))
    }

    return tempArray;


}

const multipleThree = nums.myMap((num,i,nums)=>num*3);



console.log(multipleThree);
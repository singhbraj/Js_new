const nums = [1,2,3,4];



Array.prototype.myFilter = function(cb){

    let tempArr = [];
    for(let i=0; i<this.length; i++){
      if(cb(this[i],i,this)) tempArr.push(this[i])
    }
    return tempArr;
}



const filterArr = nums.myFilter((num,i,nums)=>num>2);


console.log(filterArr)
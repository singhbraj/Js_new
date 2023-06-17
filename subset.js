var subsets = function(nums,depth=0, subset=[], result = []) {
    if(depth===nums.length){
        result.push(subset)
    }
    else{
        subsets(nums, depth+1, subset, result)
        subsets(nums, depth+1, [...subset, nums[depth]], result)
    }
    
    
    return result;
    
    };
    
    console.log(subsets([1,2]))
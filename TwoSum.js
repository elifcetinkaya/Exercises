var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                console.log([i,j])
                return [i,j];
            }
        }
    }
};

twoSum([3,2,4], 6);
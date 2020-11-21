/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hm = new Map();

    for(var i=0;i<nums.length;i++){
        let diff = target - nums[i];
        
        if(hm.has(diff)){
            return [i, hm.get(diff)];
        }else{
            hm.set(nums[i], i);
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9).toString());
console.log(twoSum([3,2,4], 6).toString());
console.log(twoSum([3,3], 6).toString());
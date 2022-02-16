/**
 * @param {number[]} nums
 * @return {number[][]} [ -2, 0, 0, 2, 2 ]
 */
 const threeSum = (nums) => {
    let [output,left,right] = [[],0,nums.length-1];
    if(nums.length < 3) return output;
    nums.sort((a,b) => a-b);
    
    for(let [index, number] of nums.entries()) {
        if(number > 0) return output;
        if(number === nums[index-1]) continue;
        left = index+1;
        right = nums.length-1;
        let temp = 0;

        while(left < right) {
            temp = number + nums[left] + nums[right];
            if(temp === 0) {
                output.push([number, nums[left], nums[right]]);
                left++; right--;
                while(left < right && nums[left] === nums[left-1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]) {
                    right--;
                }
            }
            else if(temp < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return output;
};

console.log(threeSum([-2,0,0,2,2]));
//After sorting input: [ -2, 0, 0, 2, 2 ]
//Output: [[-1,-1,2],[-1,0,1]]
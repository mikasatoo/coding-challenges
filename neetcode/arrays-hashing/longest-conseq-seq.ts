function longestConsecutive(nums: number[]): number {
    let result: number = 1;

    // Sort nums in ascending order
    nums.sort((a, b) => a - b);
    console.log(nums);

    // Loop through nums to check if the next num is consecutive
    for (let i = 1; i < nums.length; i++) {
        const currentNum: number = nums[i];
        const prevNum: number = nums[i - 1];
        
        if (currentNum == prevNum) {
            continue;
        } else if (currentNum == prevNum + 1) {
            result += 1;
        } else {
            return result;
        }
    }

    return result;
};

console.log('result', longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
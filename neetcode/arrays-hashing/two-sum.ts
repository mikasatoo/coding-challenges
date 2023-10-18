function twoSum(nums: number[], target: number): number[] {
    const twoIndices: number[] = [];
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum: number = nums[i];
        const matchingNum: number = target - currentNum;

        if (numsMap.has(matchingNum)) {
            const prevIndex = numsMap.get(matchingNum);
            twoIndices.push(prevIndex, i);
            return twoIndices;
        }

        numsMap.set(currentNum, i);
    }

    return twoIndices;
};

console.log('result: ', twoSum([2,7,11,15], 9));

// This solution cut my runtime down to 70 ms 
// (compared to 141 ms when I was using a nested for loop).
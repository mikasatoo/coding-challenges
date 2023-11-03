function longestConsecutive(nums: number[]): number {
    let result: number;
    // Check if nums is empty
    if (nums.length == 0) {
        result = 0;
        return result;
    } else {
        result = 1;
    }

    // Create an array to store each sequence length
    const seqLengths: number[] = [];

    // Create a set (to hold only unique values)
    const numsSet: Set<number> = new Set(nums);

    // Find min num in numsSet to use as the starting point
    const minNum: number = Math.min(...numsSet);
    
    // Check if each consecutive num exists in numsSet
    let currentNum: number = minNum;
    let currentSeqLength: number = 1;
    for (let i = 1; i < numsSet.size; i++) {
        if (!numsSet.has(currentNum)) {
            continue;
        } else if (numsSet.has(currentNum + 1)) {
            currentSeqLength += 1;
        } else {
            seqLengths.push(currentSeqLength);
            currentSeqLength = 1;
        }
        currentNum += 1;
    }
    seqLengths.push(currentSeqLength);

    // Set result as the max value in seqLengths
    result = Math.max(...seqLengths);
    return result;
};

console.log('result', longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));
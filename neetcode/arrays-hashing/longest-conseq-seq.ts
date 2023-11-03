function longestConsecutive(nums: number[]): number {
    // Create a variable to store the longest consec seq
    let longestSeq: number = 0;

    // Check if nums is empty
    if (nums.length == 0) {
        return longestSeq;
    }

    // Create a set (to hold only unique values)
    const numsSet: Set<number> = new Set(nums);

    // Loop through each num to get the consec seq length starting from each
    for (const num of numsSet) {
        if (numsSet.has(num - 1)) {
            continue;   // will count the length from the prev number instead
        } else {
            let length: number = 0;
            while (numsSet.has(num + length)) {
                length += 1;    // increment length each time while next num in seq exists
            }
            longestSeq = Math.max(longestSeq, length);
            console.log("num: " + num + ", longestSeq: " + longestSeq);
        }
    }

    return longestSeq;
};

console.log('result', longestConsecutive([100,4,200,1,3,2]));
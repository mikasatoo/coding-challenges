function topKFrequent(nums: number[], k: number): number[] {
    let result: number[];

    // If nums only has one element (and k isn't zero), the result will just be that element
    if (nums.length == 1 && k !== 0) {
        result = [nums[0]];
        return result;
    }

    // Create a new object to store the frequency of each element
    const frequencyMap: {
        [key: number]: number
    } = {};

    // Loop through each element to get the frequencies
    for (let i = 0; i < nums.length; i++) {
        const currentNum: number = nums[i];
        
        if (frequencyMap[currentNum]) {
            frequencyMap[currentNum] += 1;
        } else {
            frequencyMap[currentNum] = 1;
        };
    };

    // Sort the keys (elements) by value 
    const sortedElements = Object.keys(frequencyMap).sort((a, b) => {
        return frequencyMap[b] - frequencyMap[a];
    });

    // Return the k most frequent elements (and convert back to integers)
    result = sortedElements.slice(0, k).map((num) => {
        return parseInt(num);
    });

    return result;
};

console.log('result: ', topKFrequent([1,1,1,2,2,3], 2));
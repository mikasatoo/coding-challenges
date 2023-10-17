function containsDuplicate(nums: number[]): boolean {
    const uniqueNums: number[] = [];
    let result: boolean = false;

    nums.forEach((num: number) => {
        if (uniqueNums.includes(num)) {
            result = true;
        } else {
            uniqueNums.push(num);
        }
    });

    return result;
};

console.log('result', containsDuplicate([1,2,3,1]))
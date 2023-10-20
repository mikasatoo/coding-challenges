function productExceptSelf(nums: number[]): number[] {
    // Create a new object to store each productExceptSelf
    const products: {
        [key: number]: number
    } = {};

    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        const numsExceptSelf: number[] = nums.slice();  // copy nums array (so it isn't mutated)
        numsExceptSelf.splice(i, 1);    // remove self element

        products[i] = numsExceptSelf.reduce((a, b) => a * b, 1); // get the product of all elements
    };

    // Return the answer array with each productExceptSelf
    const answer: number[] = Object.values(products);

    return answer;
};

console.log('result', productExceptSelf([-1,1,0,-3,3]));
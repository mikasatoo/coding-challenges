function productExceptSelf(nums: number[]): number[] {
    // Create a new array to store each productExceptSelf
    const productsArr: number[] = [];

    // Set product to 1 initially
    let product: number = 1;

    // Loop through each element in nums array to get LHS product
    for (let i = 0; i < nums.length; i++) {
        productsArr[i] = product;
        product *= nums[i];
    };
    
    // Reset product to 1
    product = 1;

    // Loop through each element again to get RHS product
    for (let i = nums.length - 1; i >= 0; i--) {
        productsArr[i] *= product;
        product *= nums[i];
    }

    return productsArr;
};

console.log('result', productExceptSelf([-1,1,0,-3,3]));
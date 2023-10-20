function groupAnagrams(strs: string[]): string[][] {
    let result: string[][];

    // If strs only has one string, the result will just be that string (no anagrams)
    if (strs.length == 1) {
        result = [[strs[0]]];
        return result;
    }

    // Create a new object to group the anagrams together
    const anagramStrs: {
        [key: string]: string[]
    } = {};

    // Loop through each string in the strs array
    for (let i = 0; i < strs.length; i++) {
        // Sort the letters of each string in alphabetical order
        const originalStr: string = strs[i];
        const alphabeticalStr: string = originalStr.split("").sort().join("");

        // Check if alphabeticalStr exists as a key in the object yet
        // If it does, then add originalStr to the value array
        // Otherwise, create a new key and value array
        if (anagramStrs[alphabeticalStr]) {
            anagramStrs[alphabeticalStr].push(originalStr);
        } else {
            anagramStrs[alphabeticalStr] = [originalStr];
        }
    };

    // Group the originalStrs for each anagram together
    result = Object.values(anagramStrs);
    
    return result;
};

console.log('result: ', groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
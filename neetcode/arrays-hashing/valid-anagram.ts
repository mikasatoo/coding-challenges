function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sArr: string[] = s.split("");
    
    for (let i = 0; i < t.length; i++) {
        const letter: string = t.charAt(i);
        if (sArr.includes(letter)) {
            sArr.splice(sArr.indexOf(letter), 1);
        } else {
            return false;
        }
    }

    return true;
};

console.log('result: ', isAnagram("anagram", "nagaram"));
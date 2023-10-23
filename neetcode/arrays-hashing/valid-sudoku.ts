function isValidSudoku(board: string[][]): boolean {
    // Check that there are 9 columns (9 x 9 board)
    if (board.length != 9) return false;

    // Create new array to store each sub-box set
    const subBoxes: Set<number>[][] = [
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()]
    ]
    
    // Loop through each row / column
    for (let i = 0; i < board.length; i++) {
        // Check there are 9 rows (9 x 9 board)
        if (board[i].length != 9) return false;

        // Check each row, column, and sub-box contains digits 1 - 9 without repetition
        const numsUsedInRow: Set<number> = new Set();
        const numsUsedInCol: Set<number> = new Set();

        for (let j = 0; j < board.length; j++) {
            const rowEl: number = parseInt(board[i][j]);
            const isRepeatedInRow: Boolean = numsUsedInRow.has(rowEl);

            const colEl: number = parseInt(board[j][i]);
            const isRepeatedInCol: Boolean = numsUsedInCol.has(colEl);

            const subBoxIdx1: number = Math.floor(i / 3);
            const subBoxIdx2: number = Math.floor(j / 3);
            const isRepeatedInSubBox: Boolean = subBoxes[subBoxIdx1][subBoxIdx2].has(rowEl);
            
            if (!Number.isNaN(rowEl)) {  // skip empty elements (".")
                if (rowEl < 1 || rowEl > 9 || isRepeatedInRow || isRepeatedInSubBox) {
                    return false;
                } else {
                    numsUsedInRow.add(rowEl);
                    subBoxes[subBoxIdx1][subBoxIdx2].add(rowEl);
                }
            }

            if (!Number.isNaN(colEl)) {
                if (colEl < 1 || colEl > 9 || isRepeatedInCol) {
                    return false;
                } else {
                    numsUsedInCol.add(colEl);
                }
            }
        }
    }

    return true;
};

console.log('result: ', isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
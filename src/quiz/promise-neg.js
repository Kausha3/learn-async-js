function checkRowForNegative(row) {
    return new Promise((resolve, reject) => {
        // Check if the row contains a negative number
        const hasNegative = row.some(number => number < 0);
        resolve(hasNegative ? row : null);
    });
}

function logRowsWithNegatives(array2D) {
    // Create a promise for each row to check for negatives
    const promises = array2D.map(row => checkRowForNegative(row));

    // Wait for all promises to resolve
    Promise.all(promises).then(results => {
        results.forEach((row, index) => {
            if (row !== null) {
                // Log the row index and the row itself if it contains a negative number
                console.log(`Row ${index} contains a negative number:`, row);
            }
        });
    });
}


const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D);

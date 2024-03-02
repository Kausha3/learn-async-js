function sumArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

function sum2DArrayConcurrently(array2D) {
    const rowSums = array2D.map(row => {
        return new Promise(resolve => {
            setTimeout(() => {
                const rowSum = sumArray(row);
                resolve(rowSum);
            }, 0);
        });
    });

    // Use Promise.all to wait for all row sums to be computed
    return Promise.all(rowSums)
        .then(sums => {
            // Once all Promises resolve, sums will be an array of the sum of each row
            // Sum up these values to get the total
            return sumArray(sums);
        });
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

sum2DArrayConcurrently(array2D)
    .then(totalSum => console.log(`Total Sum: ${totalSum}`))
    .catch(error => console.error(`Error: ${error}`));

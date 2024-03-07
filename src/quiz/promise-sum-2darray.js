const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Simulates an asynchronous operation to sum the elements of an array
function asyncSum(arr) {
    return new Promise((resolve) => {
        const sum = arr.reduce((total, current) => total + current, 0);
        setTimeout(() => resolve(sum), 1000); // Simulating async operation, like a database call
    });
}

// Asynchronously sums each sub-array in a 2D array
async function sum2dArray(arr2d) {
    let result = [];
    for (const arr of arr2d) {
        const sum = await asyncSum(arr); // Wait for the sum of each sub-array
        result.push(sum); // Add the result to the array
    }
    return result; // Return the complete array of sums
}

sum2dArray(arr2d)
    .then(result => console.log(result)) // Will output: [6, 15, 24]
    .catch(err => console.error(err)); // Error handling

function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArray(array2D)
    .then(sum => console.log(`Sum: ${sum}`)) // Logs the sum when the promise resolves
    .catch(error => console.error(`Error: ${error}`)); // Logs the error when the promise is rejected

sum2DArray('array2D')
    .then(sum => console.log(`Sum: ${sum}`)) // This won't be called due to input type error
    .catch(error => console.error(`Error: ${error}`)); // Logs the error


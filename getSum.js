function printSum(...numbers) {
    let totalSum = 0;
    for (const num of numbers) {
        totalSum += num;
    }

    console.log(totalSum);
}

printSum(5,5,6);
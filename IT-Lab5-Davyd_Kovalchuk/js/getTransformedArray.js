function getTransformedArray(arr, transformFunction) {
    const resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        const transformedElement = transformFunction(arr[i]);
        resultArray.push(transformedElement);
    }

    return resultArray;
}
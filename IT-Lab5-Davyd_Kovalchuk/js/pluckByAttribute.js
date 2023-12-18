function pluckByAttribute(arrayOfObjects, attributeName) {
    const resultArray = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        const obj = arrayOfObjects[i];
        if (obj.hasOwnProperty(attributeName)) {
            resultArray.push(obj[attributeName]);
        }
    }

    return resultArray;
}

console.log(pluckByAttribute([{name: 'misha'}, {age: 21}], 'age'));
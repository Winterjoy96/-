function decypherPhrase(charactersMap, encodedString) {
    const reversedMap = {};
    for (const key in charactersMap) {
        if (charactersMap.hasOwnProperty(key)) {
            reversedMap[charactersMap[key]] = key;
        }
    }

    let resultString = '';

    for (let i = 0; i < encodedString.length; i++) {
        const char = encodedString[i];
        if (reversedMap.hasOwnProperty(char)) {
            resultString += reversedMap[char];
        } else {
            resultString += char;
        }
    }

    return resultString;
}

console.log(decypherPhrase({a: '1', c: '2', t: '3'}, 'ki33y 213'));
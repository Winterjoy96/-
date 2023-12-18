function cypherPhrase(charactersMap, inputString) {
    let resultString = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (charactersMap.hasOwnProperty(char)) {
            resultString += charactersMap[char];
        } else {
            resultString += char;
        }
    }

    return resultString;
}

console.log(cypherPhrase({a: '1', c: '2', t: '3'}, 'kitty cat'));
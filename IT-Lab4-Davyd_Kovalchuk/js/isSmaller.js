const readline = require('readline');

function isSmaller(a, b) {
    return a < b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        const result = isSmaller(Number(firstNumber), Number(secondNumber));
        console.log(` ${result}`);
        rl.close();
    });
});

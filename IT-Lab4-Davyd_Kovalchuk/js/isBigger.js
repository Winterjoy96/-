const readline = require('readline');

function isBigger(a, b) {
    return a > b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        const result = isBigger(Number(firstNumber), Number(secondNumber));
        console.log(` ${result}`);
        rl.close();
    });
});

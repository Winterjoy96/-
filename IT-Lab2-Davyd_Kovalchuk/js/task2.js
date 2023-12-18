const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введіть кількість євро: ', (euroInput) => {
    const euroAmount = parseFloat(euroInput);
    const euroToUAH = 80;

    rl.question('Введіть кількість доларів: ', (dollarInput) => {
        const dollarAmount = parseFloat(dollarInput);
        const dollarToUAH = 40;
        const euroToUAHAmount = euroAmount * euroToUAH;
        const dollarToUAHAmount = dollarAmount * dollarToUAH;
        const dollarToEuroAmount = dollarToUAHAmount / euroToUAH;

        console.log(
            `${dollarAmount} доларів дорівнює ${dollarToUAHAmount} гривень.\n` +
                `${euroAmount} євро дорівнює ${euroToUAHAmount} гривень.\n` +
                `${dollarAmount} доларів дорівнює ${dollarToEuroAmount} євро.`
        );

        rl.close();
    });
});

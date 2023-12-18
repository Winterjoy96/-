const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getMin(arguments) {
    // Перевіряємо, чи масив не пустий
    if (arguments.length === 0) {
        return undefined;
    }

    let min = arguments[0];

    // Перебираємо елементи масиву для пошуку мінімального
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}


rl.question('Введіть числа через кому: ', (answer) => {
    const numbers = answer.split(',').map(Number); // Конвертуємо строку в масив чисел
    const minNumber = getMin(numbers); // Знаходимо мінімальне число
    console.log(`Мінімальне число: ${minNumber}`); 
    rl.close(); 
});

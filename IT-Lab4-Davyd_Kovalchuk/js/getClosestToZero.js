
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функція для пошуку найближчого числа до нуля
function getClosestToZero() {
    // Перевірка, чи передано аргументи
    if (arguments.length === 0) {
        return undefined;
    }

    // Ініціалізація змінних для зберігання найближчого числа і його абсолютного значення
    let closest = Math.abs(arguments[0]);
    let closestNumbers = [arguments[0]];

    // Проходження по всім аргументам
    for (let i = 1; i < arguments.length; i++) {
        let currentAbs = Math.abs(arguments[i]);

        // Оновлення найближчого числа, якщо поточне ближче до нуля
        if (currentAbs < closest) {
            closest = currentAbs;
            closestNumbers = [arguments[i]];
        } else if (currentAbs === closest) {
            // Додавання числа до списку, якщо воно еквівалентно найближчому
            closestNumbers.push(arguments[i]);
        }
    }

    return closestNumbers;
}

// Зчитування вводу з консолі
rl.question('Введіть числа через кому: ', (answer) => {
    // Перетворення введених даних у масив чисел
    const numbers = answer.split(',').map(Number);
    // Виклик функції і виведення результату
    console.log(getClosestToZero(...numbers));
    // Закриття інтерфейсу readline
    rl.close();
});

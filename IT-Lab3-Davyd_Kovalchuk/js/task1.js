
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var sh = '#'; 
var sp = ' '; 
var row = 1;  // Лічильник рядків


rl.question('Натисніть Enter, щоб вивести шахову дошку\n', (answer) => {
    // Цикл для виведення 8 рядків шахової дошки
    while (row <= 8) {
        var line = ''; // Початкове значення для кожного рядка

        // Якщо рядок парний, додаємо спочатку пробіл
        if (row % 2 === 0) {
            line += sp;
        }

        // Додаємо символи до рядка
        line += sh + sp + sh + sp + sh + sp + sh;

        // Виведення рядка в консоль
        console.log(line);
        row++; // Збільшуємо лічильник рядків
    }

    // Закриття інтерфейсу readline
    rl.close();
});

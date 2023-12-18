const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let totalWin = 0; // Загальний виграш користувача

// Функція для початку гри
function startGame() {
    // Запит на початок гри
    rl.question('Чи бажаєте почати гру? (так/ні): ', function (answer) {
        if (answer.toLowerCase() !== 'так') {
            console.log('Сьогодні ви не виграли мільйон, а могли');
            rl.close();
            return;
        }

        let secretNumber = Math.floor(Math.random() * 6); // Визначення секретного числа
        console.log(secretNumber); // Виведення секретного числа для налагодження
        let attempts = 3; // Встановлення кількості спроб
        let currentWin = 0; // Виграш за поточну гру

        // Функція для здійснення спроби
        function makeGuess() {
            if (attempts > 0) {
                rl.question('Введіть число від 0 до 5: ', function (guess) {
                    const userGuess = parseInt(guess);
                    if (userGuess === secretNumber) {
                        // Логіка виграшу
                        switch (attempts) {
                            case 3:
                                currentWin = 10;
                                break;
                            case 2:
                                currentWin = 5;
                                break;
                            case 1:
                                currentWin = 2;
                                break;
                        }

                        totalWin += currentWin; // Додавання до загального виграшу
                        console.log(`Ви вгадали! Ваш виграш - ${currentWin}$`);
                        askToContinue(); // Запит на продовження гри
                    } else {
                        // Якщо число не вгадано
                        attempts--;
                        if (attempts === 0) {
                            console.log('Ваш виграш - 0$');
                            askToContinue(); // Запит на продовження гри
                        } else {
                            console.log(
                                `Неправильно! У вас залишилося ${attempts} спроб.`
                            );
                            makeGuess(); // Нова спроба
                        }
                    }
                });
            } else {
                console.log(
                    `Дякуємо за гру, ваш загальний виграш становить ${totalWin}$`
                );
                askToContinue(); // Запит на продовження гри
            }
        }

        makeGuess(); // Початок процесу вгадування
    });
}

function askToContinue() {
    rl.question('Чи бажаєте продовжити гру? (так/ні): ', function (answer) {
        if (answer.toLowerCase() === 'так') {
            startGame();
        } else {
            console.log(
                `Дякуємо за гру, ваш загальний виграш становить ${totalWin}$`
            );
            rl.close();
        }
    });
}

startGame();

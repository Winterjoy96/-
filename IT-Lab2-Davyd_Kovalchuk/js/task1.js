const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введіть коефіцієнт a: ', (a) => {
    rl.question('Введіть коефіцієнт b: ', (b) => {
        rl.question('Введіть коефіцієнт c: ', (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            const discriminant = b * b - 4 * a * c;

            if (discriminant > 0) {
                const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                console.log(
                    `Рівняння ${a}x^2 + ${b}x + ${c} = 0 має 2 розв'язки: x1 = ${x1}, x2 = ${x2}`
                );
                console.log(a * x1 * x1 + b * x1 + c);
                console.log(a * x2 * x2 + b * x2 + c);
            } else if (discriminant === 0) {
                const x = -b / (2 * a);
                console.log(
                    `Рівняння ${a}x^2 + ${b}x + ${c} = 0 має 1 розв'язок: x = ${x}`
                );
            } else {
                console.log(
                    `Рівняння ${a}x^2 + ${b}x + ${c} = 0 не має розв'язків у дійсних числах.`
                );
            }

            rl.close();
        });
    });
});

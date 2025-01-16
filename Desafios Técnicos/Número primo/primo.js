const readline = require('readline');

// Configura o input pelo terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (input) => {
    let nprimo = parseInt(input);

    // Verifica se a entrada é válida
    if (isNaN(nprimo) || nprimo < 2) {
        console.log("Digite um número inteiro maior ou igual a 2.");
    } else {
        let ehPrimo = true;

        // Verifica se o número tem divisores além de 1 e ele mesmo
        for (let i = 2; i <= Math.sqrt(nprimo); i++) {
            if (nprimo % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            console.log(`${nprimo} é um número primo.`);
        } else {
            console.log(`${nprimo} não é um número primo.`);
        }
    }

    rl.close(); // Encerra o input
});
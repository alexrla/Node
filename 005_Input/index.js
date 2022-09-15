// Importando um módulo e executando uma função
const readline = require("readline").createInterface({
    // Configurações para obter a entrada e a saída
    input: process.stdin,
    output: process.stdout
});

console.log("Digite o seu nome para entrar:");
readline.question("Nome: ", (nome) => {

    console.log(`Bem-vindo, ${nome}!`);

    readline.close();

})

/*
    - O argumento nome, da função, armazena a entrada passada
    pelo usuário;

    - O readline.close(), encerra a execução;
*/
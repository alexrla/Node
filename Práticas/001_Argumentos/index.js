// Prática com argumentos
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

// Importando o módulo interno (operacoes.js)
const soma = require("./operacoes").soma;
const subtracao = require("./operacoes").subtracao;
const multiplicacao = require("./operacoes").multiplicacao;
const divisao = require("./operacoes").divisao;

const a = Number(args["a"]);
const b = Number(args["b"]);

soma(a, b);
subtracao(a, b);
multiplicacao(a, b);
divisao(a, b);

/*
    - Utilizamos o pacote minimist para trabalhar 
    com argumentos;
    
    - Para rodar o programa, colocamos dois traços/hífens, 
    antecendendo os argumentos. Ex.:

        ->  node index.js --a=1 --b=2
*/
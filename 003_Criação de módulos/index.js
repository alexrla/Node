// Importando módulo interno
const op = require("./operacoes");

// Guardando a função em uma variável
const soma = op.soma;
const subtracao = op.subtracao;
const multiplicacao = op.multiplicacao;
const divisao = op.divisao;

// Utilizando as funções
soma(2, 4);
subtracao(10, 5);
multiplicacao(7, 8);
divisao(9, 3);

/*
    - Ao importar o módulo, não é necessário informar a extensão 
    do arquivo;
*/
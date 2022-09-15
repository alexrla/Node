// Exportando módulo
module.exports = {
    soma(a, b) {
        console.log(a + b);
    },
    subtracao(a, b) {
        console.log(a - b);
    },
    multiplicacao(a, b) {
        console.log(a * b);
    },
    divisao(a, b) {
        console.log(a / b);
    }
};

/*
    - Não é necessário colocar a palavra reservada function;

    - Ao exportarmos várias "funções", utilizamos a vírgular para
    separá-las;
*/
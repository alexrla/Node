/*
    Argumentos:
        - nome
        - sobrenome
        - idade
*/

// node index.js nome=Alex sobrenome=Arruda idade=21
console.log(process.argv[2]); // nome=Alex
console.log(process.argv[3]); // sobrenome=Arruda
console.log(process.argv[4]); // idade=21

const args= process.argv.slice(2);
console.log(args); // [ 'nome=Alex', 'sobrenome=Arruda', 'idade=21' ]

const nome = args[0].split("=")[1]; // Alex
const sobrenome = args[1].split("=")[1]; // Arruda
const idade = args[2].split("=")[1]; // 21

console.log(`Meu nome é ${nome} ${sobrenome}.`);
console.log(`Eu tenho ${idade} anos de idade!`);
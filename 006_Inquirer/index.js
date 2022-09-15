import inquirer from 'inquirer';
import chalk from 'chalk';

let somatórioNotas = 0;

console.log("Informe suas notas.");

// Fazendo a pergunta
inquirer.prompt([
    {
        name: "pergunta1", 
        message: "Informe a nota do primeiro bimestre: "
    },
    {
        name: "pergunta2", 
        message: "Informe a nota do segunda bimestre: "
    },
    {
        name: "pergunta3", 
        message: "Informe a nota do terceiro bimestre: "
    },
    {
        name: "pergunta4", 
        message: "Informe a nota do quarto bimestre: "
    }
]).then((perguntas) => {

    // Pegando as respostas
    // console.log(perguntas);

    const nota1 = Number(perguntas.pergunta1);
    const nota2 = Number(perguntas.pergunta2);
    const nota3 = Number(perguntas.pergunta3);
    const nota4 = Number(perguntas.pergunta4);

    somatórioNotas = nota1 + nota2 + nota3 + nota4;

    const media = somatórioNotas / 4;

    if(media >= 7)  console.log(chalk.green("Você foi aprovado!"));
    else if(media >= 5 && media < 7) console.log(chalk.white("Você ficou de recuperação!"));
    else console.log(chalk.red("Você reprovou!"));

}).catch(error => console.log(error));





/*
    - Podemos fazer mais de uma pergunta (um array de objetos);

    - A pergunta deve ter um nome e uma mensagem (a pergunta em si);

    - A partir da versão 9, não podemos mais utilizar a sintaxe 
    commonjs: require("inquirer");
*/
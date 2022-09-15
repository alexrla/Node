import inquirer from "inquirer";
import chalk from "chalk";

inquirer.prompt([
    {
        name: "nome",
        message: "Informe o seu nome: "
    },
    {
        name: "idade",
        message: "Informe a sua idade"
    }
]).then((response) => {

    if(!response.nome || !response.idade)   {

        throw new Error("O nome e a idade são obrigatórios!");

    }

    const nome = response.nome;
    const idade = response.idade;

    console.log(chalk.bgYellow.black(`Ǹome: ${nome}`));
    console.log(chalk.bgYellow.black(`Idade: ${idade}`));

}).catch((error) => {
    console.log(error);
});
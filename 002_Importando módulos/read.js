// Importando o módulo file system
const fs = require("fs");

// Lendo o arquivo criado
fs.readFile("arquivo.txt", "utf8", (error, data) => {

    if(error)   {

        console.log(error);

    } else {

        console.log(data);

    }

});

/*
    - Por padrão, nomeamos a variável de acordo com o nome do módulo;

    - fs.readFile("nome_do_arquivo.txt", "encode_do_arquivo", função_anônima());

    - Por padrão, todos os métodos do módulo fs, são assíncronos. Adicionando
    o Sync ao nome do método, fazemos com que eles rodem de forma síncrona:
*/
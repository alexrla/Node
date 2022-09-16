const fs = require("fs");

fs.rename("arquivo.txt", "novoArquivo.txt", (error) => {

    if(error)   {

        console.log(error);

    } else {
        
        console.log("Arquivo renomeado com sucesso!");

    }

});


/*
    - rename: método utilizado para renomear arquivos (o arquivo deve estar criado);

    - Arquivo e o novo nome, são passados como parâmetros;

    - E através de uma callback, verificamos a existência de erros;
*/
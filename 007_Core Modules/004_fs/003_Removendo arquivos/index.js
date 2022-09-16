const fs = require("fs");

fs.unlink("arquivo.txt", (error) => {

    if(error)   {

        console.log(error);

    } else {
        
        console.log("Arquivo removido com sucesso!");

    }

});

/*
    - unlink: método utilizado para remover arquivos;

    - Arquivo passado como parâmetro;

    - A partir de uma callback, verificamos a existência de erros;
*/
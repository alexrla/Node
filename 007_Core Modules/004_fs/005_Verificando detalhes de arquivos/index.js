const fs = require("fs");

fs.stat("arquivo.txt", (error, status) => {
    if(error) {

        console.log(error);

        return;

    } else {

        console.log(status.isFile());
        console.log(status.isDirectory());
        console.log(status.isSymbolicLink());
        console.log(status.ctime);
        console.log(status.size);

    }
});

/*
    - stat: método utilizado para conhecermos mais detalhes,
    a respeito de um arquivo (tamanho, data de criação, etc.);
*/
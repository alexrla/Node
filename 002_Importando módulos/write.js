// Importando o módulo file system
const fs = require("fs");

// Escrevendo em um arquivo (se ele não existir, será criado)
fs.writeFileSync("arquivo.txt", "Testando!");

/*
    - fs.writeFileSync("nome_do_arquivo.txt", "Conteúdo...");
*/
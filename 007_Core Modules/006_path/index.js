const path = require("path");

const customPath = "/relatorios/alex_a/relatorio.pdf";

// Nome do diretório
console.log(path.dirname(customPath));

// Nome do arquivo
console.log(path.basename(customPath));

// Extensão
console.log(path.extname(customPath));

// Path absoluto
console.log(path.resolve("./teste.txt"));

// Formar path
const midFolder = "relatorios";
const fileName = "arquivo.txt";

// Argumentos que vão no caminho
const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);

/*
    - resolve: nos dá o path completo, até o arquivo alvo;

    - join: nos permite a formação de um path dinâmico, com
    variáveis e valores fixos;
*/
const http = require("http");

// Porta
const port = 3000;

// Criando o servidor (primeiro servidor)
/*
    const server = http.createServer((req, res) => {

        res.write("Hello World!");

        res.end();

    });
*/

// Retornando HTML
const server = http.createServer((req, res) => {

    // Acesso com sucesso (podemos adicionar um status code)
    res.statusCode = 200;

    // Programa apto a enviar HTML (mudamos os headers para text/html)
    res.setHeader("Contenty-Type", "text/html");

    // HTML retornando pelo método end()
    res.end("<h1>Primeiro server com HTML!</h1>")

});

// Escutando a porta
server.listen(port, () => {

    console.log(`Servidor rodando na porta: ${port}`);

});

/*
    - createServer: método utilizado para criação de servidor;

    - listen: método utilizado para determinar a porta;

    - req: request;

    - res: response;

    - Ctrl + C: utilizado para encerrar o serviço;
*/
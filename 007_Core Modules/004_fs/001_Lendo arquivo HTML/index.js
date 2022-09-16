const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {

    require("fs").readFile("./index.html", (error, data) => {

        // Status code e content-type
        res.writeHead(200, {"Content-Type": "text/html"});

        // Renderizando o HTML
        res.write(data);

        // Dando fim a requisição
        return res.end();
        
    });

});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
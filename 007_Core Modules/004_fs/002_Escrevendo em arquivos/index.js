const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

// writeFile
/*
    const server = http.createServer((req, res) => {

        const urlInfo = url.parse(req.url, true);
        const name = urlInfo.query.name;

        if(!name) {

            fs.readFile("./index.html", (error, data) => {

                res.writeHead(200, {"Content-Type": "text/html"});
        
                res.write(data);
        
                return res.end();
                
            });

        } else {


            fs.writeFile("arquivo.txt", name, (error, data) => {

                // Quando o usuário escrever o nome dele no arquivo,
                // ele será redirecionado para barra, sem nome
                res.writeHead(302, {
                    Location: "/"
                });

                return res.end();

            });

        }

    });
*/

// appendFile
const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name) {

        fs.readFile("./index.html", (error, data) => {

            res.writeHead(200, {"Content-Type": "text/html"});
    
            res.write(data);
    
            return res.end();
            
        });

    } else {

        // Garantir que pelo menos uma quebra de linha seja feita
        const nameNewLine = name + ",\r\n"

        fs.appendFile("arquivo.txt", nameNewLine, (error, data) => {

            res.writeHead(302, {
                Location: "/"
            });

            return res.end();

        });

    }

});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

/*
    - writeFile: utilizado para criar e escrever em arquivos;
    OBS.: O método writeFile substitui tudo o que tem no arquivo, pelo
    que acabamos de escrever;

    - appendFile: mesma utilização do método writeFile, porém, nos possibilita
    unir conteúdos;
*/
const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {

    const queryURL = url.parse(req.url, true);

    const filename = queryURL.pathname.substring(1);

    if(filename.includes("html")) {
        if(fs.existsSync(filename)) {

            fs.readFile(filename, (error, data) => {

                res.writeHead(200, {"Content-Type": "text/html"});

                res.write(data);

                return res.end();

            });

        } else {

            fs.readFile("./pages/404.html", (error, data) => {

                res.writeHead(404, {"Content-Type": "text/html"});

                res.write(data);

                return res.end();

            });

        }
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
import express from "express";
import exphbs from "express-handlebars";
import conn from "./db/conn.js"; 

// Não precisamos utilizar o model para a tabela ser criada
import User from "./models/User.js";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(

    express.urlencoded({

        extended: true

    })

);

app.use(express.json());

app.get("/", (req, res) => {

    res.render("home");

});

// Criando a tabela quando necessário
// A aplicação só funcionará, quando as tabelas necessárias forem criadas
conn.sync().then(() => {

    app.listen(3000, console.log("App funcionando!"));

}).catch((error) => console.log(error));


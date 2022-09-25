import express from "express";
import exphbs from "express-handlebars";

// Importando o módulo mysql
import mysql from "mysql";

// Utilizando dotenv no projeto
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("home");

});

// Criando variável de conexão
const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

// Estabelecendo a conexão
conn.connect((error) => {

    if(error)  {
        
        console.log(error);
    
    } else {

        // Para funcionar, o database tem de estar criado
        console.log("Conexão com o MySQL estabelecida com sucesso!");

        app.listen(3000, console.log("App funcionando!"));

    }

});


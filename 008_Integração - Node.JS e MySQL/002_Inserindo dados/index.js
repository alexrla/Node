import express from "express";
import exphbs from "express-handlebars";
import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();

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

// Rota de inserção de livros
app.post("/books/insertbook", (req, res) => {

    const title = req.body.title;
    const pagesqty = req.body.pagesqty;

    const insertOperation = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`;

    // Executando a query
    conn.query(insertOperation,(error) => {

        if(error) {

            console.log(error);

        } else {

            // Redirecionando para a home
            res.redirect("/");

        }

    });

});

const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

conn.connect((error) => {

    if(error)  {
        
        console.log(error);
    
    } else {

        console.log("Conexão com o MySQL estabelecida com sucesso!");

        app.listen(3000, console.log("App funcionando!"));

    }

});


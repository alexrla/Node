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

app.get("/books/:id", (req, res) => {

    const id = req.params.id;

    const rescueOperation = `SELECT * FROM books WHERE idbooks = ${id}`;

    conn.query(rescueOperation, (error, data) => {

        if(error) {

            console.log(error);

            return;

        }

        /*
            - O WHERE traz uma série de registros;

            - Por isso utilizamos o índice 0, para pegar o 
            primeiro resgistro;
        */

        const book = data[0];

        // console.log(book);

        res.render("book", { book });

    })

});

app.get("/books", (req, res) => {

    const rescueOperation = "SELECT * FROM books";

    conn.query(rescueOperation, (error, data) => {

        if(error) {

            console.log(error);

            return;
        
        } 


        const books = data;

        res.render("books", { books });

    });

});

app.get("/", (req, res) => {

    res.render("home");

});

app.post("/books/insertbook", (req, res) => {

    const title = req.body.title;
    const pagesqty = req.body.pagesqty;

    const insertOperation = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`;

    conn.query(insertOperation,(error) => {

        if(error) {

            console.log(error);

        } else {

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
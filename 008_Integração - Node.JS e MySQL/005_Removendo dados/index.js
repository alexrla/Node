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

app.get("/books/edit/:id", (req, res) => {

    const id = req.params.id;

    const editOperation = `SELECT * FROM books WHERE idbooks = ${id}`

    conn.query(editOperation, (error, data) => {

        if(error) {

            console.log(error);

            return;

        }

        const book = data[0];

        res.render("editbook", { book })

    });

});

app.get("/books/:id", (req, res) => {

    const id = req.params.id;

    const rescueOperation = `SELECT * FROM books WHERE idbooks = ${id}`;

    conn.query(rescueOperation, (error, data) => {

        if(error) {

            console.log(error);

            return;

        }

        const book = data[0];

        res.render("book", { book });

    });

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

app.post("/books/remove/:id", (req, res) => {

    const id = req.params.id;

    const removeOperation = `DELETE FROM books WHERE idbooks = ${id}`;

    conn.query(removeOperation, (error) => {

        if(error) {

            console.log(error);

            return

        }

        res.redirect("/books");

    });

});

app.post("/books/updatebook", (req, res) => {

    // console.log(req.body);

    const id = req.body.id;
    const title = req.body.title;
    const pagesqty = req.body.pagesqty;

    const editOperation = `UPDATE books SET title = '${title}', pagesqty = '${pagesqty}' WHERE idbooks = ${id}`;

    conn.query(editOperation, (error) => {

        if(error) {

            console.log(error);

            return;

        }

        res.redirect("/books");

    });

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
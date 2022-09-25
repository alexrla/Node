import express from "express";
import exphbs from "express-handlebars";
import pool from "./db/conn.js";  

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

    const editOperation = `SELECT * FROM books WHERE ?? = ?`
    const data = ["idbooks", id];

    pool.query(editOperation, data, (error, data) => {

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

    const rescueOperation = `SELECT * FROM books WHERE ?? = ?`;
    const data = ["idbooks", id];

    pool.query(rescueOperation, data, (error, data) => {

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

    pool.query(rescueOperation, (error, data) => {

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

    const removeOperation = `DELETE FROM books WHERE ?? = ?`;
    const data = ["idbooks", id];

    pool.query(removeOperation, data, (error) => {

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

    const editOperation = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ["title", title, "pagesqty", pagesqty, "idbooks", id];

    pool.query(editOperation, data, (error) => {

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

    // Maneiras de segurança: ?? (colunas) e ? (valores)
    const insertOperation = `INSERT INTO books (??, ??) VALUES (?, ?)`;

    // O que vai substituir as interrogações (na ordem)
    const data = ['title', 'pagesqty', title, pagesqty];

    pool.query(insertOperation, data, (error) => {

        if(error) {

            console.log(error);

        } else {

            res.redirect("/");

        }

    });

});

/*
    const pool = mysql.createpoolection({
        host: "localhost",
        user: "root",
        password: "alex_2001",
        database: "nodemysql"
    });

    pool.poolect((error) => {

        if(error)  {
            
            console.log(error);
        
        } else {

            console.log("Conexão com o MySQL estabelecida com sucesso!");

            app.listen(3000, console.log("App funcionando!"));

        }

    });
*/

app.listen(3000, console.log("App funcionando!"));
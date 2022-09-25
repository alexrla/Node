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

app.get("/users/create", (req, res) => {

    res.render("adduser");

});

app.get("/", (req, res) => {

    res.render("home");

});

app.post("/users/create", async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    // console.log(req.body);

    // Se o checkbox vier marcado, o valor retornado é "on";
    // Se vier desmarcado, não vem nada (o que é considerado false);
    if(newsletter === "on") {

        newsletter = true;

    } else {

        newsletter = false;

    }

    // Criando o usuário
    await User.create({name, occupation, newsletter});

    res.redirect("/")

});

conn.sync().then(() => {

    app.listen(3000, console.log("App funcionando!"));

}).catch((error) => console.log(error));


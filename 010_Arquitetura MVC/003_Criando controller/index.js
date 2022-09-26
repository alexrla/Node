import express from "express";
import exphbs from "express-handlebars";

import conn from "./db/conn.js";

// Models
import Task from "./models/Task.js";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(

    express.urlencoded({

        extended: true

    })

);

app.use(express.json());

app.use(express.static("public"));

conn.sync().then(() => {

    app.listen(3000, console.log("App funcionando!"));

}).catch((error) => console.log(error));
import express from "express";
import exphbs from "express-handlebars";
import conn from "./db/conn.js"; 

import User from "./models/User.js";
import Address from "./models/Address.js";

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

app.get("/", async (req, res) => {

    const users = await User.findAll({raw: true});

    // console.log(users);

    res.render("home", { users });

});

app.post("/users/delete/:id", async (req, res) => {

    const id = req.params.id;

    await User.destroy({ where: {id: id} });

    res.redirect("/");

});

app.get("/users/edit/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const user = await User.findOne({ include: Address, where: {id: id} });

        res.render("useredit", { user: user.get({ plain: true }) });
        
    } catch (error) {
        
        console.log(error);
    }

});

app.post("/users/update", async(req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if(newsletter === "on") {

        newsletter = true;

    } else {

        newsletter = false;

    } 

    const userData = {
        id,
        name,
        occupation,
        newsletter
    };

    await User.update(userData, { where: { id: id } });

    res.redirect("/"); 

});

app.get("/users/create", (req, res) => {

    res.render("adduser");

});

app.get("/users/:id", async (req, res) => {

    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: {id: id} });

    res.render("userview", { user });

});

app.post("/users/create", async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    // console.log(req.body);

    if(newsletter === "on") {

        newsletter = true;

    } else {

        newsletter = false;

    }

    await User.create({name, occupation, newsletter});

    res.redirect("/")

});

app.post("/address/create", async (req, res) => {

    const UserId = req.body.UserId;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;

    const addressUser = {
        UserId,
        street,
        number,
        city
    };

    await Address.create(addressUser);

    res.redirect(`/users/edit/${UserId}`);

});

app.post("/address/delete", async (req, res) => {

    const UserId = req.body.UserId;
    const id = req.body.id;

    console.log(req.body);

    await Address.destroy({
        where: { id: id }
    });
    
    res.redirect(`/users/edit/${UserId}`);

});

conn.sync( ).then(() => {

    app.listen(3000, console.log("App funcionando!"));

}).catch((error) => console.log(error));

require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
//console.log(__dirname);

const static_path = path.join(__dirname, "../public");
//console.log(static_path);

const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
//set the view engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

//template engine route
app.get("/", (req, res) => {
    res.render("index");

});

app.get("/about", (req, res) => {
    res.status(200).render("about");

});

app.get("/contact", (req, res) => {
    res.status(200).render("contact");

});

app.get("/about/*", (req, res) => {
    res.render("404", {errorcomment: "About page is not found."});

});

app.get("/contact/*", (req, res) => {
    res.render("404", {errorcomment: "Contact page is not found."});

});
// app.get("/",(req, res)=>{
//     res.status(200).write("<h1> This is homepage. </h1>");
//     res.send();
// })
app.listen(port, () => {
    console.log(`listen the port ${port}`);
})
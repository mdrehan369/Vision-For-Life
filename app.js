const express = require("express");
const path = require("path");
const app  = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./public")))

app.set("views", "templates");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/appointment", (req, res) => {
    res.render("appointments.ejs");
});

app.get("/chatbot", (req, res) => {
    res.render("chatbot.ejs");
});

app.get("/eyeproblems", (req, res) => {
    res.render("eyeProblems.ejs");
});

app.get("/ourdoctors", (req, res) => {
    res.render("ourDoctors.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});



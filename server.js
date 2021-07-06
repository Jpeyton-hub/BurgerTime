const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
dotenv.config();

const PORT = process.env.PORT || 8080;
// const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render('index')
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
});
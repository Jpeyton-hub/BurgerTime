const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const db = require('./config/orm')
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
    db.selectAll().then(([rows, fields]) => {
        console.log(rows);
        res.render('index', {devouredrows : rows.filter((e) => e.devoured === 1),
        freshrows : rows.filter((e) => e.devoured === 0)});
    })
    
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
});
const orm = require('../config/orm');
const router = require("express").Router();
const db = require('../config/orm');

router.get("/", (req, res) => {
    db.selectAll().then(([rows, fields]) => {
        console.log(rows);
        res.render('index', {devouredrows : rows.filter((e) => e.devoured === 1),
        freshrows : rows.filter((e) => e.devoured === 0)});
    }) 
});

router.get("/eat/:burgerid", (req, res) => {
    db.updateOne(req.params.burgerid).then(([rows, fields]) => {
        res.redirect('/');
    })
});

router.post("/addburger", (req, res) => {
    db.insertOne(req.body.burgerName).then(([rows, fields]) => {
        res.redirect('/');
    })
});

module.exports = router;

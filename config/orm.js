const db = require("./connection");

const ORM = {
  selectAll() {
    let sql = "SELECT * FROM burgers";
    return db.then(conn => conn.query(sql));
  },

  insertOne(burgerName) {
    let sql = "INSERT INTO burgers (burger_name) VALUES(?)";
    return db.then(conn => conn.query(sql, [burgerName]));
  },

  updateOne(burgerId) {
    let sql = "UPDATE burgers SET devoured = 1 WHERE id = ?";
    return db.then(conn => conn.query(sql, [burgerId]));
  },
};

module.exports = ORM;

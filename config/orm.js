const db = require("./connection");

const ORM = {
  selectAll() {
    let sql = "SELECT * FROM shyt4u3hmkblfp79.burgers";
    return db.then(conn => conn.query(sql));
  },

  insertOne(burgerName, cb) {
    let sql = "INSERT INTO shyt4u3hmkblfp79.burgers (burgerName) VALUES(?)";
    db.query(sql, [burgerName], (err, result) => {
      if (err) throw err;
      console.log("1 record inserted");
      cb(result);
    });
  },

  updateOne(burgerId, cb) {
    let sql = "UPDATE shyt4u3hmkblfp79.burgers SET devoured = 1 WHERE id = ?";
    db.query(sql, [burgerId], (err, result) => {
      if (err) throw err;
      console.log("burger devoured");
      cb(result);
    });
  },
};

module.exports = ORM;

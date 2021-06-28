const db = require('./connection');
const mysql = require

const ORM = {
    selectAll(){
        let sql = "SELECT * FROM shyt4u3hmkblfp79.burgers";
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log("1 record inserted");
          });
    },

    insertOne(burgerName){
       let sql = "INSERT INTO burgers (burgerName) VALUES(?)";
       db.query(sql, [burgerName], (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
      });
    },

    updateOne(){

    }
};

module.exports = ORM;
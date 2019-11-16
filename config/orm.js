// Import MySQL connection.

var connection = require("../config/connection.js");

var orm = {
  selectAll: cb => {
    let query = "SELECT * FROM burger";
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  insertOne: (name, cb) => {
    let query = "INSERT INTO burger SET ?";
    connection.query(query, [{
      burger_name: name
    }], (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  updateOne: (id, cb) => {
    let query = "UPDATE burger SET ? WHERE ?";
    connection.query(query, [{
      devoured: true
    }, {
      id: id
    }], (err, result) => {
      if (err) throw err;
      cb(result);
    })
  }
}
module.exports = orm;
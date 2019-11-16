// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: cb => orm.selectAll(res => cb(res)),
  insertOne: (burger_name, cb) => orm.insertOne(burger_name, res => cb(res)),
  updateOne: (burgerID, cb) => orm.updateOne(burgerID, res => cb(res))
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

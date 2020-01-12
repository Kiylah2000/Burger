// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    var connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "princessK95$",
        database: "burger_db"
    });
}
app.listen(process.env.PORT || 8080);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

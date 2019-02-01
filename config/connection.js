const mysql = require("mysql");

// providing the necessary information about the database to set up a connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "abcd1234",
    database: "burger_db"
});

// after providing the necessary information, we can connect to the database with this code
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    // verifying that we are connected and displaying the threadID
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


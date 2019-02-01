// Creating the variables to hold the code needed from other files necessary to make this code run ie I am " 'modularizing' the code and then exporting it to other files where it can be 'required' hence the term 'module.exports'."
const connection = require("./connection.js");

//TODO: In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


// Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to construct their own ORM tools. https://en.wikipedia.org/wiki/Object-relational_mapping
const orm = {

    // * `selectAll()` this should select all of the columns from the burgers table in the mysql burger_db
    selectAll: function (tableName, cb) {
        let queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            // Why is it that when I try to add a string to this console log it does not give me the data? ie: console.log(`ORM selectAll${result}`);
            console.log('orm.js consolelog', result);
            cb(result);

            // Isn't it better to return a result? how to I use the result once it is returned?
            return result;
        });
    },

    // * `insertOne()` this should take the user input from the client side and use it in a query that will create a new burger_name in the mysql database FIXME: this means that newBurger needs to be defined before the query runs in the server (not done yet)
    insertOne: function (newBurger) {
        var queryString = `INSERT INTO burgers (burger_name) VALUES (?)`;
        console.log(queryString);
        connection.query(queryString, [newBurger], function (err, result) {
            if (err) throw err;
            console.log(`This result is coming from the orm insertOne function: ${result}`);
        });
    },

    // * `updateOne()` this query should update the boolean value of the burger in the database from false to true if it has been clicked on the client side which will trigger some function that will change it's location on the client side indicating that it has been 'devoured'...FIXME: I beleive that the id will be the only thing needed here in order to update the appropriate row in the devoured column and I will need that ID to be dynamic and coming from an event listener on click event from the client, but I am not too sure 
    updateOne: function (burgerID, cb) {
        var queryString =
            `UPDATE burgers SET devoured = TRUE WHERE id  = ${burgerID}`;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;
// * Export the ORM object in `module.exports`.
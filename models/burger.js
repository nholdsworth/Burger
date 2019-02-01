
const orm = require(`../config/orm.js`)
// Why does adding a string to the console log change the data that I get back?
// console.log(orm);

//create the code that will call the ORM functions using burger specific input for the ORM.  I beleive this is where I have to use my client created variables...
const burger = {
    // this simply selects and displays the burgers table from the burger_db
    all: function (cb) {
        orm.selectAll(`burgers`, function (res) {
            // why is it that if I try to put the if (err) throw err here my page does not render?  on the browser it will say localhost refused to connect
            // if (err) {
            //     throw err;
            // }
            console.log('burger.js: all ', res);

            return cb(res);
        });
    },
    update: function (id, cb) {
        orm.updateOne(id, function (res){

            console.log('burger.js: update ', res);

            return cb(res);
        })
    }

}

    //TODO:this should run an INSERT INTO the burgers table a new burger_name created by the client and give it a autoincrementing ID and also a default boolean value of false
    // insertOne: orm.insertOne(/*this is a dynamically created variable*/),

    // TODO: this should use the id of the burger the client clicks on to find the specific row in the database that corresponds to the id number of the burger clicked and update the devoured column from false to true. 
    // updateOne: orm.updateOne(/*this is a dynamically created variable*/)

module.exports = burger;


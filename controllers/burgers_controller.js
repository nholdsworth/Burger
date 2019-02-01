// requiring the express framework 
const express = require("express");
// requiring the ORM statements containing the client created variables in the sql query strings
const burger = require("../models/burger.js");
// creatting a variable to hold the router logic built into express
const router = express.Router();

console.log('burger.js burger: ', burger)

router.get('/', function (req, res) {
    burger.all(function (burgerRow) {
        console.log('router.get: ', burgerRow);
        res.render(`index`, { burgerRow });
    });
});

router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    })
})


module.exports = router
// Creating variables for the dependencies (npm packages) required to run the Burger app
// express is a serverside framework that handles routing, data parsing, responses and requests
const express = require(`express`);

// mysql is a mysql command line tool that allows mysql to be used in Node
const mysql = require(`mysql`);

// no idea what this is never discussed or even mentioned in class which is completely unacceptable!!!! 
const methodOverride = require("method-override");

// no idea what this is never discussed or even mentioned in class which is completely unacceptable!!!! 
const bodyP = require("body-parser");

// Creating an instance of express which I think means that we are basically calling a stock express method named express that has most of the functions we will need inside of it as helper functions
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory.
app.use(express.static(`./public`));

// I do not know what either of these does but I am stuck with this app.use() requires a middleware function and Ray told me this might fix it, but it does not....
app.use(bodyP.urlencoded({ extended: false }));

// uncertain as to what this does but I am using it as possible troubleshooting based on advice from a classmate
app.use(bodyP.json());

app.use(methodOverride('_method'))

// Parse request body as JSON this happens after the client sends a post but before the server recieves the post request hence, the term "middleware"
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express-handlebars is a templating engine that makes setting up multiple html pages for a website quicker
const exphbs = require(`express-handlebars`);

// This code sets up express to use the handlebars templating engine.  It also sets up the default layout for the templating engine to be looked for in a file called "main" in the "layout directory".
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// now that express has been set up to use handlebars, app.set is invoked to actually start using it or at least I think...  
app.set("view engine", "handlebars");

// Creating the variables to hold the code needed from connection.js necessary for this code to connect to the database.  I.E. I am 'modularizing' the code and then exporting it to other files where it can be 'required' hence the term 'module.exports'.
const connection = require(`./config/connection.js`);

// importing the routes for the server
const routes = require(`./controllers/burgers_controller.js`);

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});









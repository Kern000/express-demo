// (1) setup
const express = require('express');
const hbs = require("hbs");

const app = express();

// this is to inform express that hbs is our view engine
app.set("view engine", "hbs");

// tells express we want to use static files (not dynamic) = so we need to have the folder in same folder as index.js
// we upload images and resources that are static there (e.g. images)
// hbs is not html, cannot use the <img src> normally in hbs. It must be in public folder.
app.use(express.static("public"));


// (2) routes
app.get("/", function(req, res){
    res.send("Hello");
})

// This allow us to embed information into our url, this url string has to be unique
app.get("/hello/:userName", function(req, res){
    console.log(req.params);
    res.send("Hello, " + req.params.userName);
})

// anything from the parameter is always a string, so need to convert
app.get("/add/:num1/:num2", function(req,res){
    const n1= parseInt(req.params.num1);
    const n2= parseInt(req.params.num2);
    const sum = n1 + n2;
    res.send("Sum is " + sum);
})

// will auto look into views folder
app.get("/contact-us", function (req, res){
    res.render("contact-form.hbs");
})

// this is how we send variables  to HBS files
// we use the 2nd parameter of the res.render, and we send using an object
// the object key will be what is called in the handlebars
app.get("/luckynumber", function (req,res){
    const luckynumber = Math.floor(Math.random() * 10000);
    res.render("lucky-number.hbs", {
        "number": luckynumber,
        "date": new Date()
        }
    )
})

// (3) Start server
app.listen(3000, function(){
    console.log("Server has started");
})
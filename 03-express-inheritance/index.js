const express = require('express');
const app = express();
require("dotenv").config();

const hbs = require("hbs");
const waxOn = require("wax-on"); //base on documentation it is wax-on

app.set("view engine", "hbs");

// before routes
waxOn.on(hbs.handlebars); //apply wax-on to handlebars in hbs object
waxOn.setLayoutPath("./views/layouts"); // where to find the template

app.get("/", function(req,res){
    res.render("index");
})

app.get("/about-us", function(req,res){
    res.render("about");
})

app.get("/contact-us", function(req,res){
    res.render("contact")
})

app.listen(process.env.PORT || 3001, function(){
    console.log("server has started on port", process.env.PORT || 3001);
})
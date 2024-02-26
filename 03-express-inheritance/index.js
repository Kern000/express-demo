const express = require('express');
const app = express();
require("dotenv").config();

const hbs = require("hbs");
const waxOn = require("wax-on"); //base on documentation it is wax-on

app.set("view engine", "hbs");

// before routes
waxOn.on(hbs.handlebars); //apply wax-on to handlebars in hbs object
waxOn.setLayoutPath("./views/layouts"); // where to find the template

// name affects what is the name to call it in the hbs file (first param)
// second param - function called when use helper
// google handlebars helpers - prewritten
// write own custom helper

hbs.handlebars.registerHelper("ifEquals", function (arg1, arg2, options){
        if (arg1 == arg2){
            return options.fn(this);
        } else {
            return options.inverse(this)
        }
    }
); 


app.get("/", function(req,res){
    res.render("index");
})

app.get("/fruits", function(req,res){
    const fruits = ["apples", "orange", "papaya"]
    const favorite = "oranges"
    res.render("fruits", {
        "fruits": fruits,
        "favorite" : favorite,
        "isRaining": false
    })
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
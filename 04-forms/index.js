const express = require("express");
const app = express();
const hbs = require("hbs")
const wax = require("wax-on");

app.set("view engine", "hbs")
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts")

app.get("/", function(req, res){
    console.log("hello");
})

app.use(express.static("public"))

// enable form processing
app.use(express.urlencoded({"extended": false}))

app.get("/survey", function (req, res){
    res.render("survey")
})

app.post("/survey", function(req, res){
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const country = req.body.country;
    let hobbies = []
    if (req.body.hobbies){
        if (Array.isArray(req.body.hobbies)){
            hobbies = req.body.hobbies;
        } else {
            hobbies.push(req.body.hobbies)
        }
    }
    res.render("summary", {
        firstName,
        lastName,
        gender,
        hobbies,
        country
    })
    // res.send("first name: ", firstName, "last name: ", lastName);
    
})


app.listen(3000, function(){
    console.log("server started");
})
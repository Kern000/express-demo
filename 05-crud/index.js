const express = require("express");
const app = express();
const hbs = require("hbs")
const wax = require("wax-on");

app.set("view engine", "hbs")
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts")

app.use(express.static("public"))

// enable form processing
app.use(express.urlencoded({"extended": false}))

const foodRecords = [
    {
        id: 1,
        foodName: "chicken rice",
        calories: 500,
        meal: "lunch",
        tags: ["organic", "less-oil"]
    },
    {
        id: 2,
        foodName: "clam rice",
        calories: 600,
        meal: "dinner",
        tags: ["home-cooked"]

    },
    {
        id: 3,
        foodName: "tuna sandwich",
        calories: 400,
        meal: "breakfast",
        tags: ["hellthy", "less-oil"]

    }
];

app.get("/", function (req, res){
    res.render("index", {
        foodRecords: foodRecords      
    })
})

app.get("/create", function(req, res){
    res.render("create");
})


app.post("/create", function (req,res){
 
    console.log(req.body);

    let selectedTags = [];
    if (req.body.tags){
        if(Array.isArray(req.body.tags)){
            selectedTags = req.body.tags
            console.log("selected tags here", selectedTags);
        } else {
            selectedTags = [req.body.tags];
            console.log("selected indiv tags here", selectedTags);
        }
    }

    const newFood = {
        id: Math.floor(Math.random()*100000 + 1),
        foodName: req.body.foodName,
        calories: req.body.calories,
        meal: req.body.meal,
        tags: selectedTags
    }
    foodRecords.push(newFood);
    console.log(foodRecords);
    res.redirect("/");  //redirect to another url
})


app.listen(3000, function(){
    console.log("server started");
})
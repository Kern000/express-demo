const express = require("express"); // This imports from an install module or some other module and methods you created on another file

// (1) create your express
const app = express();

// (3) then we add a route - param 1 consist of url assoc w route, param 2 is whatever function is executed via that URL on the server;
app.get("/about-us", function(req, res){
    res.send(`<h1>About us</h1>`);
})

// (4) we can send back as complex a HTML we want
app.get("/contact-us", function(req, res){
    res.send(`<form>
                <label> Your email </label>
                <input type="text" name="email" />
            </form>
    `)
})

// (5) can send back what is random or dynamically generat
app.get("luckyNumber", function (req,res){
    const luckyNumber = Math.floor(Math.random * 10000 + 1000);
    res.send("Lucky number is ", luckyNumber);
})



// (2) 2 parameter: port number, 2nd is callback function (meaning u call another function) executed when server starts
app.listen(3001, function(){
    console.log("server started on port 3001")
});




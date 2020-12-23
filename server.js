const express = require("express");
const app = express();

//da setapujemo view engine
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.send("ok");
})


app.listen(3000,function(){
    console.log("Listening on port to 3000");
})
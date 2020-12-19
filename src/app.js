
//import express
const express = require("express");
const app = express();

//import path
const path = require("path");

//import HBS

const hbs = require("hbs");

// run templete engin
const temPath = path.join(__dirname, "../tamplete/views");
app.set("view engine", "hbs");
app.set("views", temPath);

//patrials 
 const partialspath =path.join(__dirname, "../tamplete/partirals")
hbs.registerPartials(partialspath);


// run static page
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));


// create server
const port =process.env.PORT || 8005;
//home page
app.get("/", (req, res)=>{
 res.render("index");
});
//about us page
app.get("/about", (req, res)=>{
  res.render("about");
});

//weather page
app.get("/weather", (req, res)=>{
    res.render("weathder");
  });

  //404 page
  app.get("*", (req, res)=>{
    res.render("404");
  });

//listing server
app.listen(port, ()=>{
    console.log(`listing the ${port}`)
});
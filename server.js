const excel_thing =require("xlsx");
const express = require('express');
 const mongoose = require("mongoose");
const app = express();
//  here is for the case of visual representation 
 const ejslayout = require("express-ejs-layouts");
  // setting up the view engine 
   app.set("view engine","ejs");
    app.set("layout","layouts/layout");
    // here is for the folder for  our view
     app.set("views",__dirname+"/view");
    //   fro the borting serving of static fiel 
    app.use(express.static("public"))
    //  final setting of the engine
     app.use(ejslayout)
  app.use(express.json())

  //  is section for the varipuis router and thier jobs
   const Display_Cal_Router = require("./Routers/Display_Claculation_Router");
    app.use("/Dis_Cal",Display_Cal_Router);
   const uplaoding_router  =require("./Routers/Handle_Uploading");
      app.use("/real_deal",uplaoding_router)
 
//   the boring setting up of the db   
const file_concentration = require("./Model/Gas_file");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Kwame_tech");
const donedb  = mongoose.connection;
donedb.on("error",()=>{
  console.log("Could not Connect")
});

donedb.on("open",()=>{
  console.log("Database Connected ")
});

 //   on the landing page of the application 
 app.get("/",async(req,res)=>{
    //   it display the uploaded excel files 
     let all = await file_concentration.find();
    res.render("Working_Zone.ejs",{already_uploaded_file :all})
 })      
 app.listen(3000,()=>{
    console.log("server of transformer started")
})
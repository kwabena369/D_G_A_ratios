const express = require('express');
 const Uploader_excel = express.Router();
  
  
  Uploader_excel.use("/",express.static("public"))
//   for the db thing
 const file_db = require("../Model/Gas_file.js") 

//   for the multer and other
  const multer  = require("multer");
//     setting the place for the upload file
   const storage = multer.diskStorage({
     destination : (req,file,cb)=>{
         cb(null,"./public/Gas_Con_file")
     },
      filename : (req,file,cb)=>{
        //    for the name
         cb(null,file.fieldname+"-"+file.originalname)
      }
   })
    // the real deal 
     const uploader_now = multer({storage:storage})
    
//     the router for handling the uploading
Uploader_excel.get("/upload_file",(req,res)=>{
    //  here is for the page for the uplaoding of the ifle 
res.render("Page/uploaded_file.ejs");
})

// handling the de;evaries
 Uploader_excel.post("/upload_file",uploader_now.single("excel_file"),(req,res)=>{
//  for the file
    let one_instance_file = new file_db({
         file_name : req.file.filename
    })
     try
       { 
  one_instance_file.save(); 
   res.redirect("/")
       }catch{
         
         res.send("there was an error ")
       }
 })
  
  module.exports = Uploader_excel
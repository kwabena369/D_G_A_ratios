const express = require('express');
 const excel_master = require("xlsx");
//  then router
 const Display_Cal_Router = express.Router();
   

  //    for the db
 const file_concentration = require("../Model/Gas_file.js");
  
//   here are the various util function 
 const { doenberg_thing, do_IEC_thing ,do_en_single_instance,single_do_IEC_thing, roger_instacne} = require("../util_ratio_method/Ratio_Methods.js");
   const {delete_file} = require("../util_ratio_method/delete_file.js")
  
Display_Cal_Router.get("/",async(req,res)=>{
    //  here we are going to be
    //  sending all the files in the db
     let all  = await file_concentration.find();
     res.render("/partial_snippets/All_Uploaded_Excel.ejs",{already_uploaded_file : all})
 });
  
// this is a golden middleware
//  function serve_the_style(req,res,next){
//      console.log(req.path)
//        if(req.path.endsWith("/outcome.css")){
//         res.set('Content-Type', 'text/css');
//          res.sendFile(__dirname+"./public/outcome.css")
//           next()
//        }else{
//         next()
//        }
//  }   
  
 
  
//   this is for a mega single instance of the file 


Display_Cal_Router.use("/single_excel",express.static("public"));
 Display_Cal_Router.get("/single_excel",async(req,res)=>{
       let file_id = req.query.file_id;
       let current_file =  await file_concentration.findOne({_id : file_id})
       if(current_file){
//   read the file
  let file_here_now = excel_master.readFile(`./public/Gas_Con_file/${current_file.file_name}`)
         //read the single sheet
          let sheetName = file_here_now.SheetNames[0];
            // that we are only taking the first sheet
            let real_deal = file_here_now.Sheets[sheetName];
            //    here is for the converting the value to the json 
             let done_here = excel_master.utils.sheet_to_json(real_deal);
             
            //    for the doenberg 
          let done_now_here = doenberg_thing(done_here);
               let done_now2 = do_IEC_thing(done_here)

                let done_here2 = roger_instacne(done_here);
                 console.log(done_here2)
           res.render("./Page/Single_excel_room.ejs",
           {one_now_doenberg : done_now_here,one_iec :  done_now2});
  }else{
     res.send("Error_there")
  }
   
   
 })

  
//  this my people is for the deleting of the file 
Display_Cal_Router.get("/Delete_file/:id_file",async(req,res)=>{
    console.log("deleting the thing...")
  let id_file = req.params.id_file;
    //   finding the file
    let current_file =  await file_concentration.findOne({_id : id_file})
   if(current_file){
    try{
      //  here is the taking it out of the system folder
      delete_file("./public/Gas_Con_file",current_file.file_name)
    await  file_concentration.deleteOne({_id : id_file});
      res.json({result : true});
    }catch(error){
       console.log(error);
 res.status(400).send("could not do the delte")
      }
   }
     
 })

//  this is the rotuer specifically design to be handling of the 
//   fault calaculation
 Display_Cal_Router.post("/for_which_one/:info_we_need",(req,res)=>{
  //   here we are foing to be doing the thing
    let which_kind =  req.params.info_we_need
     let real_deal  = req.body.staff_need;

      // for the doen thing
     if(which_kind === "D"){
      // doing the all for doen berg
      let done_here_now_at_this_place =  do_en_single_instance(real_deal);
       console.log(done_here_now_at_this_place);
       res.json({result : done_here_now_at_this_place});
     }
//  for the iec
if(which_kind === "IEC"){
  // doing the all for doen berg
  let done_here_now_at_this_place =  single_do_IEC_thing(real_deal);
   console.log("for the_iec");
   console.log(done_here_now_at_this_place);
   res.json({result : done_here_now_at_this_place});
 }
     })

  module.exports = Display_Cal_Router
// for the delete fiolder and the filename
const fs = require("fs")
  const path = require("path")
 function Delete_file(folder,filename){
     console.log("some one called deleting function ")
     let filepath  = path.join(folder,filename);
    //  the real deal 
     fs.unlink(filepath,(outcome)=>{
         if(outcome){
              console.log("file is not there")
               return;
         }else{
             console.log("file deleted");
         }
     }) 
     
 }
  

 module.exports ={
     delete_file : Delete_file
 }
 const mongoose = require("mongoose")
   
//   for the file shcema 
 const Gas_ratio_shcema  = new mongoose.Schema({
      file_name  : {
         type : String ,
          required : true
      }
 },{timestamps : true})
  
//  making it available
 module.exports = mongoose.model("file_excel",Gas_ratio_shcema);


// //   here for the realding of the file
//  const file  = excel_thing.readFile("./Instance_fault_file/Book1.xlsx")
//   app.get("/",(req,res)=>{
//     const sheetName = file.SheetNames[0];
//     const worksheet = file.Sheets[sheetName];
    
//     // Convert the worksheet to JSON
//     const jsonData = excel_thing.utils.sheet_to_json(worksheet);


// // then here we are going to calculating the various value of ratio 
// let done_ratio_thing =jsonData.map((element) => {
//     const CH4_H2 = element.CH4 / element[' H2'];
//     const C2H2_CH4 = element.C2H2 / element.CH4;
//     const C2H2_C2H4 = element.C2H2 / element.C2H4;
//     const C2H6_C2H2 = element.C2H6 / element.C2H2;
//     //   for the corresding fault of that instance 
//      const godlen_fault = element['E.FAULT'];
  
//     // Add the computed ratios to the element object
     
//     let posible_fault_it_mean_be = [];
//     //  for the first case of no fault

//      if(C2H2_C2H4 <0.75 
//       && CH4_H2 <0.1 
//       && C2H2_C2H4 < 0.1
//       && C2H6_C2H2<0.1){
//       posible_fault_it_mean_be.push("No_fault")
//       }else if(
//         C2H2_C2H4 <0.75 
//         && CH4_H2 <0.1 
//         && C2H2_C2H4 < 0.1
//         && C2H6_C2H2>1){
//           posible_fault_it_mean_be.push("PD")
//         }else if(
//           C2H2_C2H4>1
//           &&CH4_H2 >0.1 
//           &&CH4_H2 <1 
//           && C2H2_C2H4 > 0.1
//           && C2H2_C2H4 < 0.3
//           && C2H6_C2H2<0.1){
//             posible_fault_it_mean_be.push("D1")
//           }else if(
//             C2H2_C2H4>0.75
//             &&CH4_H2 >0.1 
//             &&CH4_H2 <1 
//             && C2H2_C2H4 > 0.1
//             && C2H2_C2H4 < 0.3
//             && C2H6_C2H2<1){
//               posible_fault_it_mean_be.push("D2")
//             }else if(
//               C2H2_C2H4<0.75
//               &&CH4_H2 >1 
//               && C2H2_C2H4 < 0.3
//               && C2H6_C2H2>1){
//                 posible_fault_it_mean_be.push("T1")
//               }
//               else if(
//                 C2H2_C2H4<0.75
//                 &&CH4_H2 >1 
//                 && C2H2_C2H4 > 0.3
//                 && C2H6_C2H2>1){
//                   posible_fault_it_mean_be.push("T2")
//                 }

//   return  {
//    instance_CH4_H2 :CH4_H2,
//    instance_C2H2_CH4 : C2H2_CH4,
//    instance_C2H2_C2H4 : C2H2_C2H4,
//    instance_C2H6_C2H2 :C2H6_C2H2,
//     faul_type :  godlen_fault,
//      according_to_den  : posible_fault_it_mean_be
//   }
//   });
//     // console.log(jsonData);
//     // console.log(done_ratio_thing);
     
//      let done_here_right_now = Array.from(done_ratio_thing)
     
//      res.render("LandingPage.ejs",{all_case:done_here_right_now})
      
//   })
  
 
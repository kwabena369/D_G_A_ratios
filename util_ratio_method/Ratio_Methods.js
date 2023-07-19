
//   so here is the thing this is a function and we 
//  are going to be giving it the thing of the
//   json
 function do_the_Doenberg(json_files){
// then here we are going to calculating the various value of ratio 
let done_ratio_thing =json_files.map((element) => {
    const CH4_H2 = element.CH4 / element[' H2'];
    const C2H2_CH4 = element.C2H2 / element.CH4;
    const C2H2_C2H4 = element.C2H2 / element.C2H4;
    const C2H6_C2H2 = element.C2H6 / element.C2H2;
    //   for the corresding fault of that instance 
     const godlen_fault = element['E.FAULT'];
    // Add the computed ratios to the element object
    let posible_fault_it_mean_be = [];
  //  for the first case of no fault

     if(C2H2_C2H4 <0.75 
      && CH4_H2 <0.1 
      && C2H2_C2H4 < 0.1
      && C2H6_C2H2<0.1){
      posible_fault_it_mean_be.push("No_fault")
      }else if(
        C2H2_C2H4 <0.75 
        && CH4_H2 <0.1 
        && C2H2_C2H4 < 0.1
        && C2H6_C2H2>1){
          posible_fault_it_mean_be.push("PD")
        }else if(
          C2H2_C2H4>1
          &&CH4_H2 >0.1 
          &&CH4_H2 <1 
          && C2H2_C2H4 > 0.1
          && C2H2_C2H4 < 0.3
          && C2H6_C2H2<0.1){
            posible_fault_it_mean_be.push("D1")
          }else if(
            C2H2_C2H4>0.75
            &&CH4_H2 >0.1 
            &&CH4_H2 <1 
            && C2H2_C2H4 > 0.1
            && C2H2_C2H4 < 0.3
            && C2H6_C2H2<1){
              posible_fault_it_mean_be.push("D2")
            }else if(
              C2H2_C2H4<0.75
              &&CH4_H2 >1 
              && C2H2_C2H4 < 0.3
              && C2H6_C2H2>1){
                posible_fault_it_mean_be.push("T1")
              }
              else if(
                C2H2_C2H4<0.75
                &&CH4_H2 >1 
                && C2H2_C2H4 > 0.3
                && C2H6_C2H2>1){
                  posible_fault_it_mean_be.push("T2")
                }

  return  {
   instance_CH4_H2 :CH4_H2,
   instance_C2H2_CH4 : C2H2_CH4,
   instance_C2H2_C2H4 : C2H2_C2H4,
   instance_C2H6_C2H2 :C2H6_C2H2,
    faul_type :  godlen_fault,
     according_to_den  : posible_fault_it_mean_be
  }
  });
    // console.log(jsonData);
    // console.log(done_ratio_thing);
let done_here_right_now = Array.from(done_ratio_thing)
 return done_here_right_now;
 }

//   for the single instance of the sending
function do_en_single_instance(element){
  // then here we are going to calculating the various value of ratio 
      const CH4_H2 = element.CH4 / element.H2;
      const C2H2_CH4 = element.C2H2 / element.CH4;
      const C2H2_C2H4 = element.C2H2 / element.C2H4;
      const C2H6_C2H2 = element.C2H6 / element.C2H2;
      let posible_fault_it_mean_be = [];
    //  for the first case of no fault
  
       if(C2H2_C2H4 <0.75 
        && CH4_H2 <0.1 
        && C2H2_C2H4 < 0.1
        && C2H6_C2H2<0.1){
        posible_fault_it_mean_be.push("No_fault")
        }else if(
          C2H2_C2H4 <0.75 
          && CH4_H2 <0.1 
          && C2H2_C2H4 < 0.1
          && C2H6_C2H2>1){
            posible_fault_it_mean_be.push("PD")
          }else if(
            C2H2_C2H4>1
            &&CH4_H2 >0.1 
            &&CH4_H2 <1 
            && C2H2_C2H4 > 0.1
            && C2H2_C2H4 < 0.3
            && C2H6_C2H2<0.1){
              posible_fault_it_mean_be.push("D1")
            }else if(
              C2H2_C2H4>0.75
              &&CH4_H2 >0.1 
              &&CH4_H2 <1 
              && C2H2_C2H4 > 0.1
              && C2H2_C2H4 < 0.3
              && C2H6_C2H2<1){
                posible_fault_it_mean_be.push("D2")
              }else if(
                C2H2_C2H4<0.75
                &&CH4_H2 >1 
                && C2H2_C2H4 < 0.3
                && C2H6_C2H2>1){
                  posible_fault_it_mean_be.push("T1")
                }
                else if(
                  C2H2_C2H4<0.75
                  &&CH4_H2 >1 
                  && C2H2_C2H4 > 0.3
                  && C2H6_C2H2>1){
                    posible_fault_it_mean_be.push("T2")
                  }
  
    return  {
     instance_CH4_H2 :CH4_H2,
     instance_C2H2_CH4 : C2H2_CH4,
     instance_C2H2_C2H4 : C2H2_C2H4,
     instance_C2H6_C2H2 :C2H6_C2H2,
       according_to_den  : posible_fault_it_mean_be
    }
    
   }
        
  // this is the function for the great IEC
  function do_IEC_thing(json_files){
// console.log(json_files);
    let done_ratio_thing =json_files.map((element) => {
      const CH4_H2 = element.CH4 / element[' H2'];
      const C2H2_C2H4 = element.C2H2 / element.C2H4;
      const C2H4_C2H6 = element.C2H4 / element.C2H6;
      //   for the corresding fault of that instance 
       const godlen_fault = element['E.FAULT'];
      // Add the computed ratios to the element object
      let posible_fault_it_mean_be = [];
    //  for the first case of no fault
  
       if(C2H2_C2H4 <0.1 
        && CH4_H2 <0.1 
        && C2H2_C2H4 < 0.1
        && C2H4_C2H6<0.2){
        posible_fault_it_mean_be.push("PD")
        }else if(
          C2H2_C2H4 >0.1 
          && CH4_H2 >0.1 
          && CH4_H2 <0.5 
          && C2H4_C2H6>1){
            posible_fault_it_mean_be.push("D1")
          }else if(
            C2H2_C2H4>0.6
            &&C2H2_C2H4<2.5
            &&CH4_H2 >0.1 
            &&CH4_H2 <1 
            && C2H4_C2H6>2){
              posible_fault_it_mean_be.push("D2")
            }else if(
              C2H2_C2H4<0.1
              &&CH4_H2 >1 
              && C2H4_C2H6 < 1
              ){
                posible_fault_it_mean_be.push("T1")
              }else if(
                C2H2_C2H4<0.1
                &&CH4_H2 >1 
                && C2H4_C2H6>1
                && C2H4_C2H6<4){
                  posible_fault_it_mean_be.push("T2")
                }
                else if(
                  C2H2_C2H4<0.1
                  &&CH4_H2 >1 
                  && C2H4_C2H6>4){
                    posible_fault_it_mean_be.push("T3")
                  }
  
    return  {
      instance_C2H2_C2H4 : C2H2_C2H4,
      instance_CH4_H2 :CH4_H2,
     instance_C2H4_C2H6 :C2H4_C2H6,
      faul_type :  godlen_fault,
       according_to_den  : posible_fault_it_mean_be
    }
    });
      // console.log(jsonData);
      // console.log(done_ratio_thing
  let done_here_right_now = Array.from(done_ratio_thing)
   return done_here_right_now;
     
     }

    //   here is for the simgle instance 
    function single_do_IEC_thing(element){
      // console.log(json_files);
            const CH4_H2 = element.CH4 / element.H2;
            const C2H2_C2H4 = element.C2H2 / element.C2H4;
            const C2H4_C2H6 = element.C2H4 / element.C2H6;
            //   for the corresding fault of that instance 
            // Add the computed ratios to the element object
            let posible_fault_it_mean_be = [];
          //  for the first case of no fault
        
             if(C2H2_C2H4 <0.1 
              && CH4_H2 <0.1 
              && C2H2_C2H4 < 0.1
              && C2H4_C2H6<0.2){
              posible_fault_it_mean_be.push("PD")
              }else if(
                C2H2_C2H4 >0.1 
                && CH4_H2 >0.1 
                && CH4_H2 <0.5 
                && C2H4_C2H6>1){
                  posible_fault_it_mean_be.push("D1")
                }else if(
                  C2H2_C2H4>0.6
                  &&C2H2_C2H4<2.5
                  &&CH4_H2 >0.1 
                  &&CH4_H2 <1 
                  && C2H4_C2H6>2){
                    posible_fault_it_mean_be.push("D2")
                  }else if(
                    C2H2_C2H4<0.1
                    &&CH4_H2 >1 
                    && C2H4_C2H6 < 1
                    ){
                      posible_fault_it_mean_be.push("T1")
                    }else if(
                      C2H2_C2H4<0.1
                      &&CH4_H2 >1 
                      && C2H4_C2H6>1
                      && C2H4_C2H6<4){
                        posible_fault_it_mean_be.push("T2")
                      }
                      else if(
                        C2H2_C2H4<0.1
                        &&CH4_H2 >1 
                        && C2H4_C2H6>4){
                          posible_fault_it_mean_be.push("T3")
                        }
        
          return  {
            instance_C2H2_C2H4 : C2H2_C2H4,
            instance_CH4_H2 :CH4_H2,
           instance_C2H4_C2H6 :C2H4_C2H6,
             according_to_den  : posible_fault_it_mean_be
          }
       
           
           }
  
//  here is for rogers
 
 
//  for the general instance of the Roger
 function roger_instacne (element){
  //   single 
   let done_ratio_we_need = element.map(element =>{
    const real_C2H2_C2H4 = element.C2H2 / element.C2H4;
    let C2H2_C2H4 = element.C2H2 / element.C2H4;
    const  real_CH4_H2 = element.CH4 / element[' H2'];
    let CH4_H2 = element.CH4 / element[' H2'];
    const real_C2H4_C2H6 = element.C2H4 / element.C2H6;
    let C2H4_C2H6 = element.C2H4 / element.C2H6;
       
        //  for the <=0.1
         let mega_array = [];
  //   here we check the value 
  //  for the <=0.1
  let it_is_corres;
   if(C2H2_C2H4<=0.1 && CH4_H2<=0.1 && C2H4_C2H6 <=0.1){
    it_is_corres = 1
    CH4_H2 = 1
    C2H2_C2H4 = 0
    C2H4_C2H6 = 0
  }else{
     it_is_corres =false
  }
   mega_array.push(it_is_corres)



  //  here is for the
// 0.1 -1
 let it_is_corres_01_1 ;
if(C2H4_C2H6>0.1 && C2H4_C2H6<1 &&
  C2H2_C2H4>0.1 && C2H2_C2H4<1 
  && CH4_H2>0.1&& CH4_H2<1){
     it_is_corres_01_1 =2
    CH4_H2 = 0
    C2H2_C2H4 = 1
    C2H4_C2H6 = 0
  }else{
  it_is_corres_01_1 = false
}
mega_array.push(it_is_corres_01_1)



//   for the 1.0 - 3.0
let it_is_corres_1_0_3_0 ;
if(CH4_H2>1 && CH4_H2<3 && C2H2_C2H4>1 && C2H2_C2H4<3 && C2H4_C2H6 >1 && C2H4_C2H6<3){
    it_is_corres_1_0_3_0 = 3
    C2H2_C2H4 = 1
    C2H4_C2H6 =1
    CH4_H2 =2
}else{
  it_is_corres_1_0_3_0 = false
}
mega_array.push(it_is_corres_1_0_3_0)


//   for the >= 3
let it_is_corres_g_3;
  if(C2H2_C2H4 >= 3 &&CH4_H2>=3 &&C2H4_C2H6>=3){
    it_is_corres_g_3 =4
    C2H4_C2H6 =2;
    CH4_H2 = 2;
    C2H2_C2H4 =2
  }else{
    it_is_corres_g_3   = false
  }
  mega_array.push(it_is_corres_g_3);


  mega_array = mega_array.filter(element =>{
     return element !== false
  })
    
  
  
  return{
    instance_CH4_H2 :CH4_H2,
   rea_instance_CH4_H2 :real_CH4_H2,
    instance_C2H2_CH4 : C2H2_C2H4,
   rea_instance_C2H2_CH4 :real_C2H2_C2H4,
    instance_C2H4_C2H6 : C2H4_C2H6,
    rea_instance_C2H4_C2H6 :real_C2H4_C2H6,
    according_to_den  : mega_array
      
    } 

     
      
     
  }); 
    
 
     return done_ratio_we_need;
 }
  
  //  exporting them 
    module.exports = {
         doenberg_thing : do_the_Doenberg,
         do_IEC_thing  : do_IEC_thing,
         do_en_single_instance : do_en_single_instance,
         single_do_IEC_thing : single_do_IEC_thing,
         roger_instacne  : roger_instacne

    }

 
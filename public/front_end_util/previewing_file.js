// here is the function for the live pre preview of fle
  function preview_this(where_to_put_it,input_tag_element){ 
  
        input_tag_element.addEventListener("input",()=>{
      
    //  for the outter cover    
     let outer_div_cover = document.createElement("div");
     //   setting of some real styling of things
      outer_div_cover.classList.add(
         "border-2",
         "w-20", 
         "h-fit",
         "m-auto",
         "border-solid",
         "border-black",
         "p-0.5"
         ,"rounded-lg"
      )
        
     //  here is for the cancel btn 
      let cancle = document.createElement("span");
        cancle.classList.add(
         "bg-black",
         "p-1",
         "rounded-full",
         "text-white",
         "text-center",
         "absolute",
         "cursor-pointer",
         "top-0",
         "right-0")
          cancle.innerText= 'X'
      
 
          //   here is when there is a click on it 
           cancle.addEventListener("click",(event)=>{
              let parent = event.target.parentNode
               where_to_put_it.removeChild(parent);
               input_tag_element.value = null;
           })

            while(where_to_put_it.firstChild){
               where_to_put_it.firstChild.remove();
            }

           
           let the_real_deal  = document.createElement("span");
            // the mega 
              the_real_deal.classList.add("bg-pink-400","rounded-lg","p-2","text-center")
          
         //  here is for the reading of the file 
         let file_reader = new FileReader();
         //  here gettign the file there 
          let  file_now_here = input_tag_element.files[0];

          file_reader.addEventListener("load",()=>{ 
            //  we are going to be taking the result and dispalying it there
               the_real_deal.innerText =  "One_Here"
           })
            // appending of staff
             
             
            outer_div_cover.appendChild(the_real_deal);
         outer_div_cover.appendChild(cancle);
        //  then to the main bossu
            
        where_to_put_it.appendChild(outer_div_cover);
             file_reader.readAsDataURL(file_now_here);
            
        })
  }
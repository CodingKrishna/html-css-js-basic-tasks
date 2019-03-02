

var showTime=function(){
    

   var v= document.getElementById('time_id');


   var h= v.options[v.selectedIndex].value;


   
   console.log(h);
//    var xhr=new XMLHttpRequest();
  
//      xhr.open("get","http://localhost:4521/timezone?time="+h,true)



 const pro=new Promise((resolve,reject)=>{
   const xhr=new XMLHttpRequest();
  
    xhr.open("get","http://localhost:4521/timezone?time="+h,true)

    xhr.send();

 
        console.log('in function')
       setTimeout(() => {
        if((xhr.status==200) && (xhr.readyState==4)) 
        { 
            console.log("in if")
          resolve(xhr.responseText);
          console.log("in resole");
          
       }
 
       else{
           reject(Error(xhr.statusText))
           console.log('in reject');
           
       }
       }, 100);
       
  

 })

     
    
    //  xhr.send();

//      xhr.onreadystatechange=  function ()
//      {
//          console.log('in function')
        
//         if((xhr.status==200) && (xhr.readyState==4)) 
//         { 
//             console.log("in if")
//            var t=document.getElementById('time_id2');
//            t.innerHTML= xhr.responseText;

//        }
//    }


   pro.then((data)=>{
       console.log("promise fullfilled");
       var t=document.getElementById('time_id2');
       console.log("element created")
       t.innerHTML=data;
   },(error)=>{
       console.log(error)
   });


   pro.catch((error)=>{
       console.log("promise rejected")
   })




}



        window.onload = function(){ 
            var e=document.getElementById('gmailcolumn');
     
        e.onmouseover = function(){
    
    //    alert('in function')
    
            var pop= document.getElementById('pop');
            pop.style.maxWidth='500px';
            pop.style.maxHeight='600px';
          pop.style.whiteSpace='initial';
      pop.style.position='absolute'
      pop.style.top='220px';
      pop.style.left='670px';
      pop.style.marginLeft='-6px';
      pop.style.textAlign='center';
                pop.style.paddingTop='8px';
                pop.style.paddingRight='18px';
                pop.style.paddingBottom='12px';
                pop.style.paddingLeft='12px';
            pop.style.backgroundColor='black'
            pop.style.color="white  ";
            pop.style.borderRadius='12px'
            pop.style.fontWeight='500';
            pop.style.fontFamily='sans-serif';
            pop.style.zIndex="1";
    
            
            pop.style.display='block';
        }
        e.onmouseout = function() {
      document.getElementById('pop').style.display = 'none';
    }
    
    };

//pagination 
    function showTable(id){

        var numOfTables=2;
        for(var i=1;i<=numOfTables;i++)
        {
            if(document.getElementById('table-'+i))
            
                document.getElementById('table-'+i).style.display='none'
         
        }
        if(document.getElementById('table-'+id))
        
            document.getElementById('table-'+id).style.display='block'
    }
    
  //pagination active
  
  

  var header = document.getElementById("pagination_id");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
         
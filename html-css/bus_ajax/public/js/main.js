

function searchFrom()
{
    console.log("insearch")


    var y='';
    var i1=document.getElementById('from');
    var input1=i1.value;
    if(input1.length >= 2 )
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('get','http://localhost:4502/from?starting='+input1,true)
        xmlhttp.send();
        xmlhttp.onreadystatechange =function(){
            if((xmlhttp.status == 200) && (xmlhttp.readyState == 4) )
            {

               

                 y=xmlhttp.responseText;
                 var o=[];
                var o=y.split(',');
                  
                //var ul1=document.getElementById('ul_from');
              var ul1=document.createElement('ul');
              ul1.setAttribute('id','ul_from');
               ul1.style.listStyle='none';
            //    ul1.style.margin
                  
                for(var i=0;i<o.length;i++)
                {
                     var l=document.createElement('li');
                     
                     l.style.color='white';
                     l.style.marginBottom='7px';
                    //  l.setAttribute('id',i);
                     l.innerHTML=o[i];
                    
                     ul1.appendChild(l);
                }

           var div1=document.getElementById('div_from');

           div1.appendChild(ul1);

            }

        }
    }
}





function removeFrom() 
{

    var rem=document.getElementById('div_from');
    var y=document.getElementById('ul_from')
  
    if(y!= null){
     rem.removeChild(y);
    
    }
    
 
 }






 function searchTo()
{
    console.log("insearch")


    var y='';
    var i1=document.getElementById('to');
    var input1=i1.value;
    if(input1.length >= 2 )
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('get','http://localhost:4502/to?starting='+input1,true)
        xmlhttp.send();
        xmlhttp.onreadystatechange =function(){
            if((xmlhttp.status == 200) && (xmlhttp.readyState == 4) )
            {

               

                 y=xmlhttp.responseText;
                 var o=[];
                var o=y.split(',');
                  
                //var ul1=document.getElementById('ul_from');
              var ul1=document.createElement('ul');
              ul1.setAttribute('id','ul_to');
               ul1.style.listStyle='none';
            //    ul1.style.margin
                  
                for(var i=0;i<o.length;i++)
                {
                     var l=document.createElement('li');
                     
                     l.style.color='white';
                     l.style.marginBottom='7px';
                    //  l.setAttribute('id',i);
                     l.innerHTML=o[i];
                    
                     ul1.appendChild(l);
                }

           var div1=document.getElementById('div_to');

           div1.appendChild(ul1);

            }

        }
    }
}





function removeTo() 
{

    var rem=document.getElementById('div_to');
    var y=document.getElementById('ul_to')
  
    if(y!= null){
     rem.removeChild(y);
    
    }
    
 
 }

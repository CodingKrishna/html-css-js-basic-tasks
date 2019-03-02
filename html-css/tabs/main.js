   var tabButtons=document.querySelectorAll('.tabContainer .buttonContainer button');
    var pannelButtons =document.querySelectorAll( '.tabContainer #tabpannel')
console.log(tabButtons,pannelButtons,"printing")
    function showPannel(i,c)
    {
        tabButtons.forEach(function(node){
            node.style.color="";
            node.style.backgroundColor="";
            // console.log(i);
            // console.log(c);

        })
        tabButtons[i].style.backgroundColor=c;
        tabButtons[i].style.color="white";
      

 pannelButtons.forEach(function(node){
            node.style.display="none";
        })
        pannelButtons[i].style.display="block";
       pannelButtons[i].style.color="red";
        pannelButtons[i].style.backgroundColor=c;


    }
    // showPannel(0,'#21e11c');
    
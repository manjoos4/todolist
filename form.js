let usrnm=document.getElementById("usrnm");
let pwd=document.getElementById("pwd");
let form=document.getElementsByClassName("form-container");
function validate(callback){
    if (usrnm.value.trim()=="admin"&&pwd.value==12345){
              return callback();
    }
  else if(usrnm.value!="admin"&&pwd.value==12345){
                 error.innerHTML=" Username is Invalid";
                 error.style.border="3px solid red";
                 error.style.color="yellow"
                 error2.innerHTML=" Password is Valid";
                 error2.style.border="3px solid cyan";
                 error2.style.color="yellow";
                 return false;
             }
  else if(usrnm.value.trim()=="admin"&&pwd.value!=12345){
                error.innerHTML=" Username is valid"
                error.style.border="3px solid cyan";
                error.style.color="yellow"
                error2.innerHTML=" Password is Invalid";
                error2.style.border="3px solid red";
                error2.style.color="yellow";
                return false;
            }
        else{
                 error2.innerHTML=" Username and Password is Invalid";
                  error2.style.border="3px solid red";
                  error2.style.color="yellow"
                  return false;
        }
      function callback()
      {
        error2.innerHTML=" Username and Password is Valid";
        error2.style.border="3px solid cyan";
        error2.style.color="yellow";
      }  
}



var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    
    if(this.readyState==4 && this.status == 200){
        
    
        var response=JSON.parse( this.responseText);
      
                   var output="";

                   for( var i=0; i<response.length;i++)
                   {
                    if(response[i].completed==false){
                      output +=`<input type="checkbox" id="check" onchange="validatecheck()"> &nbsp` +response[i].title+"<br><br>";
                    }
                     else
                     output +=`<input type="checkbox"  checked disabled> &nbsp` +response[i].title+"<br><br>";
                   }
                   document.getElementById("demo").innerHTML=output;

               }
               
           }
           xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
           xhttp.send();
           function validatecheck()
           {
             var totalchecked=document.querySelectorAll('input[id="check"]:checked').length;
             const myPromise=new Promise((resolve,reject) =>{
               if(totalchecked===5){
                setTimeout(function(){
                 resolve()
                 {alert("Congrats ! 5 Tasks have been Successfully completed");
            window.location.reload();}

               },200)
          
             }

            });
          }
        
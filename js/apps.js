
var getData = function(){
    var name = document.getElementById("name").Value;
    var age = document.getElementById("age").Value;
    if(name == ""){
        document.getElementById("name").focus();
    }else{
        if(age == ""){
            document.getElementById("age").focus();
           }  else{            
            console.log(name +" "+ age);
            document.getElementById("name").Value = "";
            document.getElementById("age").Value="";
            document.getElementById("name").focus()
           }
    }  
   
}

var getData = function(){
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").value;  
    var mensaje = document.getElementById("mensaje").value; 
    if(name == ""){
        document.getElementById("name").focus();
    }else {
        if(email == "")
            document.getElementById("email").focus();
           } 

}





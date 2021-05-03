var form = document.getElementById('myForm');
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var submit = document.getElementById('submit');



function checkName(){
    
    var name = username.value.trim();
    if(name.length <= 3){
        vallidMassege(username  , 'name Must be more than 3 charater')
    }
    else{
        deletMass(username)
    }
}



function cheackPassword(){
    var pass = password.value.trim();
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ;
    if(reg.test(pass)){
        deletMass(password)
    }
    else{
        vallidMassege(password  , 'your password must contain at least 8 charcters ,1 small letter ,1capital letter,1number and 1 spcial char')
    }

}



function checkEmail(){
    var mail = email.value.trim();
    var reg = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    if(reg.test(mail)){
        deletMass(email)
    }
    else{
        vallidMassege(email,'check your email')
    }
}

function checkForm(){
    var name = username.value.trim();
    var mail = email.value.trim();
    var reg1 = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    var pass = password.value.trim();
    var reg2 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ;
    if(name.length<=3 || !reg1.test(mail) || !reg2.test(pass)){
        vallidMassege(submit  , 'check the validation on username, email,and password')
        return false;
    }
    else{
        deletMass(submit);
        return true;
    }
}

 

 




function vallidMassege(input,message){
    var small = input.nextElementSibling;
    small.textContent = message;
    small.style.color="red";
}
function deletMass(input){
    var small=input.nextElementSibling;
    small.textContent="";
}



form.addEventListener('input' , function(e){
    switch(e.target.id){
        case 'username':
            checkName();
        break
        case 'password':
            cheackPassword()
        break
        case 'email':
            checkEmail()
        break
    }
}) 









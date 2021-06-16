var errMsg = document.getElementById("error");

function validateAll(){
    if(!checkName()){
        return;
    }else if(!checkPassword()){
        return;
    }else if(!checkEmail()){
        return;
    }
}

function checkName(){
    var name = document.getElementById("name").value;
    if(name == ''){
        errMsg.innerHTML = 'Name cannot be empty';
        return false;
    }else if(!isAlphabet(name)){
        errMsg.innerHTML = 'Name must be alphabet'
        return false;
    }

    return true;
}

function isAlphabet(name){
    for (var i=0; i<name.length; i++) {
        if(!(name.charAt(i) >= 'A') || !(name.charAt(i) <= 'Z') 
        && (!(name.charAt(i) >= 'a') || !(name.charAt(i) <= 'z')))
        return false
    }
    return true
}

function checkEmail(){
    var email = document.getElementById('email').value;
    if(email == ''){
        errMsg.innerHTML = 'Email cannot be empty!';
        return false;
    }else if(!email.endsWith('@gmail.com')){
        errMsg.innerHTML = 'Email must ends with "@gmail.com"'
        return false;
    }
    return true;
}


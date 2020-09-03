function validateName() {
    var field = document.getElementById("name").value;
    var regex = /^[A-Za-z ]+$/;

    if (regex.test(field)){
        document.getElementById("messageName").innerHTML = "Input accepted";
        document.getElementById("messageName").style.color = "green";
    }else {
        document.getElementById("messageName").innerHTML = "Please use only letters";
        document.getElementById("messageName").style.color = "red";
    }
}

function validatePhone() {
    var field = document.getElementById("phone").value;
    var regex = /^[0-9+\-\(\)]{16}$/;

    field = field.split(' ').join('');

    if (regex.test(field) & field.length <=16){
        document.getElementById("messagePhone").innerHTML = "Input accepted";
        document.getElementById("messagePhone").style.color = "green";
    }else {
        document.getElementById("messagePhone").innerHTML = "Please use only 16 or less numbers";
        document.getElementById("messagePhone").style.color = "red";
    }
}

function validateMail() {
    var field = document.getElementById("mail").value;
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regex.test(field)){
        document.getElementById("messageMail").innerHTML = "Input accepted";
        document.getElementById("messageMail").style.color = "green";
    }else {
        document.getElementById("messageMail").innerHTML = "Please use appropriate mail format";
        document.getElementById("messageMail").style.color = "red";
    }
}

function validatePassword() {
    var field = document.getElementById("password").value;
    var regex = /^[A-Za-z0-9]{4,12}$/;

    if (regex.test(field)){
        document.getElementById("messagePassword").innerHTML = "Input accepted";
        document.getElementById("messagePassword").style.color = "green";
    }else {
        document.getElementById("messagePassword").innerHTML = "Please use 4-12 characters for the password";
        document.getElementById("messagePassword").style.color = "red";
    }
}

function validatePassword2() {
    var field1 = document.getElementById("password").value;
    var field2 = document.getElementById("password2").value;
    var regex = /^[A-Za-z0-9]{4,12}$/;

    if (regex.test(field2) & !(field1.localeCompare(field2)) ) {
        document.getElementById("messagePassword2").innerHTML = "Passwords match";
        document.getElementById("messagePassword2").style.color = "green";
        return true;
    }else if (regex.test(field2)) {
        document.getElementById("messagePassword2").innerHTML = "Passwords don't match";
        document.getElementById("messagePassword2").style.color = "red";
    }else {
        document.getElementById("messagePassword2").innerHTML = "Please use 4-12 characters for the password";
        document.getElementById("messagePassword2").style.color = "red";
    }
    return false;
}

function submitForm() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementsByName("skills").value;

    document.getElementById("confirm").innerHTML = "<h2>Confirmation:</h2>";
    document.getElementById("confirm").innerHTML += "<p> Name: "+name+"</br> Phone: "+phone+"</br> Mail: "+mail+"</p>";
    document.getElementById("hidden").style.display = "block";
}

function validateForm() {
    
    if(validatePassword2()){
        return true;
    }else {
        alert("Please check the highlighted fields.")
        return false;
    }
}
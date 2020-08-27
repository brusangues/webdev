function validateName() {
    var field = document.getElementById("name").value;
    var regex = /^[A-Za-z]+$/;

    if (regex.test(field))
        document.getElementById("messageName").innerHTML = "Input accepted";
    else
        document.getElementById("messageName").innerHTML = "Please use only letters";
}

function validateMail() {
    var field = document.getElementById("mail").value;
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regex.test(field))
        document.getElementById("messageMail").innerHTML = "Input accepted";
    else
        document.getElementById("messageMail").innerHTML = "Please use appropriate mail format";
}

function validatePassword() {
    var field = document.getElementById("password").value;
    var regex = /^[A-Za-z0-9]{4,12}$/;

    if (regex.test(field))
        document.getElementById("messagePassword").innerHTML = "Input accepted";
    else
        document.getElementById("messagePassword").innerHTML = "Please use 4-12 characters for the password";
}

function submitForm() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    document.getElementById("confirm").innerHTML = "<h2>Confirmation:</h2>";
    document.getElementById("confirm").innerHTML += "<p>"+name+"</br>"+mail+"</p>";
}
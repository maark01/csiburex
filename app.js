//asztalfoglalás form felület változóinak felvétele

document.getElementById("send").addEventListener("click", () => {
    var name = document.getElementById("name");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    date = document.getElementById("date");

    if (name.value == "" && email.value == "" && phone.value == "" && date.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (email.value == "" && phone.value == "" && date.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (name.value == "" && phone.value == "" && date.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (name.value == "" && email.value == "" && date.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (name.value == "" && email.value == "" && phone.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (phone.value == "" && date.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (name.value == "" && email.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (name.value == "" && date.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (email.value == "" && phone.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (name.value == "" && phone.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (email.value == "" && date.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (date.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-success");
        date.classList.add("border-danger");
    }

    else if (phone.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-success");
        phone.classList.add("border-danger");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (email.value == "") {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-success");
        email.classList.add("border-danger");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else if (name.value == "") {

        name.classList.remove("border-success");
        name.classList.add("border-danger");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    else {

        name.classList.remove("border-danger");
        name.classList.add("border-success");

        email.classList.remove("border-danger");
        email.classList.add("border-success");

        phone.classList.remove("border-danger");
        phone.classList.add("border-success");

        date.classList.remove("border-danger");
        date.classList.add("border-success");
    }

    regexName();
    regexEmail();
    regexPhone();
    regexDate();

    
})


//input mező regex kódjai

function regexName() {
    var name = document.getElementById("name").value;
    var patternName = /^[a-zA-Z0-9._-]+$/;
    
   if(patternName.test(name) !=""){

        console.log("A megadott név helyes: " + name);
    }
    
    else {
        
        alert("Név formátuma nem megfelelő!");
        document.getElementById("name").classList.add("border-danger");
    }
}

function regexEmail() {
    var email = document.getElementById("email").value;
    var patternEmail = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
   if(patternEmail.test(email) !=""){

        console.log("A megadott email helyes: " + email);
    }
    
    else {
        
        alert("Email formátuma nem megfelelő!");
        document.getElementById("email").classList.add("border-danger");
    }
}

function regexPhone() {
    var phone = document.getElementById("phone").value;
    var patternPhone = /^\+[0-9]{10,13}$/;
    
   if(patternPhone.test(phone) !=""){

        console.log("A megadott telefonszám helyes: " + phone);
    }
    
    else {
        
        alert("Telefonszám formátuma nem megfelelő!");
        document.getElementById("phone").classList.add("border-danger");
    }
}

/*
function regexDate() {
    var date = document.getElementById("date").value;
    var patternDate= /^[0-9]{4}\.[0-9]{2}\.[0-9]{2}$/;
    var actualDate= new Date();
    var year = actualDate.getFullYear();
    var month = actualDate.getMonth();
    var day = actualDate.getDay();
    var currentDate = toString(year +" ."+ month+" ."+day+".");

   if(patternDate.test(date) !=""){

        console.log("A megadott dátum helyes: " + date);
    }

    else if (date.value < currentDate) {

        alert("Hibás dátumot adott meg!")
        document.getElementById("date").classList.add("border-danger");
    }
    
    else {
        
        alert("Dátum formátuma nem megfelelő!");
        document.getElementById("date").classList.add("border-danger");
    }
}
*/


function validateForm(form) {
    var email     = document.getElementById("emailUser").value;
    var password1 = document.getElementById("pswd1").value;
    var password2 = document.getElementById("pswd2").value;
    
    // check empty email field
    if(email == "") {
        document.getElementById("blankMsg").innerHTML = "*Masukkan alamat email Anda!";
        return false;
    }

    // check empty password field
    if(password1 == "") {
        document.getElementById("message1").innerHTML = "*Masukkan password Anda!";
        return false;
    }

     // minimum password length validation 
     if(password1.length < 8) {
        document.getElementById("message1").innerHTML = "*Panjang password harus minimal 8 karakter";
        return false;
    }

     // maximum length of password validation
     if(password1.length > 15) {
        document.getElementById("message1").innerHTML = "*Panjang password tidak lebih dari 15 karakter";
        return false;
    }

    // check empty confirm password field
    if(password2 == "") {
        document.getElementById("message2").innerHTML = "*Massukan password Anda dengan benar!";
        return false;
    }

    if(password1 != password2) {
        document.getElementById("message2").innerHTML = "*Password tidak sama";
        return false;
    }

    // confirm checkbox terms and conditions
    console.log("checkbox chacked is ", form.agree.checked);
    if(!form.agree.checked) {
        document.getElementById('agree-chk').style.visibility='visible';
        return false;
    } else {
        document.getElementById('agree-chk').style.visibility='hidden';
        return true;
    }
}

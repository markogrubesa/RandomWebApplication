//check if both passwords are equal
function comparePasswords(){
    var pw1 = document.getElementById("passwort").value;
    var pw2 = document.getElementById("passwort_wdh").value;

    if (pw1 != pw2){
        document.getElementById("alertPassword").innerHTML = "Passwörter stimmen nicht überein!";
        return false;
    }

    else{
        document.getElementById("alertPassword").innerHTML = "";
        return true;
    }
}


//check if username is already used
function checkUsername(){
    //search for username in database
}


//submit new users data
function submitData(){
    alert("Erfolgreich registiert!")
    //create new entry for user in database
}


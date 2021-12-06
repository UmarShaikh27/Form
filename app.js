function showpass(x){
    var passwordinp = document.getElementById("passwordinp")
    // passwordinp.type = "password"
    // x.classList.remove("fa-eye")
    // x.classList.add("fa-eye-slash")
    if(passwordinp.type == "text"){
        passwordinp.type = "password"
        x.classList.remove("fa-eye")
        x.classList.add("fa-eye-slash")
    }
    else if(passwordinp.type == "password"){
        passwordinp.type = "text"
        x.classList.remove("fa-eye-slash")
        x.classList.add("fa-eye")
    }
}
document.addEventListener("DOMContentLoaded", function(){
    let see = document.getElementById("see");
    if(see){
        see.addEventListener("click", function(){
            let password = document.getElementById("password");
            if (password.type === "password") {
                    password.type = "text";
                } else {
                    password.type = "password";
            }
        });
    }

    const passwordInput = document.getElementById("password");

    passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;


    let sixteen = document.getElementById("sixteen");
    if(sixteen)
    sixteen.className = password.length === 16 ? "valid" : "invalid";
    
    let dig = document.getElementById("dig");
    if(dig)
    dig.className = /\d/.test(password) ? "valid" : "invalid";

    let letter = document.getElementById("letter");
    if(letter)
    letter.className = /[A-Za-z]/.test(password) ? "valid" : "invalid";

    let sped = document.getElementById("sped");
    if(sped)
    sped.className = /[^A-Za-z0-9]/.test(password) ? "valid" : "invalid";
});

});
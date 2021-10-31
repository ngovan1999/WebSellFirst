const formInput = document.querySelectorAll(".form-text input");
const formLabel = document.querySelectorAll(".form-text label");
const formLogin = document.querySelector("#login");
const formRegister = document.querySelector("#register");
const next = document.querySelectorAll(".form-login span");

function nextPage(){
        next[0].addEventListener("click", function(){
            formLogin.classList.remove("active");
            formRegister.classList.add("active");
        });
        next[1].addEventListener("click", function(){
            formRegister.classList.remove("active");
            formLogin.classList.add("active");
        });
}


function effectForm(){
    for (let i = 0; i < formInput.length; i++) {
        formInput[i].addEventListener("mouseover", function () {
            formLabel[i].classList.add("focus")
        })
        formInput[i].addEventListener("mouseout", function () {
            if(formInput[i].value==""){
                formLabel[i].classList.remove("focus")
            }
            
        })
    }
}
nextPage();
effectForm();
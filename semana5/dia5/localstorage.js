const btnLogin = document.querySelector("#btn-login")

btnLogin.onclick = function(event){
    event.preventDefault()

    const inputs = document.querySelectorAll("input")
    inputs.forEach((input) => {
        localStorage.setItem(input.name, input.value)
    })
}


//*


const email = localStorage.getItem("email")
const password = localStorage.getItem("password")

const form = document.querySelector("#section-login")
const titleEmail = document.querySelector("#email")
const titlePassword = document.querySelector("#password")

const btn

if (email !== "" && password !== ""){
    form.style.display = "none"
    titleEmail.innerHTML = email
    titlePassword.innerHTML = password
}

    
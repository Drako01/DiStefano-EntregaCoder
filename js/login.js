
const formLogin = document.querySelector("#login"),
    inputUser = document.querySelector("#input-user"),
    inputPass = document.querySelector("#input-pass"),
    loginIncorrecto = document.querySelector("#logint"),
    contenedorForm = document.querySelector(".div-login"),
    logout = document.querySelector("#logout"),
    login = document.querySelector("#loginBtn")
    textoLogout = document.querySelector("#textoLogout");

const datosUsuario = {
        user: "usuario",
        password: "usuario1234"
    };

const storageDates = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
        storageDates("login", true)
        logout.style.display = "block" 
        loginIncorrecto.style.display = "none"
        window.location.href = "index.html";
    } else {
        loginIncorrecto.style.display = "block"
        loginIncorrecto.style.color = "white"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
    }
}


function validarLogin(clave) {
    if (clave !== true) {
        logout.style.display = "none"
    } else {        
        logout.style.display = "block"        
        textoLogout.style.display = "block"
        logout.className = 'btnLogout'
        login.style.display = "none"
        formLogin.style.display = "none"
    }
}

validarLogin(obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem("login")
    validarLogin(obtenerDelLs("login"))
    login.style.display = "block"
    window.location.href = "index.html";
    formLogin.reset()    
}


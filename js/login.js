
const   
        formLogin = document.querySelector("#login"),
        inputUser = document.querySelector("#input-user"),
        inputPass = document.querySelector("#input-pass"),
        loginIncorrecto = document.querySelector("#logint"),
        contenedorForm = document.querySelector("#div-login"),
        logout = document.querySelector("#logout"),
        textoLogout = document.querySelector("#textoLogout");
        login = document.querySelector("#loginBtn"),
        linkItem = document.querySelectorAll(".link-item"),        
        loginBtnInput = document.getElementById("loginBtnInput");
    
        logout.className = 'btnLogout'

const datosUsuario = 
    {
        user: "Alejandro",
        password: "1234"
    };

const storageDates = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

function loginSucss(){         
    logout.style.display = "block"              
    textoLogout.style.display = "block"
    textoLogout.innerHTML = `<h2>Bienvenido <span>${datosUsuario.user}</span> a la Pantalla de Inicio de Sesión</h2>
                            <h2>Desde esta pantalla puede Cerrar la misma.!</h2>`
    login.style.display = "none" 
    contenedorForm.style.display = "none"  
    linkItem.style.display = "none"       
}

// loginBtnInput.addEventListener('click', () => {           
//     linkItem.classList.toggle('active');
// });

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
        storageDates(datosUsuario.user, datosUsuario.password)  
        loginIncorrecto.style.display = "none"        
        return loginSucss()
    } else {         
        loginIncorrecto.style.display = "block"
        loginIncorrecto.style.color = "red"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red" 
    }
}


function validarLogin(clave) {
    if (clave !==  datosUsuario.user) {
        logout.style.display = "none"
    } else { 
        return loginSucss()              
    }
}

validarLogin(obtenerDelLs(datosUsuario.user))

logout.onclick = () => {
    localStorage.removeItem(datosUsuario.user)
    validarLogin(obtenerDelLs(datosUsuario.user))      
    formLogin.reset()   
    contenedorForm.style.display = "flex"  
    window.location.href = "index.html"; 
}


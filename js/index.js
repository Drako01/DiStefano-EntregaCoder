// Defino las Variables (Utilizando todas las formas vistas)
let nombre = 'Alejandro Daniel Di Stefano',
    comision = 44555,
    links = [
            {
                page: 'index',
                link: 'Inicio'
            },
            {
                page: 'products',
                link: 'Productos'
            },
            {
                page: 'contacts',
                link: 'Contacto'
            },
            {
                page: 'maps',
                link: 'Ubicación'
            }
            

        ],    
    formulario = [
        {
            id: 'monto',
            label: 'Monto',
            type: 'text'
        },
        {
            id: 'cantCuotas',
            label: 'Cantidad de Cuotas',
            type: 'text'
        },
        {
            id: 'modalidad',
            label: 'Modalidad de Crédito',
            type: 'select',
            options: ['Frances', 'Aleman']
        },
        {
            id: 'tasaInteres',
            label: 'Tasa de Interés (%)',
            type: 'text'
        },
        {
            id: 'calcular',
            label: 'Calcular',
            type: 'submit'
        }
    ];
const
    d = document,
    copy = d.querySelector('#footer .copy');
    year = new Date(),
    anio = year.getFullYear(),
    logout = document.querySelector("#logout"),
    login = document.querySelector("#loginBtn"); 

function setFooter() {
    copy.innerHTML = `&copy;${anio} ${copy.innerHTML} | ${nombre} de la Comisión #${comision}`;
}
setFooter();


//********** Manejo del DOM **********//

// Defino la Navbar utilizando una Iteracion con forEach
const navBar = () => {
    let nav = d.createElement('nav'),
        ul = d.createElement('ul'),
        btnLog = d.createElement('button'),
        btnLogOut = d.createElement('button'),
        darkMode = d.createElement('button');        

    ul.className = 'menu';
    btnLog.className = 'btnLog';
    darkMode.className = 'darkModeSwitch';    
    btnLog.id = 'loginBtn';
    btnLogOut.id = 'logout';
    darkMode.id = 'switch';       
    
    btnLog.innerHTML  = `<a href="login.html">
                        Inicio de Sesión
                        </a> `
    btnLogOut.innerHTML = `<a href="">Cerrar sesión</a>`   
    darkMode.innerHTML = `  <span></span>   
                            <span></span>`
    links.forEach((name) => {
        ul.innerHTML += `<li class="link-item"><a href="./${name.page}.html">${name.link}</a></li>`;
    })
    nav.appendChild(ul)        
    ul.appendChild(btnLog)
    ul.appendChild(btnLogOut)
    ul.appendChild(darkMode)
    header.appendChild(nav)
    
}
navBar(links);

const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    d.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
});

/* 1er Entrega
    1. Conceptos generales: Sintaxis y variables
    
    2. Control de flujos
    
    3. Ciclos e iteraciones
    
    4. Funciones 

2da Entrega
    5. Objetos
    
    6. Arrays
    
    7. Funciones de orden superior
    
    8. DOM 

3er Entrega
    9. Eventos

    10. Storage & JSON

    11. Workshop

    12. Operadores avanzados 

    ***************************************************

    Autor: Alejandro Daniel Di Stefano
*/ 
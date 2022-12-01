// Defino las Variables (Utilizando todas las formas vistas)
let nombre = 'Alejandro Daniel Di Stefano',
    comision = 44555,
    links = ['Inicio', 'Cotizaciones', 'Nosotros', 'Contacto'],
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
    copy = d.querySelector('#footer .copy'),
    year = 2022;

function setFooter() {
    copy.innerHTML = `&copy;${year} ${copy.innerHTML} | ${nombre} de la Comisión #${comision}`;
}
setFooter();

// Definimos las Variables del Crédito
const calcularInteres = (cuotas) => cuotas <= 12 ? 20 : cuotas <= 18 ? 30 : cuotas <= 24 ? 40 : 50

// Defino valores de las Cuotas y del Monto total con redondeo de 2 Decimales
const calcularCuotas = (i) =>
    modalidad.value == 'Frances' ?
        parseFloat(monto.value * (i / (1 - (1 + i) ** (cantCuotas.value * -1))), 2) :
        modalidad.value == 'Aleman' ?
            parseFloat((monto.value * i) / (1 - (1 - i) ** cantCuotas.value), 2) :
            parseFloat(monto.value, 2) + (monto.value * i)

function resultado(i) {
    let section = d.querySelector('section');
        monto = parseFloat(monto.value),
        cantCuotas = parseInt(cantCuotas.value),
        iva = 1.21,
        mes = 360,
        anual = ((cantCuotas * mes) / 12) / mes,
        cuota = (monto * (Math.pow(1 + i / 100, anual) * i / 100) / (Math.pow(1 + i / 100, anual) - 1)).toFixed(2), // Utilizo Math y pow para las Potencias
        total = Number((cuota * cantCuotas / 10)).toFixed(2),
        totalIVA = Number((total * iva).toFixed(2));

    loan = document.createElement('ul');
        for (let i = 0; i < cantCuotas; i++) {
            loan.innerHTML += `<div class="valor-cuota"><li> El valor de la Cuota ${parseInt(i + 1)} es de: $ ${(cuota / 10).toFixed(2)}.- ARS</li></div>`
        }
    loan.innerHTML += `
            <div class="recuadro">
                <h4>Ud. abonará al finalizar el Crédito:</h4>
                <li>Total s/IVA: $ ${total}.- ARS</li>
                <li>Total c/IVA: $ ${totalIVA}.- ARS</li>
            </div>
        `;
    section.appendChild(loan);

}

//********** Manejo del DOM **********//

// Defino la Navbar
const navBar = (limit = []) => {
    let nav = d.createElement('nav'),
        ul = d.createElement('ul');
    ul.className = 'menu';
    for (let link of limit) {
        ul.innerHTML += `<li><a href="#${link}">${link}</a></li>`;
    }
    nav.appendChild(ul)
    header.appendChild(nav)
}
navBar(links);


// Defino Tabla de Simulación
const sectionTabla = (limits = []) => {
    let
        sectionTabla = d.createElement('section'),
        inputsValues = d.createElement('article');

    sectionTabla.className = 'tabla'
    inputsValues.className = 'imputs-valores'

    for (let field of limits) {
        inputsValues.innerHTML += `
            <div class="imputs">
            ${field.type != 'submit' ?
                `<label for="#${field.id}">${field.label}</label>` : ''
            }   
            ${field.type == 'select' ?
                `<select id="${field.id}">
                ${field.options.map(opt => `<option>${opt}</option>`)}
                </select>` :
                field.type == 'textarea' ?
                    `<textarea id="${field.id}"></textarea>` :
                    field.type != 'submit' ?
                        `<input id=${field.id} type="${field.type}">` :
                        `<button id="${field.id}" 
                    class="boton"
                    onclick="showSelected()">
                    ${field.label}
                </button>`
            }
            </div>`;
    }
    sectionTabla.appendChild(inputsValues)
    main.appendChild(sectionTabla)
}
sectionTabla(formulario);


// Defino tabla de resultados
const showSelected = () => {
    let interes;
    formulario.forEach(field => {
        eval(`const ${field['id']} = document.getElementById('${field['id']}')`);
        interes = calcularInteres(cantCuotas.value);
        tasaInteres.value = interes;
        a = calcularCuotas(interes);
    })
    resultado(interes);
}

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

    ***************************************************

    Autor: Alejandro Daniel Di Stefano
*/ 
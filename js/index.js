// Defino las Variables para el Footer
let nombre = 'Alejandro Daniel Di Stefano',
    comision = 44555;
const     
    d = document,    
    copy = d.querySelector('#footer .copy'),
    year = 2022;
    
    function setFooter(){
        copy.innerHTML = `&copy;${year} ${copy.innerHTML} | ${nombre} de la Comisión #${comision}`;
    }
    setFooter();

    // Definimos las Variables del Crédito
const    
    monto = parseFloat(prompt('Ingrese el Monto que Desea Solicitar: ')),
    cantCuotas = parseInt(prompt('Ingrese la Cantidad de Cuotas que desea financiar: ')),
    iva = parseFloat(1.21),   
    mes = 360,
    anios = ((cantCuotas * mes)/12) / mes;


if(cantCuotas <= 12){
    valorInteres = (1.20)
} else if (cantCuotas > 12 && cantCuotas <= 18){
    valorInteres = (1.30) 
}else if (cantCuotas > 18  && cantCuotas <= 24){
    valorInteres = (1.40) 
}else{
    valorInteres = (1.50) 
}
// Defino valores de las Cuotas y del Monto total con redondeo de 2 Decimales
let
    cuota = (monto * (Math.pow(1+valorInteres/100, anios)*valorInteres/100)/(Math.pow(1+valorInteres/100, anios)-1)).toFixed(2),
    montoTotalsinIva = Number((cuota * cantCuotas / 10)).toFixed(2),
    montoTotal = Number((montoTotalsinIva * iva).toFixed(2));
    
function resultado(){
    for(i=0; i < cantCuotas; i++){
        console.log('El valor de la Cuota Nro ' + parseInt(i+1) + ' ' + 'es de' + ' ' + '$' + (cuota / 10).toFixed(2) + ' ' + 'pesos Argentinos')        
    }
    console.log('Usted adquirió el Préstamo finaciado con el método Francés')
    console.log('El monto totalque debe abonar al finalizar el pago total será de:' + ' ' + '$' + montoTotalsinIva+ ' ' + 'S/IVA')
    console.log('El monto totalque debe abonar al finalizar el pago total será de:' + ' ' + '$' + montoTotal + ' ' + 'C/IVA')
}
resultado();


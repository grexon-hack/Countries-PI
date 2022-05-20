


function calcTime(city, offset) {
    // creamos el objeto Date (la selecciona de la máquina cliente)
   const d = new Date();
 
    // lo convierte  a milisegundos
    // añade la dirferencia horaria
    // recupera la hora en formato UTC
   const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // crea un nuevo objeto Date usando la diferencia dada.
   const nd = new Date(utc + (3600000*offset));
    // devuelve la hora como string.
    let moment = nd.toLocaleString();
    let hora = moment.toString().slice(-8, -6);
    let pmAm = '';
    if(hora >= '12') pmAm = 'pm';
    else pmAm = 'am'

    return "The current time in " + city + " is: " + nd.toLocaleString() + ' ' + pmAm;
}



export function arregloHorario(country,value) {

    
    let primerCorte = value.slice(3).split('');
    let ceroFuera = primerCorte.splice(1,1);
    let copia = primerCorte.join('').split(':');

    if(copia[1] !== '00') copia[1] = Math.floor(parseInt(copia[1]) / 6);

    return  calcTime(country,copia.join('.'))
}



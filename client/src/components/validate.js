
// verificador de errores del formulario, verifica que los campos no esten vacios 
// y que escriban datos inapropiados en dicho formulario.
export function Validate(input) {

    let errors = {};

    if (!input.Name) errors.Name = 'Name is required';
    else if (!/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(input.Name)) errors.Name = 'Not numbers or simbols';
    if (input.Difficult > 5 || input.Difficult < 1) errors.Difficult = 'value must be between 1 and 5';
    if (!input.Duration) errors.Duration = 'Duration is required';
    if (!input.Season1) errors.Season1 = 'Season is required, remember the seasons of the year';
    else if (input.Season1.toLowerCase() === 'otoño' || input.Season1.toLowerCase() === 'primavera' ||
        input.Season1.toLowerCase() === 'verano' || input.Season1.toLowerCase() === 'invierno') return errors;
    else errors.Season1 = 'remember the seasons of the year'

    return errors
}

// verifica que ninguna de las propiedades del estado de actividad este vacio
export function IsEmpty(input) {

    const { Name, Difficult, Duration, Season1 } = input;

    if (!Name || !Difficult || !Duration || !Season1) {
       return alert('You need to fill out the entire form to send the request');
        
    }
    return true
}

// verifica que en el buscador no ingresen datos como simbolos o numeros
export function Whatever(value) {

    if (value === '') return false;
    if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(value)) return true;

    return false
}

// con esta funcion obtengo todos los nombres de actividades sin repetir
export function flat(value) {

    // aca obtengo todos los arrays de actividades de mi estado inicial
    let arr = [];

    value.forEach(t => {
        arr.push(t.TouristActivities)
    })
    // ----------------------------------------------------

    // aca entro a acada array y obtengo los nombres de actividades
    let name = [];

    arr.forEach(t => {
        if (t.length) {
            t.forEach(d => {
                name.push(d.Name)
            })
        }
    })
    // ----------------------------------------------


    // aca quito todas las repeticiones
    let notRepet = name.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    }, [])
    // ---------------------------------

    return notRepet;
}
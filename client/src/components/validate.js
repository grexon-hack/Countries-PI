

export function Validate(input) {

    let errors = {};

    if (!input.Name) errors.Name = 'Name is required';
    else if (/\d|\W/.test(input.Name)) errors.Name = 'Not number';
    if (input.Difficult > 5 || input.Difficult < 1) errors.Difficult = 'value must be between 1 and 5';
    if (!input.Duration) errors.Duration = 'Duration is required';
    if (!input.Season) errors.Season = 'Season is required, remember the seasons of the year';
    else if (input.Season === 'Otoño' || input.Season === 'Primavera' || input.Season === 'Verano' || input.Season === 'Invierno') return errors;
    else errors.Season = 'remember the seasons of the year'

    return errors
}

export function IsEmpty(input) {

    const { Name, Difficult, Duration, Season } = input;

    if (!Name || !Difficult || !Duration || !Season) {
        return alert('You need to fill out the entire form to send the request')
    }
    return true
}

export function Whatever(value) {

    if (value === '') return false;
    if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(value)) return true;
    
    
}

// export function changeWord(value) {
//     let change = value.toLowerCase().split(' ');
//     let ready = '';
//     change.forEach((t) => {
//         let word = t.split('')
//         let first = word.splice(0, 1).join('').toUpperCase();
//         let send = first + word.join('');
//         ready = ready + send + ' ';
//     })


//     return ready
// }

export function flat(value) {
    let arr = [];

    value.forEach(t => {
        arr.push(t.TouristActivities)
    })

    let name = [];

    arr.forEach(t => {
        if(t.length) {
            t.forEach(d => {
                name.push(d.Name)
            })
        }
    }) 

    let notRepet = name.reduce((acc, item) => {
        if(!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    },[])

    return notRepet;
}
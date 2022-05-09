

export function Validate(input) {

    let errors = {};

    if(!input.Name) errors.Name = 'Name is required';
    else if(/\d|\W/.test(input.Name)) errors.Name = 'Not number';
    if(input.Difficult > 5 || input.Difficult < 1) errors.Difficult = 'value must be between 1 and 5';
    if(!input.Duration) errors.Duration = 'Duration is required';
    if(!input.Season) errors.Season = 'Season is required, remember the seasons of the year';
    else if(input.Season === 'Otoño' || input.Season === 'Primavera' || input.Season === 'Verano' || input.Season === 'Invierno') return errors;
    else errors.Season = 'remember the seasons of the year'

    return errors
}

export function IsEmpty(input){

    const { Name, Difficult, Duration, Season} = input;

    if(!Name || !Difficult || !Duration || !Season) {
        return alert('You need to fill out the entire form to send the request')
    }
    return true   
}
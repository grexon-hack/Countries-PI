import { Validate } from "../components/validate";


describe('Validate', () => {
   
    
    
    test('validation form', () => {
        const prueba = {
            Name : 'jose435',
            Difficult : 7,
            Duration : '',
            Season1 : 'noche'
        }
        expect(Validate(prueba)).toEqual({
            Name : 'Not numbers or simbols',
            Difficult : 'value must be between 1 and 5',
            Duration : 'Duration is required',
            Season1 : 'remember the seasons of the year'
        })
    });

    test('expect a empty object', () => {
        const prueba2 = {
            Name : 'Patinaje',
            Difficult : 3,
            Duration : '4 horas',
            Season1 : 'otoño'
        }

        expect(Validate(prueba2)).toEqual({})
    });

    test('expect a object with one property', () => {
        const prueba3 = {
            Name : 'Patinaje',
            Difficult : 3,
            Duration : '4 horas',
            Season1 : ''
        }

        expect(Validate(prueba3)).toEqual({
            Season1 : 'Season is required, remember the seasons of the year'
        })
    })

})


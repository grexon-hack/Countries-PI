import { flat } from "../components/validate";

const pruebaObj = [{
    nombre : 'colombia',
    capital : 'bogota',
    TouristActivities : [{Name : 'sky', Season : 'primavera'}],

},
{
    nombre : 'ecuador',
    capital : 'quito',
    TouristActivities : [{Name : 'patinaje', Season : 'otoño'}],

},
{
    nombre : 'venezuela',
    capital : 'caracas',
    TouristActivities : [{Name : 'sky', Season : 'primavera'}],

}

]

describe('flat', () => {

    test('expect to be typeof Object', () => {
        expect(typeof flat(pruebaObj)).toBe('object');
        expect(typeof flat(pruebaObj)).not.toBe('string');
    });

    test('expect to length be 2', () => {
        expect(flat(pruebaObj).length).toBe(2);
        expect(flat(pruebaObj).length).not.toBe(4);
    })

    test('expect to result be [ "sky", "patinaje" ]', () => {
        expect(flat(pruebaObj)).toEqual(["sky", "patinaje"])
    })
})
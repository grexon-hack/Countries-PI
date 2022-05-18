import { IsEmpty } from "../components/validate";

const pruebas = (val1,val2,val3,val4) => {
    const prueba = {
        Name : val1,
        Difficult : val2,
        Duration : val3,
        Season1 : val4

    }
    return prueba
}
describe('IsEmpty', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {}; 
    test('expect return truthy', () => {
        expect(IsEmpty(pruebas('sky', 3, '1 hora', 'primavera'))).toBeTruthy()
    });
    test('expect return not truthy', () => {
        expect(IsEmpty(pruebas('', 3, '1 hora', 'primavera'))).not.toBeTruthy()
    })
})
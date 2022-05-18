import { Whatever } from "../components/validate";


describe('WhatEver', () => {
    test('expect to be toBeFalsy', () => {
        expect(Whatever('')).toBeFalsy();
        expect(Whatever('nigeria34')).toBeFalsy();
        expect(Whatever('venezuela+')).toBeFalsy();
        expect(Whatever('+-**/')).not.toBeTruthy();
    })
    test('expect to be toBeTruthy', () => {
        expect(Whatever('nigeria')).toBeTruthy();
        expect(Whatever('eCu')).toBeTruthy();
        expect(Whatever('geria')).toBeTruthy();
        expect(Whatever('jApAn')).toBeTruthy();
        expect(Whatever('lol6')).not.toBeTruthy();
    })
})
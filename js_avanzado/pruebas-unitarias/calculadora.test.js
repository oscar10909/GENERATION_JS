//const { TestWatcher } = require('jest');
const {sumar} = require('./calculadora');
const {restar} = require('./calculadora');
describe('Pruebas en el componente calculadora', () =>{
    test('Pruebas en la función sumar', () =>{
        expect(sumar(3,5)).toBe(8);
    });
    test('Pruebas en la función restar', () =>{
        expect(restar(8,3)).toBe(5);
    });
});

/* const {restar} = require('./calculadora');
describe('Pruebas en el componente calculadora', () =>{
    test('Pruebas en la función sumar', () =>{
        expect(sumar(3,5)).toBe(8);
    });
}); */


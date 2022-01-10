/* Operadores aritmeticos sirven para hacer operaciones

    + sumar o contatenar
    - restar
    * multiplicar
    / dividir
    % modulo: obtener el residuo de una división
*/

// el  scope o contexto, es el espacio en el que puede vivir una variable

const num1 = parseInt(prompt('Ingresa el numero 1: ')); //parseInt() sirve para convertir un string o cadena de texto a número
const num2 = parseInt(prompt('Ingresa el numero 2: '));

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;
console.log('Numero 1: ' + num1);
console.log('Numero 2: ' + num2);
console.log('Suma: ' + suma);
console.log('Resta: ' + resta);
console.log('Multiplicacion: ' + multiplicacion);
console.log('Division: ' + division);
console.log(5 % 3); // Se obtiene residuo, 2


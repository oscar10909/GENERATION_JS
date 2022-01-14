/*
    Oscar Sosa G.
    12/01/2022
*/
/* Arrrow-function 
    Manera diferente de hacer funciones
*/
// function sumar(num1, num2) {
//     return num1+num2;
// }

const sumar = (num1, num2) =>{
    return num1+num2;
}

let num1=parseInt(prompt('Número 1: '));
let num2=parseInt(prompt('Número 2: '));
let suma = sumar(num1,num2)

document.write(`La suma de ${num1} y ${num2} es ${suma}`);

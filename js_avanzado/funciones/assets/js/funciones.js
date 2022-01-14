/*
    Oscar Sosa G.
    12/01/2022
*/

/*
    Función
    Bloque de codigo reutilizable
    Puede tener o no parametros de entrada
    Puede devolver o no un valor
*/

function sumar(num1, num2) {
    return num1+num2;
    console.log('Hola desde la función');
}
function restar(num1, num2) {
    document.write(`La resta de ${num1} y ${num2} es ${num1-num2} <br>`);

}

let num1=parseInt(prompt('Número 1: '));
let num2=parseInt(prompt('Número 2: '));
let num3=20;
let sumaNum = sumar(num1,num2)

//template string 
document.write(`La suma de ${num1} y ${num2} es ${sumaNum}`);
document.write('La suma de ' + num1 + ' y ' + num2 + ' es ' + sumaNum);
restar(num1,num2);
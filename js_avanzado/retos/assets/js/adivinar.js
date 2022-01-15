/*
Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado

 */
function random (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
    //Math.random Numero aleatorio entre o y 1
    //Mat.floor te da el numero entero más cercano
}
let numeroSec =random (20, 40);
console.log(numeroSec);


function adivina () {
    let numeroObt = document.getElementById('numero');
    let numero1 = parseInt(numeroObt.value);
    console.log(numero1);
    let diferencia = Math.abs(numero1 - numeroSec);
    if (numero1 == numeroSec) {
        document.getElementById('resultado').innerHTML = `Felicidades, adivinaste el numero secreto`;
    } else if (diferencia <= 5) {
        document.getElementById('resultado').innerHTML = `Calienteeeeee`;
    } else if (diferencia <= 10) {
        document.getElementById('resultado').innerHTML = `Caliente`;
    } else if (diferencia <= 20) {
        document.getElementById('resultado').innerHTML = `Tibio`;
    } else if (diferencia <= 30) {
        document.getElementById('resultado').innerHTML = `Frio`;
    } else if (diferencia >= 30) {
        document.getElementById('resultado').innerHTML = `Congelado`;
    }
}
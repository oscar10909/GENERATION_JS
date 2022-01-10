/*  Las funcines nos sirven para escribir bloques
    de codigo que se pueden reutilizar
*/

/* function sumar()
{
    let num1 = 10;
    let num2 = 20;
    let suma = num1 + num2;
    document.write('<h1>' + suma + '</h1>');
}

sumar() */

function sumar(num1, num2)
{
    let suma = num1 + num2;
    document.write('<h1>' + suma + '</h1>');
}

sumar(30,14);
sumar(20,45);
sumar(15,67);
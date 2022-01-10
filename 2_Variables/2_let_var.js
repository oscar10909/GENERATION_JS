/* variables globales 

VAR: Es una variable que SI puede cambiar su valor.Funciona tanto en el scope global como en el local
Es una variable global y puede ser llamada desde cualquier parte del código
VAR ya no se utiliza mucho

LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
 Sólo se puede acceder a ella desde el bloque en el que se encuentre, es decir afuera de { } es como si no existiera

 LET Y CONST se utilizan en su mayoria

 JavaScript vanilla = JavaScript puro

*/

var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = "Bootcamp";
console.log(texto);

if(true){
    let texto = "Cohorte 8";
    console.log(texto);
}

console.log(texto);
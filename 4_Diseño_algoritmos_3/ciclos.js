/* ciclos-bucles-loops
while
do while
for


let condicion = 1; -valor inicial
while(condicion){
    codigo
    modificacion  a nuestro valor inicial
} */

//imprimir numeros del 1-10
let condicion  = 100;
while (condicion <= 1000){
    console.log(condicion);
    //condicion += 1;
    condicion++;
    //condicion--; caso contrario
}

/* do-while */
//se ejecuta al menos una vez
let num2 = 1;
do{
    console.log(num2);
    num2++;
}while (num2 <= 10);

/* for */
for (let control = 1; control <= 10; control++){
    console.log('control');
}

//hay una pequeña diferencia entre < y <= en este ejemplo con arrays
//por lo tanto con <= saldria un indefinido ya que la posición 4 no existe en el arreglo
const comidas  = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];
for(let i = 0; i < comidas.length; i++){
    console.log(comidas);
}

/*Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
 */

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];
for(let i = 0; i < numeros.length; i++){
    resultado[i] = numeros[i]*2;
    console.log(resultado[i]);
}
console.log(resultado);
i=0;
while(i < numeros.length){
    resultado.push
    resultado[i] = numeros[i]*2;
    console.log(resultado[i]);
    i++;
}
console.log(resultado);
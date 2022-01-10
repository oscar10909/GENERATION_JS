/*
Arreglos 
*/

const comidas  = [];

console.log(comidas.length);

/*push - Agrega al final 
  pop - quita al final
  unshift -
  shift - 
*/
comidas.push('Tortas');
console.log();

comidas.unshift('Pancita');
console.log();

comidas.pop();

/*For each: nos puede servir para realizar
una acción por cada elemento del,arreglo*/

/* console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]); */
comidas.forEach(function (el){
    console.log(el);
});

const numeros = [1, 4, 7, 8];
console.log(numeros);
//suma +1 a cada numero
numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma);
})

//como tal no modifica el arreglo
console.log(numeros);

/*Ejercicio*/
const arr = [];
function suma(num){
    let sumNum = num + 1; 
    return arr.push(sumNum);
}
suma(3);
suma(5);
suma(6);
suma(2);
suma(78);
//arreglo ha sido modificado
console.log(arr);

const arr1 = [];
function suma1(num){
    let sumNum = num + 1; 
    return arr1.unshift(sumNum);
}
suma1(3);
suma1(5);
suma1(6);
suma1(2);
suma1(78);
//arreglo ha sido modificado
console.log(arr1);
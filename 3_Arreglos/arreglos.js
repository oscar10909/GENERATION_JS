/*
    Arreglos: colección de elementos que tienen métodos o funciones que 
    nos permiten ordenar y manipular los datos almacenados
*/

//metodo 1
const array01 = []; //vacio
console.log(array01);

//metodo 2
const array02 = Array.of(1, "hola", true);
console.log(array02);

//metodo oldie 
const array03 = new Array(3, true, "baibai");
console.log(array03);


//let se puede reasingar valor
let variable01 = 3;
console.log(variable01);
variable01 = "Niza";
console.log(variable01);

/*
const no se puede reasignar, usar con arrays
El siguiente código marcará error

const variable02 = 5;
console.log(variable02);
variable02 = 2;
console.log(variable02);
*/

//Russian doll array 
const arrayRuss = [4, "niet", true, [1, 2 , 3]]; //array de arrays
console.log(arrayRuss);

const fruits = ["apple", "orange", "grapes", "watermelon", [1, 2 , 3, 4, 5, ["a", "b", "c"]]];
//notación de corchetes 
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[4]);
//imprimir un elemento del arreglo en especifico 
console.log(fruits[4][4]);
console.log(fruits[4][5][1]);
console.log(fruits);

//para hacer un push en un arreglo anidado se debe marcar la ruta del mismo dentro del arreglo principal 
fruits[4][5].push("d");
console.log(fruits);

//metodos para manipular elementos de un arreglo
//length: conocer la longitud de nuestro arreglo
const letters = ["a", "b", "c", "d"];
console.log(letters.length);

//push: añade un elemento al final del arreglo
letters.push("e");
console.log(letters);

//pop: elimina el ultimo elemento del arreglo
letters.pop();
console.log(letters);

//unshift: agrega un elemento al inicio del arreglo
letters.unshift(1);
console.log(letters);

//shift: elimina el primer elemento del arreglo
letters.shift();
console.log(letters);
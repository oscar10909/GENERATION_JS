let numeros = [1,3,13,23,532,328,123,6865,812];

/*  ejecuta la función indicada una vez por cada elemento del 
    array. Ayuda a recorrer los elementos de un array. */

/* numeros.forEach(function (numero) {
    document.write(numero+ ', ');
}); */

numeros.forEach(function (elemento, indice,arreglo) {
    document.write(elemento + '-'+indice+'-'+arreglo+'<br/>');
});

numeros.forEach(item =>{
    console.log(item);
});

/*  crea un nuevo array con los resultados de la llamada a la 
    función indicada aplicados a cada uno de sus elementos. */
//let numeros2 = numeros; esto solo hace que ambos arreglos apunten
//a la misma información, a misma dirección de memoria donde se almacena
let numeros2 = numeros.map(function(item) {
    return item*2; //
});
document.write('<br/>'+numeros2)

let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(item) {
    return item; 
});
frutas2.push('pera');
document.write('<br/>'+frutas+'<br/>')
document.write('<br/>'+frutas2+'<br/>')

/* Includes: determina si un array incluye un determinado 
elemento, devuelve true o false según corresponda*/
document.write('<br/>'+numeros.includes('hola')+'<br/>'); //false

/* Filter: crea un nuevo array con todos los elementos que 
cumplan la condición implementada por la función dada */
/* crea arreglo con solamente numeros pares */
let numerosPares = numeros.filter(item =>{
    /* if(item % 2==0){
        return true;
    }else{
        return false;
    } */
    console.log(item % 2 == 0);
    return item % 2 == 0;

    /* if(item >13){
        return true;
    } */
});
document.write('<br/>'+numerosPares+'<br/>')

let frutas3 = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate'];
/* crea arreglo con solo frutas con m */
let frutasFiltro = frutas3.filter(item =>{
    // if(item.includes('a')==true)
    // {
    //     return true;
    // }
    return item.toLowerCase().includes('m');//includes('M'||'m')
});
document.write('<br/>'+frutasFiltro+'<br/>');

/* sort: ordena los elementos de un array localmente y 
devuelve el array. La ordenación no es necesariamente 
estable. El modo de ordenación por defecto responde a 
la posición del valor del string de acuerdo a su valor 
Unicode. NO UTILIZAR*/
let otrosNumeros = [9,2,3,5,1,4,8,6,7]
document.write('<br/>'+otrosNumeros.sort()+'<br/>');

document.write('<br/>'+otrosNumeros.reverse()+'<br/>');

/* find: obtinene el primer elemento que cumpla con condición */
let frutaEncontrada = frutas3.find(item =>{
    return item.toLowerCase().includes('manzana');
});
document.write('<br/>'+frutaEncontrada+'<br/>');

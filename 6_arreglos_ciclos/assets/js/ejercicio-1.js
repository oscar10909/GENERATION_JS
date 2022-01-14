let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let suma=0;
let prom;
for(let i = 0; i < numeros.length; i++){ //i+n
    suma += numeros[i];
}
prom = suma/numeros.length;
document.write('La suma de los elementos del arreglos es: '+suma+'<br/>');
document.write('El promedio de la suma es: '+prom+'<br/>');
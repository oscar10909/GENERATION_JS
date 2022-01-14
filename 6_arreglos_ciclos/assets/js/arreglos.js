/* const numeros = [5]: */
let numeros = new Array();
numeros = [1,3,13,23,532,328,123,6865,812];
document.write(numeros[5])
for(let i = 0; i < numeros.length; i++){ //i+n
    const numero = numeros[i]
    document.write(numero + '<br/>')

    document.write(`${numeros[i]}<br/>`) //<br/> es salto de fila
}

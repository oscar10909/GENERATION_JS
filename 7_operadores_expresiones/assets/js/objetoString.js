let cadena1="Hola";
console.log(cadena1);

let cadena2 = new String("Adiós"); //creacion de objeto String
console.log(cadena2);
//Los objetos tienen propiedades, 

console.log(cadena2.toLowerCase().includes("a"));
//convierte a minus p mayus
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());
//cohersión, JS realiza automatiamente conversión de un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Funcion que recibe palabra y regresa  */
let palabra = "Hola Mundo";
let arreglo = palabra.split("");
console.log(arreglo);

console.log(arreglo.reverse().join(""));

function invertirPalabra(cadena) {
    //convierte cadea en arreglo
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join(""); //
    return console.log(cadenaInvertida);
}
invertirPalabra("Generation Hola")


let frase = document.getElementById("palabra");
function invertido() 
{
    let opcion = prompt("Introduzca la frase:");
    if (opcion == null || opcion == "") {
        frase.textContent = "Has cancelado o no has introducido la frase";
    } 
    else {
        let arreglo = opcion.split("");
        frase.textContent = arreglo.reverse().join("");
    }
}


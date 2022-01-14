/*
    Oscar Sosa G.
    12/01/2022
*/
/* orden en que se ejecutan las declaraciones*/

/* estructuras de control de flujo */
let edad=18;
let tienesINE=false;

if(edad >= 18 && tienesINE==true){
    console.log('Puedes entrar');
}
else{
    console.log('No puedes entrar');
}

/* Operador ternario */
/* 
condición a evaluar? se ejecuta si es verdadero:
se ejecuta si es falso */

/* Utilizar solo cuando hay una condición pequeña a evaluar */
let edad1=19;
edad1 >= 18
? console.log("Mayor de edad")
: console.log("Menor de edad")

let pregunta = (edad1 >= 18)
    ? "Mayor de edad"
    : "Menor de edad";
console.log(pregunta);

let preguntaEdad = `Tengo ${edad1}
años y soy ${(edad1 >= 18) ? "Mayor de edad": 
"Menor de edad"}`;
console.log(preguntaEdad)

let dia=3;
if(dia===0){
    console.log("Domingo");
}else if (dia === 1){
    console.log("Lunes");
}else if (dia === 2){
    console.log("Martes");
}else if (dia === 3){
    console.log("Miercoles");
}else if (dia === 4){
    console.log("Jueves");
}else if (dia === 5){
    console.log("Viernes");
}else if (dia === 6){
    console.log("Sabado");
}else{
    console.log("No es un día válido")
}

/* Switch-case */

switch(dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("No es un día válido");
        break;
}

let cuponDescuento = "Oro";
let descuento;
switch(cuponDescuento){
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupón erróneo");
        break;
}

console.log(descuento)
/* Aritmeticos */
let operacion = 3*5+(10-5);
console.log(operacion);

let operacion2 = 3-5/2*4; //-7
console.log(operacion2);

/* Relacionales */
console.log(7<7); 
console.log(7<=7);

console.log(7=='7');//solo compara el valor, dara TRUE
console.log(7===7);//operador esctricto, compara valor y tipo de dato, FALSE
console.log(7!='7');//dara FALSE
console.log(7!==7);//dara TRUE

/* Incremento, decremento */
let incremento = 5;
incremento += 5;
console.log(incremento);//10
incremento -= 5;
console.log(incremento);//5
incremento *= 5;
console.log(incremento);//25
incremento /= 5;
console.log(incremento);//5

let sumar = 0;
console.log(sumar + " linea 29");
sumar++;
console.log(sumar + " linea 31");
sumar++;
console.log(sumar);
sumar--;
sumar--;
console.log(sumar);


let num=5;
console.log(num++); //5
console.log(num);//6

for (let i = 0; i < 5; i++) {
    console.log("Este es el ciclo padre")
    for (let j = 0; j < 10; j++) {
        console.log("Este es el ciclo hijo")
    }
}


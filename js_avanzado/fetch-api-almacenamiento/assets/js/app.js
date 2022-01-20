/*Codigo síncrono */

let vSincro;
vSincro = 10*3;
console.log(vSincro);

/*Codigo asincrono */
let vAsincro;
setTimeout(() =>{
    vAsincro = 10*3;
    console.log(vAsincro);
},2000);
console.log(vAsincro); //lo define como undefined
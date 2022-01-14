let precio = parseInt(prompt("introduce precio total: "))
let cuponDescuento = prompt("introduce cupon: ")


const descuentoCupon = (precio, descuento) =>{
    let precioNuevo;
    precioNuevo = precio *((100-descuento)/100)
    return precioNuevo;
}

let descuento;
let precioNew;
switch(cuponDescuento){
    case "Bronce":
        descuento = 5;
        precioNew=descuentoCupon(precio, descuento)
        break;
    case "Plata":
        descuento = 10;
        precioNew=descuentoCupon(precio, descuento)
        break;
    case "Oro":
        descuento = 15;
        precioNew=descuentoCupon(precio, descuento)
        break;
    case "Platino":
        descuento = 25;
        precioNew=descuentoCupon(precio, descuento)
        break;
    default:
        console.log("Cupón erróneo");
        break;
}

console.log(`El precio total es de ${precio}`)
console.log(`El precio con descuento es de ${precioNew}`)



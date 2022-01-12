
let mensaje=document.getElementById("name")

function nombre() 
{
    let opcion = prompt("Introduzca su nombre:", "Oscar");
    if (opcion == null || opcion == "") {
        mensaje.textContent = "Has cancelado o introducido el nombre vacío";
    } 
    else {
        mensaje.textContent = "Hola " + opcion;
    }
}

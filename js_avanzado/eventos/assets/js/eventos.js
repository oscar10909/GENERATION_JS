let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

$btnMensaje.addEventListener('click', ()=>{
    console.log("Yamete kudasai");
}); 

/* $mensaje.addEventListener('keydown', mostrarConsole);//sin parentesis para que no lo ejecute, no la invocamos
function mostrarConsole() {
    console.log('escribiste algo')
}  */

$mensaje.addEventListener('keydown', (e) =>{
    console.log(e.target.value);
    if(e.target.value.length < 3){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
});
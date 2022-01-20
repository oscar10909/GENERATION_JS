let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id ='texto';
//$texto.style = 'color: red; font-size: 24px';
$texto.className = 'bg-purple h3'; //agregar clase

//eliminar clase
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple')
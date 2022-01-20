/*  Oscar Sosa G.
    17/01/2022 */
let $titulo = document.getElementById('titulo');//getElementsByClassName,TagName,TagNameNS,Name
console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde JS';

/* $ variable que hace referencia a un elemento del DOM
variable guarda algún elemento del dom, o de HTML en sí*/
let $subtitulo = document.querySelector('#subtitulo'); //'p,h1,etc', '.class', '#id o #etiqueta'
$subtitulo.textContent = 'Subtitulo escrito desde JS';
//-------------------------------------------------

//crear elemento en memoria, aun no en documento HTML
//al crearlo asi podemos modificar sus caracteristicas o contenido
//antes de ponerlo en el DOM, buenas prácticas
let subtitulo2 = document.createElement('h3');
subtitulo2.textContent = 'Este es otro subtitulo desde  JS';
//document.body.append(subtitulo2); //agrega elemento al final del doc
$titulo.insertAdjacentElement("afterEnd", subtitulo2); //posiciona sub despues de titulo
//$titulo.remove(); //elimina elemento, en este caso titulo
//-------------------------------------------------
let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);
let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);


let $contenido = document.querySelector('#contenido');
console.log($contenido.textContent = '<br/>'); //no nos permite agregar etiquetas HTML, solo lo reconoce como texto
console.log($contenido.innerHTML = 'Hola<br/>Oscar');

//lo que colocas dentro del parentesis, se convierte en hijo o hermano de lo que ya existe
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);

//cambia por completo lo que ya ha hecho en el div, descomentar para probar
//console.log($contenido.outerHTML = 'Hola Mamá')


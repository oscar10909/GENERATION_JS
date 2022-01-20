/* Oscar Sosa G.
Programa realizado en equipo */
/* Consumiendo una API, crear una card en bootstrap para todos los elementos */
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(resp => resp.json())
    .then(data=>{
        data.forEach(element => {
            let imagen = element.thumbnailUrl;
            let titulo = element.title;    
            let $cartas = document.querySelector('#cartas');
            let crearCarta = document.createElement('div');
            crearCarta.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
            </div>
            </div>`;
            $cartas.appendChild(crearCarta);
        });
    });

let $btnGato = document.querySelector('#btnGato');
let $btnPerro = document.querySelector('#btnPerro');

$btnGato.addEventListener('click', () => {
    console.log('No me presiones');
    /*hace peticion a URL, devulev una promesa, cuando fetch respnda
    algo, la respuesta la procesas como JSON (objeto), eso
    a su vex regresa otra promesa, pero ya obtiene la informacion
    para procesarla */
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data=>{
            console.log(data); //me devuelve un arreglo, y dentro un objeto
            let imagenMichi = document.createElement('img');
            imagenMichi.src = data[0].url;
            document.body.appendChild(imagenMichi);

        });
            /* {
            console.log(resp);
        }) */
        /* resp => resp.json()
        function (resp) {
            resp.json
        }*/
});

$btnPerro.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data=>{
            console.log(data); //me devuelve un arreglo, y dentro un objeto
            let imagenDoggo = document.createElement('img');
            imagenDoggo.src = data.message;
            document.body.appendChild(imagenDoggo);

        });
})
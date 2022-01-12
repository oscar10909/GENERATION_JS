//los objetos se utilizan 
//para almacenar información importante
let persona = {
    nombre: {
        apellidoPaterno: 'Sosa',
        apellidoMaterno: 'Garcia',
        nombre: 'Oscar'
    },
    edad: 25,
    direccion: {
        ciudad: 'Jalisco',
        estado: 'Guadalajara'
    },
    numero: [
        54321,
        67890
    ]
}

console.log(persona.nombre.nombre);
console.log(persona.nombre);

//esta info no esta agrupada,
//relacionada entre ella, cada
//una es variable independiente
let nombre = 'Oscar S.';
let edad = 31;
let direccion = 'Acapulco. Guerrero';
let numero = 12345;

console.log(nombre);

let telefono_cel = {
    marca:{
        huawei:{
            modelo:{
                normal:{
                    colores:[
                        'negro',
                        'gris',
                        'blanco'
                    ]
                },
                lit: {
                    colores:[
                        'rojo',
                        'amarillo',
                        'azul'
                    ]
                }
            },
        },
        apple:{
            almacenamiento:[
                '64 GB', 
                '256 GB',
                '512 GB'
            ],
        }
    },
}



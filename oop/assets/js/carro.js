/* Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
 */


class Carro{
        constructor(marca,color, modelo, velocidad, numPuertas){
            //console.log('Este es un constructor');
            this.marca = marca;
            this.color = color;
            this.modelo = modelo;
            this.velocidad = velocidad;
            this.numPuertas = numPuertas;
        }

        //metodos = funciones
        acelerar(){
            this.velocidad++;
            document.write(`La velocidad actual es ${this.velocidad} <br/>`)
        }
        frenar(){
            this.velocidad = 0;
            document.write(`La velocidad actual es ${this.velocidad} <br/>`)
        }
        reversa(){
            this.velocidad--;
            document.write(`La velocidad actual es ${this.velocidad} <br/>`)
        }
    
        toString(){
            let mensaje = `El carro con caracteristicas: <br/> Marca: ${this.marca} <br/> Color: ${this.color} <br/> Modelo: ${this.modelo} <br/> # de puertas: ${this.numPuertas} y su velocidad actual es ${this.velocidad} <br/>`;
            document.write(mensaje);
        }
    }

    const Carro1 = new Carro('ferrari', 'rojo', 'f80',0,2);
    Carro1.acelerar();
    Carro1.acelerar();
    Carro1.frenar();
    Carro1.reversa();
    Carro1.toString();
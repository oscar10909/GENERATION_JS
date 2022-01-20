// clases, molde que nos permite crear objetos
/*class Animal{
    //en JS se omite en otros lenguajes no
    nombre;
    especie
    constructor(nombre, especie){
        console.log('Este es un constructor');
        nombre = nombre;
        especie = especie;
    }
} */


class Animal{
/*En el constructor se pondrían los valores iniciales, 
si tu necesitas recuperar los valores o cambiarlos necesitas 
los métodos get y set
 */
    constructor(nombre, especie){
        console.log('Este es un constructor');
        this.nombre = nombre;
        this.especie = especie;
    }

    //getters y setters = metodos que se usan dentro de una clase
    //para obtener o fijar/cambiar el valor de una variable
    //solamente leen o modifican el atributo
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie = especie;
    }
    //metodos = funciones
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br/>`)
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br/>`;
        return dpcument.write(mensaje);
    }

    //metodo estatico
    /*Metodo que va vivir, pertenece a la clase pero no 
    se hereda a cada uno de los objetos que tenemos*/
    static saludar(){
        return console.log('Hola, soy un método estático');
    }
}

//Heredan los atributos y los metodos de la clase que utilizan
 //crear objeto
//instanciar: hacer copia, crear un objeto
console.log(Animal1);
const Animal2 = new Animal('Pecas', 'Gato'); //crear objeto
console.log(Animal2);
const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

document.write(Animal1.nombre);
Animal1.nombre = "Scrappy";
document.write(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre("Oddie"); //metodo para cambiar el valor

/* get y set se consideran funciones especiales, 
por eso su funcionamiento es diferente*/

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre)

//esta siendo llamado aunque aun no se cree un objeto en el
Animal.saludar();
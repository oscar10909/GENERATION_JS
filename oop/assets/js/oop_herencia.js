class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    attack(){
        return console.log(`${this.nombre} está atacando.`)
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad = edad;
    }
    //metodos
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando`);
    }
}

class electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color = color;
    }
}

const Pikachu1 = new Pikachu("Juan", "Eléctico", 3);
console.log(Pikachu1);
Pikachu1.attack();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego");
Pokemon1.attack();
Pokemon1.evolucionar(); //genera error ya que esta al ser padre no tiene 
//atributos del hijo

const electrico1 = new electrico("Panchito", "Electrico", 4, "Gris");
console.log(electrico1); 
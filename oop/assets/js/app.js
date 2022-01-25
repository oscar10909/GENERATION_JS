class Animalito{
    constructor(nombre, edad, especie, revisado){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.revisado=revisado;
        this.emfermo=false;
    }
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}
//this: variable interna que apunta al atributo del objeto
class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente agregado <br/>`
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }
    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados(); //llamando a otro metodo de esta misma clase
            //this.pacientesRevisados++;
            document.write('<br>Paciente ha sido revisado');
        }else{
            document.write("<br>Este paciente ya fue revisado");
        }
    }
    mostrarLista(){
       for(let i = 0;i < this.listaPacientes.length; i++){
           document.write(" " + this.listaPacientes[i].nombre);
       }
       document.write(`<br>cantidad de pacientes; ${this.cantidadPacientes} <br/>
       Pacientes revisados: ${this.pacientesRevisados} <br>`);
    }
}

//objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro', false);
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true);
console.log(Animalito1);

const VeterinarioOscar = new Veterinario();

VeterinarioOscar.agregarPaciente(Animalito1);
VeterinarioOscar.agregarPaciente(Animalito2);

VeterinarioOscar.mostrarLista();
VeterinarioOscar.revisarPaciente(Animalito1);
VeterinarioOscar.mostrarLista();

VeterinarioOscar.revisarPaciente(Animalito2);
/*Operador de corto circuito; nos permite dejar 
un valor por defecto, en caso de no ingrese un valor o el valor
sea negativo */

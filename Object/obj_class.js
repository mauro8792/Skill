class Persona {
    constructor(titulo, nombre, edad) {
        this.titulo = titulo;
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Empleado extends Persona{
    constructor(titulo, nombre, edad,sueldo, antiguedad){
        super(titulo, nombre,edad);
        this.sueldo=sueldo;
        this.antiguedad= antiguedad;
    }

}

let emp = new Empleado("sr", "mauro", 27, 40000, 5);
console.log(emp);

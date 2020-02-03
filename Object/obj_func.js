function Persona(titulo, nombre, edad) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.edad = edad;
    
}




function Empleado(titulo, nombre, edad, sueldo,antiguedad) {
    Persona.call(this, titulo, nombre, edad);
    this.sueldo = sueldo;
    this.antiguedad = antiguedad;
}

 function Estudiante(titulo, nombre, edad, nLegajo, nColegio) {
    Persona.call(this, titulo, nombre, edad);
    this.nLegajo = nLegajo;
    this.nColegio = nColegio;
} 
Estudiante.prototype = Object.create(Persona.prototype)
Estudiante.prototype.constructor = Estudiante;

function Profesor(titulo, nombre, edad, sueldo,antiguedad, nColegio, grado) {
    Empleado.call(this,titulo, nombre, edad, sueldo,antiguedad);
    this.nColegio = nColegio;
    this.grado = grado
}
Profesor.prototype = Object.create(Persona.prototype)
Profesor.prototype.constructor = Profesor;

function Instituto(nombre,direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.profesores = [];
}

Instituto.prototype.getProfesores =  function () {
    console.log("Listado de los profesores");   
    
    this.profesores.forEach(profe => {
        console.log(`Nombre: ${profe.nombre}, Edad: ${profe.edad}`);       
    });
    
}
Instituto.prototype.setProfesores =  function (profe) {
    this.profesores.push(profe);
}


Persona.prototype.saludar =  function () {
    console.log(`Hola soy el/la ${this.titulo} ${this.nombre}`);
    
}
Empleado.prototype.toString =  function () {
    console.log(`El es ${this.nombre}, y tiene ${this.antiguedad} en la empresa`);
    
}
let gianelli = new Instituto('San antonio Maria Gianelli', 'Av 39 4458');

let veronica = new Profesor('Sra', "Veronica", 50, 40000, 7, gianelli.nombre, 3);
let osmar = new Profesor('Sr', "Osmar", 50, 40000, 7, gianelli.nombre, 3);
let Gabriela = new Profesor('Sra', "Gabriela", 50, 40000, 7, gianelli.nombre, 3);

let dario = new Estudiante('Sr','Mauro', 27, 40000, "antonio");
let mauro = new Empleado('Sr','Mauro', 27, 40000, 7);
mauro.toString();


gianelli.profesores.push(veronica);
gianelli.profesores.push(osmar);
gianelli.profesores.push(Gabriela);





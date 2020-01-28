
function Person(id,nombre, email, edad){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
}

let personas=[];

personas.push(new Person(1,"mauro", "mauro@hotmail.com", "28"));
personas.push(new Person(2,"sofia", "sofia@hotmil.com", 18));
personas.push(new Person(3,"silvia", "silvia@hotmail.com", 55));
personas.push(new Person(4,"mario", "mario@hotmail.com", 56));
personas.push(new Person(5,"mica", "mario@hotmail.com", 10));

function cargarPersonas(){
    insertarFila();
}
window.onload = function() {
    
};

let ids= 6;

document.addEventListener("DOMContentLoaded", function () {
    cargarPersonas();
    document.getElementById("formulario").addEventListener("submit",agregarPersona);
});



function agregarPersona(evento){    
    evento.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let id = ids;
    
    let persona = new Person(id,nombre,email,edad);
    personas.push(persona);
    ids=ids+1;
    console.log(personas);
    
    insertarFila();
    evento.target.reset()/* 
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    document.getElementById('email').value=""; */

}



function insertarFila() {

    var tabla = document.getElementById("tabla1");
    for (x = tabla.rows.length - 1; x > 0; x--) {
        tabla.deleteRow(x);
    }
    var tabla2 = document.getElementById("tabla2");
    for (x = tabla2.rows.length - 1; x > 0; x--) {
        tabla2.deleteRow(x);
    }
    
    
    for (let i = 0; i < personas.length; i++) {
        
        if (personas[i].edad>12) {
            var fila = tabla.insertRow(-1);
            var celda1 = fila.insertCell(0);
            var celda2 = fila.insertCell(1);
            var celda3 = fila.insertCell(2);
            var celda4 = fila.insertCell(3);
            celda1.innerHTML = personas[i].nombre;
            celda2.innerHTML = personas[i].email;
            celda3.innerHTML = personas[i].edad;
            celda4.innerHTML = "<button value="+ personas[i].id +" onclick=eliminarFila("+personas[i].id+")> eliminar</button>";
        }else{
            
            var fila = tabla2.insertRow(-1);
            var celda1 = fila.insertCell(0);
            var celda2 = fila.insertCell(1);
            var celda3 = fila.insertCell(2);
            var celda4 = fila.insertCell(3);
            celda1.innerHTML = personas[i].nombre;
            celda2.innerHTML = personas[i].email;
            celda3.innerHTML = personas[i].edad;
            celda4.innerHTML = "<button value="+ personas[i].id +" onclick=eliminarFila("+personas[i].id+")> eliminar</button>";
        }        
    }   
  
 }

 function eliminarFila(id){
     let sacar = personas.find(persona => persona.id == id);
     eliminarDelArreglo(personas,sacar);
     insertarFila();
    
 }
 function eliminarDelArreglo ( array, persona ) {
    var i = array.indexOf( persona );
    array.splice( i, 1 );
}
 

 
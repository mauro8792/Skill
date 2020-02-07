/* import Modelo  from "./modelo.js";
import Controlador from "./controlador.js";
import Vista from "./vista.js";
 */
const modelo = new Modelo();
const controlador = new Controlador(modelo);

let persona = {"id":1,"nombre":"Mauro","email": "mauro@hotmail.com","edad": "28"};
let persona1 = {"id":2,"nombre":"Sofia","email": "sofia@hotmail.com","edad": "18"};
let persona2 = {"id":3,"nombre":"Mario","email": "mario@hotmail.com","edad": "56"};
let persona3 = {"id":4,"nombre":"Pamela","email": "pamela@hotmail.com","edad": "10"};
let persona4 = {"id":5,"nombre":"Micaela","email": "micaela@hotmail.com","edad": "11"};

controlador.agregar(persona); 
controlador.agregar(persona1); 
controlador.agregar(persona2); 
controlador.agregar(persona3); 
controlador.agregar(persona4);

const vista = new Vista(controlador);


modelo.suscribirse(vista.insertarFila);

const envarMail = personass => 
    console.log("enviando mail a",  personass[ personass.length -1 ].nombre );

const cerrarSala = personass => {
    if ( personass.length > 10 ) console.log("Sala cerrada");
}

modelo.suscribirse( envarMail )
modelo.suscribirse( cerrarSala ) 

//vista.init();
















 
 

 
class Vista{
    constructor( controlador, modelo){
        this.controlador = controlador;
        this.init();
        this.ids=6;
        }
    init(){
        this.insertarFila(this.controlador.obtener());
        const contexto = this;
        document.addEventListener("DOMContentLoaded", function () {
            
            document.getElementById("formulario").addEventListener("submit",function (evento) {
                
                evento.preventDefault();
                
                let nombre = document.getElementById("nombre").value;
                let email = document.getElementById("email").value;
                let edad = document.getElementById("edad").value;
                let id = contexto.ids;
                
                let persona = {id,nombre,email,edad};
               
                
                contexto.controlador.agregar(persona);
                contexto.ids=contexto.ids+1;
                
                contexto.insertarFila( contexto.controlador.obtener() );
                evento.target.reset()
            });
        });
    }
    render(){
        //this.cargarArreglo();
    }
    
     
    
    /* agregarPersona(evento){    
        let ids= 6;
        evento.preventDefault();
        
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let edad = document.getElementById("edad").value;
        let id = ids;
        
        let persona = new Modelo(id,nombre,email,edad);
        this.controlador.agregar(persona);
        ids=ids+1;
        
        insertarFila();
        evento.target.reset()
    
    } */
    insertarFila(personass) {
        
        var tabla = document.getElementById("tabla1");
        for (let x = tabla.rows.length - 1; x > 0; x--) {
            tabla.deleteRow(x);
        }
        var tabla2 = document.getElementById("tabla2");
        for (let x = tabla2.rows.length - 1; x > 0; x--) {
            tabla2.deleteRow(x);
        }
        
        
        for (let i = 0; i < personass.length; i++) {            
            if (personass[i].edad>12) {
                var fila = tabla.insertRow(-1);
                var celda1 = fila.insertCell(0);
                var celda2 = fila.insertCell(1);
                var celda3 = fila.insertCell(2);
                var celda4 = fila.insertCell(3);
                celda1.innerHTML = personass[i].nombre;
                celda2.innerHTML = personass[i].email;
                celda3.innerHTML = personass[i].edad;

                const boton = document.createElement("button")
                boton.setAttribute("type","button");
                boton.setAttribute("id",personass[i].id);
                boton.innerHTML="Eliminar";
                boton.addEventListener("click", (e) => {
                    this.eliminarFila(personass[i].id);
                })
                celda4.appendChild(boton);
            }else{
                
                var fila = tabla2.insertRow(-1);
                var celda1 = fila.insertCell(0);
                var celda2 = fila.insertCell(1);
                var celda3 = fila.insertCell(2);
                var celda4 = fila.insertCell(3);
                celda1.innerHTML = personass[i].nombre;
                celda2.innerHTML = personass[i].email;
                celda3.innerHTML = personass[i].edad;

                const boton = document.createElement("button")
                boton.setAttribute("type","button");
                boton.setAttribute("id",personass[i].id);
                boton.innerHTML="Eliminar";
                boton.addEventListener("click", (e) => {
                    this.eliminarFila(personass[i].id);
                })
                celda4.appendChild(boton);
            }        
        }       
      
     }
    eliminarDelArreglo ( array, persona ) {
        var i = array.indexOf( persona );
        array.splice( i, 1 );
    }
        
    eliminarFila(id){
        let sacar = this.controlador.obtener().find(persona => persona.id == id);
        this.eliminarDelArreglo(this.controlador.obtener(),sacar);
        this.insertarFila(this.controlador.obtener());
        
    }
}
//export default Vista;
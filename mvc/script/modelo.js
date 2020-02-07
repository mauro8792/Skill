
class Modelo{
    constructor(){
       this.personas =[];
       this.observadores =[];
    }
    agregarAsistente(persona) {
        this.personas.push(persona);
        this.notificar();
    }
    obtenerAsistentes() {
        return this.personas;
    }
    suscribirse(callback){
        this.observadores.push(callback);
    }
    notificar(){
        this.observadores.forEach( observador => observador(this.personas))

    }
    
}


//export default Modelo;

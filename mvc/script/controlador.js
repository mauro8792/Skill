class Controlador{
    constructor(modelo){
        this.modelo = modelo;
    }
    agregar(asistente){
        this.modelo.agregarAsistente(asistente);
    }
    obtener(){
        return this.modelo.obtenerAsistentes();
    }    
}
//export default Controlador;

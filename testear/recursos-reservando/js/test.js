const expect = chai.expect


describe("Se testea la pagina del restaurante ", ()=>{
    //clase restaurante
    it("Horario de restaurante se elimina 13:00",()=>{
        let hora = "13:00"
        let resto = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        resto.reservarHorario(hora)
        expect(resto.horarios).to.have.lengthOf(2);        
    })
    it("Obtener puntiacion, promedio del restaurante",()=>{
        let resto = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        expect(resto.obtenerPuntuacion()).to.equals(7.4);
    })
    it("Calificar nuevamente con un nuevo puntaje, 8.5", ()=>{
        let resto = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        let puntaje = 8        
        resto.calificaciones.push(puntaje);
        expect(resto.obtenerPuntuacion()).to.equals(7.5);
    })
    //clase Listado
    it("Buscar restaurante por Id: 2",()=>{
        let restaurante = listado.buscarRestaurante(2);
        expect(restaurante.id).to.equals(2);
        
    })
    it("obtiene (sin repetidos) todos las ciudades en las cuáles hay un restaurante", ()=>{
        let restaurantes = listado.obtC();
        expect(restaurantes.length).to.equals(5);
        
    })
    it(' función que se encarga de filtrar los restaurantes según los filtros recibidos.',()=>{
        let rubro = 'Asiática';
        let ciudad= 'Londres';
        let hora= ["13:00", "15:30", "18:00"];
    })
})

describe("Se hace el tdd",()=>{
    var reserv = new Reserva (1,new Date(2020, 1, 14, 13, 00), 5, 100, "DES200")
    
    //Desarrollar la funcionalidad que calcule el precio base de una reserva
    it('Desarrollar la funcionalidad que calcule el precio base de una reserva',()=>{
        expect(reserv.cantPersonas*reserv.precioPersona).to.equals(500);
    })
    it('Desarrollar la funcionalidad que calcule el precio total de una reserva cantPersonas: 5, precioPersona: 100, codDescuento: "DES200"',()=>{
        let total = reserv.calCuentaFinal(reserv);
        expect(total).to.equals(332.5);
        
        
    })
        
})
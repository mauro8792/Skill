var Reserva = function(id, date, cantPersonas, precioPersona, codDescuento) {
    this.id = id;
    this.date = date;
    this.cantPersonas = cantPersonas;
    this.precioPersona = precioPersona;
    this.codDescuento = codDescuento;
}

Reserva.prototype.calCuentaBase = function(reserv) {
   return (reserv.cantPersonas * reserv.precioPersona);
}

Reserva.prototype.cuponDesc= function(reserv){
    let precioBase = this.calCuentaBase(reserv);
    if(reserv.codDescuento=='DES15'){
        precioBase = precioBase *0.85;
    }
    if(reserv.codDescuento=='DES200'){
        precioBase = precioBase -200;
    }
    if(reserv.codDescuento=='DES1'){
        precioBase = precioBase - reserv.precioPersona;
    }
    return precioBase;
}

Reserva.prototype.segunDia= function(reserv){
    let precioBase = this.calCuentaBase(reserv);
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var diaLetras = diasSemana[reserv.date.getDay()]; 
    if(diaLetras =="Viernes" || diaLetras =="Sábado" || diaLetras =="Domingo"){
        precioBase = precioBase *1.10;
    }
    return precioBase;

}
Reserva.prototype.descPersona= function(reserv){
    let precioBase = this.calCuentaBase(reserv);
    if(4<=reserv.cantPersonas && reserv.cantPersonas<=6){
        precioBase = precioBase * 0.95;
    }
    if(7<=reserv.cantPersonas && reserv.cantPersonas<=8){
        precioBase = precioBase * 0.90;
    }
    //más de 8 personas un 15% de descuento.

    if (reserv.cantPersonas>8) {
        precioBase = precioBase *0.85;
    }
    return precioBase;
}
Reserva.prototype.rangHorario = function(reserv){
    let precioBase = this.calCuentaBase(reserv);
    if ((reserv.date>=13 && reserv.date<=14) || (reserv.date>=20 && reserv.date<=21)) {
        precioBase= precioBase *1.05; 
    }
    return precioBase;
}
Reserva.prototype.calCuentaFinal = function(reserv) {
    let precioBase = this.calCuentaBase(reserv);
    let adicional =0;
    let descuento = 0;
    let total=0;
    descuento = this.descPersona(reserv) + this.cuponDesc(reserv);
    adicional = this.segunDia(reserv) + this.rangHorario(reserv);
    total = precioBase - descuento + adicional;
    
    
    

    
    return (total);
 }
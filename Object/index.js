vjMario={
    nombre: "Mario Bros",
    consola: "Nintendo",
    jugar : function (){
        console.log(`Estoy jugando al ${this.nombre} en una ${this.consola}`);
        
    },
    _init: function (nombre, consola) {
        this.nombre = nombre;
        this.consola = consola;
    }
}

vjMario.jugar();

mario2= Object.create(vjMario);
mario2.nombre= "Mario 2";
mario2.jugar();

mario3 = Object.create(vjMario);
mario3._init("mario3", "sega");
mario3.jugar();
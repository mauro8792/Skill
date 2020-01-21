var nombre;
nombre= "Mauro";
var date = prompt("ingrese su dia de nacimiento dd/mm/yyyy")
//var month = prompt("ingrese su mes de nacimiento ")
//var born = prompt("ingrese su año de nacimiento ")
var titulo = "Sr."

function saludar(nombre) {
    console.log("hola", titulo, nombre);
}


function dateOfBorn(date) {
    var hoy = new Date();
    var dd = hoy.getDate();
    var age = hoy.getFullYear();
    var mm = hoy.getMonth()+1;
    if (month<=mm) {
        if (dd<date) {
            console.log(age-born-1);
        }else
            console.log(age-born);
        
    }
    else{
        console.log(age-born-1);
    }
    
}

//dateOfBorn(date);
function fechaDeCumple(date) {

    var fecha= [];
    fecha= date.split("/");

    var hoy = new Date();
    var dd = hoy.getDate();
    var age = hoy.getFullYear();
    var mm = hoy.getMonth()+1;

    if (fecha[1]<=mm) {
        if (dd<fecha[0]) {
            console.log(age-fecha[2]-1);
        }else
            console.log(age-fecha[2]);
        
    }
    else{
        console.log(age-fecha[2]-1);
    }
    
}
//fechaDeCumple(date);

function Month(name, days){
    this.name=name;
    this.days=days;
    this.toString = function(){
        return "Nombre: "+ this.name + ", cantidad de Días: "+ this.days;
    }
    
}

var meses= [];
meses.push( new Month('enero', 31) );
meses.push(new Month('Febrero',29) );
meses.push(new Month('Marzo',31) );
meses.push(new Month('Abril',30) );
meses.push(new Month('Mayo',31) );
meses.push(new Month('Junio',30) );
meses.push(new Month('Julio',31) );
meses.push(new Month('Agosto',31) );
meses.push(new Month('Septiembre',30) );
meses.push(new Month('Octubre',31 ));
meses.push(new Month('Noviembre',30 ));
meses.push(new Month('Diciembre',31 ));


meses.forEach(mes => {
    console.log(mes.toString());
}); 

/* for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);    
    
}
var i=0;
while (i< meses.length) {
    console.log(meses[i]); 
    i++;
} */




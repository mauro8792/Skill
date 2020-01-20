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
fechaDeCumple(date);
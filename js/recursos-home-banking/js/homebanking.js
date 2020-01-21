//Declaración de variables
var nombreUsuario = "";
var limiteExtraccion = 0;
var saldoCuenta = 0;
var servicios= [];
var agenda = [];
function Servicio(name, amount) {
    this.name=name;
    this.amount=amount;
    
}
function Cuenta(count, name) {
    this.count = count,
    this.name = name;
}

function User(nombre, clave, saldo) {
    this.nombre = nombre;
    this.clave = clave;
    this.saldo = saldo;
    
}

var Mauro = new User("mauro",123456,50000);

servicios.push(new Servicio("Cable", 2500));
servicios.push(new Servicio("Agua", 1800));
servicios.push(new Servicio("Gas", 1200));
servicios.push(new Servicio("Luz", 800));

agenda.push(new Cuenta(000000, "Dario"));
agenda.push(new Cuenta(111111, "Martin"));
agenda.push(new Cuenta(222222, "Pablo"));
agenda.push(new Cuenta(333333, "Leo"));



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
/* ● Funcionalidad de cambio de límite de extracción: Permite que el
usuario cambie su límite de extracción. */
function cambiarLimiteDeExtraccion() {
    limiteExtraccion = parseInt(prompt("Ingrese el limite del extracción"));
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    extraer = parseInt(prompt("¿Cuanto dinero desea retirar?"));
    if(extraer > limiteExtraccion){
        alert("Usted no puede sacar la suma de: $" + extraer+ ", su limite es: $"+limiteExtraccion);
    }else{
        saldoCuenta = saldoCuenta- extraer;
        alert("Transaccion sactifactoria");
        actualizarSaldoEnPantalla();
    }
    

}
/* ● Funcionalidad de depósito de dinero: La funcionalidad de depósito de
dinero suma correctamente dinero en la cuenta. Es necesario que la responsabilidad de sumar dinero se delegue en otra función. */
function depositarDinero(importe) {
    importe = parseInt(prompt("ingrese el importe"));
    saldoCuenta= sumaDinero(importe,saldoCuenta);
    actualizarSaldoEnPantalla();

}
function sumaDinero(a,b) {
    return a+b;    
}
/* ● Funcionalidad de pago de servicios: Realiza la funcionalidad de pago
de servicios correctamente utilizando la sentencia SWITCH y
aplicando la validación que indica la guía 3 (si hay dinero suficiente en
la cuenta). */
function pagarServicio() {
   pagar = parseInt( prompt("Que servicio desea pagar: ?"+
                   " 1." + servicios[0].name +
                   " 2." + servicios[1].name+
                   " 3." + servicios[2].name+
                   " 4." + servicios[3].name)
   );
   
    switch (pagar) {
        case 1:
            
            saldoCuenta= saldoCuenta - servicios[0].amount;
            actualizarSaldoEnPantalla();
            alert("Transaccion sastifactoria");
            break;
        case 2:
            saldoCuenta= saldoCuenta - servicios[1].amount;
            actualizarSaldoEnPantalla();
            alert("Transaccion sastifactoria");
            break;
        case 3:
            saldoCuenta= saldoCuenta - servicios[2].amount;
            actualizarSaldoEnPantalla();
            alert("Transaccion sastifactoria");
            break;
        case 4:
            saldoCuenta= saldoCuenta - servicios[3].amount;
            actualizarSaldoEnPantalla();
            alert("Transaccion sastifactoria");
            break;
    
    }

}
/* ● Funcionalidad de transferencia de dinero: La funcionalidad de
transferencia de dinero resta correctamente dinero de la cuenta
aplicando las validaciones que indica la guía 3 (permitir transferencias
solo a cuentas amigas, no permitir transferencia de un monto de
dinero mayor al de la cuenta). */
function transferirDinero() {
    var nombreDestino = prompt("Ingrese el Nombre a quien le quiere hacer la transferencia: ");
    var cuentaDestino = prompt("Ingrese el numero de cuenta: ");
    var cantidad = parseInt(prompt("Cuanta cantidad desea Transferir?"));
    var sastifactoria = true;
    if (cantidad < saldoCuenta) {
        agenda.forEach(user => {        
            if (user.name == nombreDestino) {
                saldoCuenta = saldoCuenta - cantidad;
                alert("Transaccion sastifactoria");
                actualizarSaldoEnPantalla();
            }
        });
        if (!sastifactoria) {
            alert("no se encuentra ese usuario");
        }
    }else{
        alert("No tenes esa cantidad de dinero");
    }

    
}
/* ● Funcionalidad de inicio de sesión: La funcionalidad de inicio de sesión
valida si el usuario ingresó el código de seguridad correcto. Si lo
ingresa mal, retiene el dinero de la cuenta, dejando el saldo de la
cuenta en $0. */
function iniciarSesion() {
    nombreUsuario = prompt("Nombre de usuario: ");
    var password= prompt("Password: ");
    if (Mauro.clave == password && Mauro.nombre == nombreUsuario) {
        console.log("hola");
        
        saldoCuenta = parseInt(Mauro.saldo);
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
    }else{
        console.log("fallo");
        saldoCuenta=0;
        Mauro.saldo=0;
        actualizarSaldoEnPantalla();
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
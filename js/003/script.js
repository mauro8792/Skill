let miArreglo = [ 10, 12, 13, 15, 18];

// miArreglo.forEach( imprimirNumero );

function imprimirNumero( numero, indice, array ) {
  console.log(indice + " " + numero);
  console.log( array );
}

function sumarIba(arreglo){
    let arragloIba=[];
    for (let i = 0; i < arreglo.length; i++) {
        arragloIba[i]=arreglo[i]*1.21;
        
    }
    return arragloIba;
}
//sumarIba(miArreglo)
console.log(miArreglo);

function sumarIva( producto ) {
  return producto * 1.21;
  
}

// let arregloDePares = miArreglo.filter( valor => valor%2 == 0 )

function arrayForPair(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        
        if(arreglo[i]%2 == 0){
            pares.push(arreglo[i]);
        }
        
    }
    return pares;
}

console.log(arrayForPair(miArreglo));

// let caja = miArreglo.reduce( (suma, producto) => suma + producto, cajaInicial )
function reduce(arreglo, inicial) {
    let suma=0;
    for (let i = 0; i < arreglo.length; i++) {
        
       suma = suma + parseInt(arreglo[i]);
        
    }
    return suma + (inicial || 0 );
}

console.log(reduce(miArreglo,10));



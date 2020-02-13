function fibo(number){
    let rpta = []
    let a=1
    let b=1
    let c=1
    let s=1;
    //console.log(a,b);
    rpta.push(a);
    rpta.push(b);
    for(let i = 3; i<=number;i++){
      c=a+b;
      //console.log(c);
      rpta.push(c);
      s = s +c;
      a =b;
      b=c;
      
      
    }
    console.log("EL numero ingresado es: "+number + " Y el arreglo es: ",rpta);
    
    return rpta;
  }
  
  
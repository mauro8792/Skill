function iniciarSesion(){
    const email = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    console.log(validarEmail(email));
    if(validarEmail(email)){
        if (password == password2) {
            alert('Logeado');
            document.getElementById('aceptado').innerText = "aceptado";
            document.getElementById('userName').value=" "
            document.getElementById('password').value=""
            document.getElementById('password2').value=""
        }else
            alert('Contraseña incorrecta');
    }else{
        alert('Email incorrecto');
    }
    
    
}

function validarEmail(campo) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo)) {
      return true;
    } else {
        
        return false;
    }
  }
  

  
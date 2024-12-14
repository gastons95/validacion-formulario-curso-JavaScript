const submitFuncion = (event) => {
    if(!validarFormulario()){
        event.preventDefaul();
    } else{
        event.preventDefaul();

        alert(
            'Los datos enviados fueron: \n'+
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('').value + '\n'+
            'Email: ' + document.getElementById('nombre').value + '\n'+
            'Edad: ' + document.getElementById('nombre').value + '\n'+
            'Actividad: ' + document.getElementById('nombre').value + '\n'+
            'NNivel De Estudio: ' + document.getElementById('nombre').value + '\n'+
        )
           
         
    }
}

document.getElementById('formulario').addEventListener('submit', submitFuncion)// escucha el envio del formulario

function validarFormulario() {
    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');// coleccion de campos de texto input type text
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error'+ campo.id.charAt(0).toUpperCase()+ campo.id.slice(1))// error + id con la primera en mayuscula
        if(campo.value.leng == ''){
            mostrarError(errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, '¡Este campo debe tener almenos 3 caracteres!')
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo)
        }
    })
    //Esto valida el campo email

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.vaule)){//este regex valia que el formato del email sea valido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, '¡Ingrese un correo electronico valido!')
    }

    //validacion de edad

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')
    if(edad.value < 18){
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para regristrarte!')
        validacionCorrecta = false 
    }else{
        ocultarError(errorEdad)
    }

    //Validacion de la actividad

    const actividad = getElementById('actividad')
    const errorActividad = getElementById('errorActividad')

    if(actividad.value = ''){
        mostrarError(errorActividad, 'Por favor, selecciona una actividad')
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad)
    }


    //Validacion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value = ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio)
    }

    //Validar los terminos y condiciones

    const aceptTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!errorAceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los terminos y condiciones!')
        validacionCorrecta = false
    } else {
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta // esto dira si el formulario completo es o no valido

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
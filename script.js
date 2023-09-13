//preventDefault=>prevenir la accion que viene por defecto tiene el evento
//de actualizar la pagina,limpiar la pantalla
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()


    //validar campo nombre

    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduci tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')

    }
    //validar correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (!emailPattern.test(emailEntrada.value)) {

        emailError.textContent = 'Por favor, introdocu in mail valido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //validar la contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {

        contrasenaError.textContent = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.add('error-message')
    }

    //Si todos los campos son validos enviar formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {

        alert('El formulario se ha enviado con exito')

        document.getElementById('formulario').reset();
    }



})
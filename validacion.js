//Haz tú validación en javascript acá
function validarInputs() {
    var inputNombre = document.getElementById('nombre');
    var inputEmail = document.getElementById('email');
    var inputAsunto = document.getElementById('asunto');
    var inputMensaje = document.getElementById('mensaje');

    var valorNombre = inputNombre.value.trim();
    var valorEmail = inputEmail.value.trim();
    var valorAsunto = inputAsunto.value.trim();
    var valorMensaje = inputMensaje.value.trim();

    var mensajeError = '';

    // Validación de vacío y longitud para el nombre
    if (valorNombre.length === 0) {
        mensajeError += 'El Nombre no puede estar vacío.\n';
    } else if (!validarLongitud(valorNombre, 50)) {
        mensajeError += 'El Nombre no puede exceder los 50 caracteres.\n';
    }

    // Validación de vacío y longitud para el email
    if (valorEmail.length === 0) {
        mensajeError += 'El Email no puede estar vacío.\n';
    } else if (!validarEmail(valorEmail)) {
        mensajeError += 'El correo electrónico ingresado no es válido. Por favor, ingrese un correo electrónico válido en el formato: texto@texto.com.\n';
    }

    // Validación de vacío y longitud para el asunto
    if (valorAsunto.length === 0) {
        mensajeError += 'El Asunto no puede estar vacío.\n';
    } else if (!validarLongitud(valorAsunto, 50)) {
        mensajeError += 'El Asunto no puede exceder los 50 caracteres.\n';
    }

    // Validación de vacío y longitud para el mensaje
    if (valorMensaje.length === 0) {
        mensajeError += 'El Mensaje no puede estar vacío.\n';
    } else if (!validarLongitud(valorMensaje, 300)) {
        mensajeError += 'El Mensaje no puede exceder los 300 caracteres.\n';
    }

    // Si hay algún mensaje de error, mostrarlo en un alert y retornar false
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    console.log(valorNombre,valorEmail,valorAsunto,valorMensaje);

    // Si todas las validaciones son exitosas, limpiar los campos y mostrar mensaje de éxito
    inputNombre.value = '';
    inputEmail.value = '';
    inputAsunto.value = '';
    inputMensaje.value = '';
    alert('Mensaje enviado con éxito.');
    return true;
}

// Validación de longitud
function validarLongitud(valor, maximo, campo) {
    if (valor.length > maximo) {
        console.log('El ' + campo + ' no puede exceder los ' + maximo + ' caracteres.');
        return false;
    }
    return true;
}

// Validación de formato de correo electrónico
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        console.log('El correo electrónico ingresado no es válido. Por favor, ingrese un correo electrónico válido en el formato texto@texto.com.');
        return false;
    }
    return true;
}
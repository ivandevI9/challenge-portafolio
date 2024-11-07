// Función principal para validar los inputs del formulario
function validarInputs() {
  // Obtiene los elementos de los inputs por su ID
  var inputNombre = document.getElementById("nombre");
  var inputEmail = document.getElementById("email");
  var inputAsunto = document.getElementById("asunto");
  var inputMensaje = document.getElementById("mensaje");

  // Obtiene el valor de cada input y elimina espacios en blanco al inicio y al final
  var valorNombre = inputNombre.value.trim();
  var valorEmail = inputEmail.value.trim();
  var valorAsunto = inputAsunto.value.trim();
  var valorMensaje = inputMensaje.value.trim();

  // Variable para almacenar mensajes de error
  var mensajeError = "";

  // Validación de vacío y longitud para el nombre
  if (valorNombre.length === 0) {
    mensajeError += "El Nombre no puede estar vacío.\n";
  } else if (!validarLongitud(valorNombre, 50)) {
    mensajeError += "El Nombre no puede exceder los 50 caracteres.\n";
  }

  // Validación de vacío y formato para el email
  if (valorEmail.length === 0) {
    mensajeError += "El Email no puede estar vacío.\n";
  } else if (!validarEmail(valorEmail)) {
    mensajeError +=
      "El correo electrónico ingresado no es válido. Por favor, ingrese un correo electrónico válido en el formato: texto@texto.com.\n";
  }

  // Validación de vacío y longitud para el asunto
  if (valorAsunto.length === 0) {
    mensajeError += "El Asunto no puede estar vacío.\n";
  } else if (!validarLongitud(valorAsunto, 50)) {
    mensajeError += "El Asunto no puede exceder los 50 caracteres.\n";
  }

  // Validación de vacío y longitud para el mensaje
  if (valorMensaje.length === 0) {
    mensajeError += "El Mensaje no puede estar vacío.\n";
  } else if (!validarLongitud(valorMensaje, 300)) {
    mensajeError += "El Mensaje no puede exceder los 300 caracteres.\n";
  }

  // Si hay errores, muestra un alert con los mensajes de error y retorna false
  if (mensajeError !== "") {
    alert(mensajeError);
    return false;
  }

  // Si todas las validaciones son exitosas, imprime los valores en la consola
  console.log(valorNombre, valorEmail, valorAsunto, valorMensaje);

  // Limpia los campos de los inputs y muestra un mensaje de éxito
  inputNombre.value = "";
  inputEmail.value = "";
  inputAsunto.value = "";
  inputMensaje.value = "";
  alert("Mensaje enviado con éxito.");
  return true;
}

// Función para validar la longitud máxima de un valor
function validarLongitud(valor, maximo) {
  if (valor.length > maximo) {
    console.log("El valor no puede exceder los " + maximo + " caracteres.");
    return false;
  }
  return true;
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
  // Expresión regular para verificar el formato de un correo electrónico
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    console.log(
      "El correo electrónico ingresado no es válido. Por favor, ingrese un correo electrónico válido en el formato texto@texto.com."
    );
    return false;
  }
  return true;
}

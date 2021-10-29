
function menuhamburguesa() {
  var x = document.getElementById("navegacion");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validarformulario(){

  var nombre = document.getElementById('nombre');

    if (nombre.value == '') {
        alert("El campo Nombre se encuentra vacío");
        return false;
    }

    if (nombre.value.length < 6) {
        alert("El campo Nombre es demasiado corto");
        return false;
    }

    if (validar_texto(nombre.value) == false) {
      alert("En este campo no se permiten numeros");
      return false;
  }

}

function validar_texto(parametro){
  var letra =  /^[a-zA-Z\s]*$/;
  if(parametro.search(letra)){
      return false
  }
  return true
}

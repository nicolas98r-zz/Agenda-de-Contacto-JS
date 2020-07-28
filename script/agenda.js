var contactos = new Array();
function contacto() {
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.telefono = "";
}

function agregarContacto() {
    objCon = new contacto();
    objCon.nombre = document.getElementById("nombre").value;
    objCon.apellido = document.getElementById("apellido").value;
    objCon.correo = document.getElementById("correo").value;
    objCon.telefono = document.getElementById("telefono").value;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    alert("Contacto añadido");
    var registro = "<tr><td>" + objCon.nombre + "</td><td>" + objCon.apellido + "</td><td>" + objCon.correo + "</td><td>" + objCon.telefono + "</td></tr>";
    var fila = document.createElement("TR");
    fila.innerHTML = registro;
    document.getElementById("cuerpoTabla").appendChild(fila);
    contactos[contactos.length] = objCon;
}
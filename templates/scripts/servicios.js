function miFuncion(opcion, submenu) {
    var archivoJSON = 'info_tuccio.json';

    fetch(archivoJSON)
        .then(response => response.json())
        .then(data => {
            var elementoJSON = data[opcion][submenu];

            var divDestino = document.getElementById("contenedor_informacion");

            var nombreElemento = document.createElement("p");
            nombreElemento.textContent = "Nombre: " + elementoJSON.nombre;

            var descripcionElemento = document.createElement("p");
            descripcionElemento.textContent = "Descripción: " + elementoJSON.descripcion;

            var requisitosElemento = document.createElement("p");
            requisitosElemento.textContent = "Requisitos: " + elementoJSON.Requisitos;

            var pasosElemento = document.createElement("p");
            pasosElemento.textContent = "Pasos: " + elementoJSON.pasos;

            divDestino.appendChild(nombreElemento);
            divDestino.appendChild(descripcionElemento);
            divDestino.appendChild(requisitosElemento);
            divDestino.appendChild(pasosElemento);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function obtener_id(event) {
    var idEnlace = event.target.id;

    /* ---------------cambiar los colores--------------*/
    var enlaces = document.querySelectorAll("li");
    var letras = document.querySelectorAll("a");
    enlaces.forEach(function (enlace) {
        enlace.style.backgroundColor = "transparent";

    });
    letras.forEach(function (letra) {
        letra.style.color = "#063f75";
    });

    var clickeado = document.getElementById(idEnlace);
    clickeado.style.color = "white";
    var clickeado = clickeado.closest("li");
    clickeado.style.background = "#063f75";
    /**----------------------------------------------*/

    console.log(idEnlace);
    var ultimoCaracter = idEnlace.charAt(idEnlace.length - 1);
    var stringSinUltimo = idEnlace.slice(0, -1);
    console.log(stringSinUltimo + " :" + ultimoCaracter);
    var submenuActual = "submenu" + ultimoCaracter;
    console.log(stringSinUltimo, submenuActual);

    var div = document.getElementById('contenedor_informacion');
    div.innerHTML = '';

    miFuncion(stringSinUltimo, submenuActual);

}
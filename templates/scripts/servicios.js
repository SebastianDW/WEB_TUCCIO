function miFuncion(opcion, submenu) {
    var archivoJSON = 'info_tuccio.json';

    // Obtener los datos del archivo JSON
    fetch(archivoJSON)
        .then(response => response.json())
        .then(data => {
            // Obtener el elemento del JSON que quieres colocar en el div
            var elementoJSON = data[opcion][submenu];

            // Obtener el div donde deseas colocar el elemento del JSON
            var divDestino = document.getElementById("contenedor_informacion");

            // Crear elementos HTML para mostrar el contenido del elemento JSON
            var descripcionElemento = document.createElement("p");
            descripcionElemento.textContent = "Descripción: " + elementoJSON.descripcion;

            var requisitosElemento = document.createElement("p");
            requisitosElemento.textContent = "Requisitos: " + elementoJSON.Requisitos;

            var pasosElemento = document.createElement("p");
            pasosElemento.textContent = "Pasos: " + elementoJSON.pasos;

            // Agregar los elementos al div destino
            divDestino.appendChild(descripcionElemento);
            divDestino.appendChild(requisitosElemento);
            divDestino.appendChild(pasosElemento);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function obtener_id(event) {
    var idEnlace = event.target.id;
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
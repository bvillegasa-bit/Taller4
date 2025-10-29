function crearTag( etiqueta, texto ) {
    let tag = document.createElement( etiqueta )
    tag.textContent = texto
    return tag;
}
function añadirTagAlBody( tag ) {
    document.body.appendChild( tag )
}

function generarNumeroAleatorio( min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function validarNumero(numeroIngresado, numeroAleatorio, output) {
            if (numeroIngresado >numeroAleatorio) 
                return output.textContent = "El número ingresado es mayor al número aleatorio generado. Intente de nuevo."
            else if (numeroIngresado < numeroAleatorio)
                return output.textContent = "El número ingresado es menor al número aleatorio generado. Intente de nuevo."
            else if(numeroIngresado == numeroAleatorio)
                return output.textContent = "¡Felicidades! Ha adivinado el número aleatorio generado."
            else 
                return output.textContent = ""; 
        }
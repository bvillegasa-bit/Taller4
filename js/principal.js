function crearTag(tag){
    return document.createElement(tag)
}

function adicionarTextoATag(texto, tag){
    tag.innerText = texto
}

function adicionarTagAContenedor(tag, contenedor){
    contenedor.appendChild(tag)
}

function adicionarTagAlBody(tag){
    document.body.appendChild(tag)
}
function crearTagConTexto(tag, texto){
    var tag1 = crearTag(tag)
    adicionarTextoATag(texto, tag1)
    return tag1
    
}

function crearTagConTextoAdicionarBody(tag, texto){
    var tag = crearTagConTexto(tag, texto)
    adicionarTagAlBody(tag)
    return tag
}
function crearTagConTextoYAdicionar(tag, texto){
    var tagCreado = crearTagConTexto(tag, texto)
    adicionarTagAContenedor(tagCreado, texto)
}

  function diseñarPalabra(text, tag, word) {
        const index = text.indexOf(word);
        if (index === -1) {
            throw new Error('Palabra no encontrada en el texto');
        }
        return (
          text.substring(0, index) +
          '<' + tag + '>' + word + '</' + tag + '>' +
          text.substring(index + word.length)
        );
    }

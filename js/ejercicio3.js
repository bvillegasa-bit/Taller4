
const estudiantes = []


function crearTag(tag, texto) {
    var elemento = document.createElement(tag)
    elemento.textContent = texto 
    return elemento
}
function adicionarTagAlBody(tag, texto) {
    var elemento = crearTag(tag);
    elemento.textContent = texto;
    document.body.appendChild(elemento);
    return elemento;
}
function agregarEstudiante(nombre, edad, id) {
    const estudiante = {
        nombre: nombre,
        edad: edad, 
        id: id
    };
    estudiantes.push(estudiante)
    alert(`Estudiante ${nombre} agregado exitosamente.`)
}
function buscarEstudiante(id) {
    const estudiante = estudiantes.find(est => est.id === id)
    if (estudiante) {
        alert(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.id}`)
    } else {
        alert(`Estudiante con ID ${id} no encontrado.`)
    }   
}
 function crearFormularioAgregarEstudiante() {
    const form = document.createElement('form')  
    form.id = 'formAgregarEstudiante'   
    const inputNombre = crearTag('input')
    inputNombre.type = 'text'
    inputNombre.placeholder = 'Nombre'
    inputNombre.id = 'inputNombre'
    form.appendChild(inputNombre)
    
    const inputEdad = crearTag('input', '');
    inputEdad.type = 'number';
    inputEdad.placeholder = 'Edad';
    inputEdad.id = 'inputEdad';
    form.appendChild(inputEdad);

    const inputID = crearTag('input', '');
    inputID.type = 'text';
    inputID.placeholder = 'Número de Identificación';
    inputID.id = 'inputID';
    form.appendChild(inputID);

    const buttonAgregar = crearTag('button', 'Agregar Estudiante');
    buttonAgregar.type = 'submit';
    form.appendChild(buttonAgregar);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = inputNombre.value;
        const edad = inputEdad.value;
        const id = inputID.value;
        agregarEstudiante(nombre, edad, id);
        form.reset();
    });

    return form;
}
function crearFormularioBuscarEstudiante() {
    const form = document.createElement('form');
    form.id = 'formBuscarEstudiante';
    document.body.appendChild(form);
    const inputID = crearTag('input');
    inputID.type = 'text';
    inputID.placeholder = 'Número de Identificación a buscar';
    inputID.id = 'inputIDBuscar';
    form.appendChild(inputID);
    const buttonBuscar = crearTag('button', 'Buscar Estudiante');
    buttonBuscar.type = 'submit';
    form.appendChild(buttonBuscar);
    const resultadoDiv = adicionarTagAlBody('div');
    resultadoDiv.id = 'resultadoBusqueda';
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const id = inputID.value;
        const estudiante = estudiantes.find(est => est.id === id)
        if (estudiante) {
            resultadoDiv.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.id}`;
        } else {
            resultadoDiv.textContent = `Estudiante con ID ${id} no encontrado.`;
        }           
        form.reset();
    });

    return form;
}

const tareas = []

function agregarTarea() {
    const titulo = prompt("Ingrese el título de la tarea:")
    const texto = prompt("Ingrese el texto de la tarea:")
    const id = tareas.length + 1
    tareas.push({ titulo, id, texto })
    alert(`"${titulo}" ha sido agregada a la lista.`)
}

function eliminarTarea() {
    const idEliminar = parseInt(prompt("Ingrese el ID de la tarea a eliminar:"))
    const indice = tareas.findIndex(tarea => tarea.id === idEliminar)
    if (indice !== -1) {
        const tareaEliminada = tareas.splice(indice, 1)[0]
        alert(`"${tareaEliminada.titulo}" ha sido eliminada de la lista.`)
    } else {
        alert("No se encontró ninguna tarea con ese ID.")
    }
}

function mostrarTareas() {
    const listaTexto = tareas.map(tarea => `${tarea.id}. ${tarea.titulo}: ${tarea.texto}`).join('\n')
    alert(`Lista de tareas:\n${listaTexto}`)
}

function buscarTareaPorId() {
    const idBuscar = parseInt(prompt("Ingrese el ID de la tarea a buscar:"))
    const tareaEncontrada = tareas.find(tarea => tarea.id === idBuscar)
    if (tareaEncontrada) {
        alert(`Tarea encontrada:\n${tareaEncontrada.id}. ${tareaEncontrada.titulo}: ${tareaEncontrada.texto}`)
    } else {
        alert(`No se encontró ninguna tarea con el ID ${idBuscar}.`)
    }
}

function filtrarTareasPorTexto() {
    const textoFiltrar = prompt("Ingrese el texto para filtrar las tareas:")
    const tareasFiltradas = tareas.filter(tarea => tarea.texto.toLowerCase().includes(textoFiltrar.toLowerCase()))
    if (tareasFiltradas.length > 0) {
        const listaTexto = tareasFiltradas.map(tarea => `${tarea.id}. ${tarea.titulo}: ${tarea.texto}`).join('\n')
        alert(`Tareas que contienen el texto '${textoFiltrar}':\n${listaTexto}`)
    } else {
        alert(`No se encontraron tareas que contengan el texto '${textoFiltrar}'.`)
    }
}

function ordenarTareasPorTitulo() {
    const tareasOrdenadas = tareas.slice().sort((a, b) => a.titulo.localeCompare(b.titulo))
    const listaTexto = tareasOrdenadas.map(tarea => `${tarea.id}. ${tarea.titulo}: ${tarea.texto}`).join('\n')
    alert(`Tareas ordenadas por título:\n${listaTexto}`)
}

function gestionarLista() {
    let continuar = true
    while (continuar) {
        const accion = prompt("¿Qué deseas hacer? (agregar/eliminar/mostrar/buscar/filtrar/ordenar/salir)")

        switch (accion.toLowerCase()) {
            case "agregar":
                agregarTarea()
                break;
            case "eliminar":
                eliminarTarea()
                break;
            case "mostrar":
                mostrarTareas()
                break;
            case "buscar":
                buscarTareaPorId()
                break;
            case "filtrar":
                filtrarTareasPorTexto()
                break;
            case "ordenar":
                ordenarTareasPorTitulo()
                break;
            case "salir":
                continuar = false
                alert("Saliendo del programa.")
                break;
            default:
                alert("Acción no válida.")
        }
    }
}

gestionarLista()
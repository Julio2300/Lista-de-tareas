const lista = {
    tareas: [],

    agregarTarea: function (tarea) {
        this.tareas.push(tarea);
        alert(`"${tarea}" ha sido agregada a la lista.`)
    },

    eliminarTarea: function (indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            const tareaEliminada = this.tareas.splice(indice, 1)
            alert(`"${tareaEliminada}" ha sido eliminada de la lista.`)
        } else {
            alert("El valor no es válido.")
        }
    },

    mostrarLista: function () {
        let listaTexto = "Lista de tareas:\n"
        this.tareas.forEach((tarea, index) => {
            listaTexto += `${index + 1}. ${tarea}\n`
        })
        alert(listaTexto)
    }
}

function gestionarLista() {
    while (true) {
        const accion = prompt("¿Qué deseas hacer? (agregar/eliminar/mostrar/salir)")

        switch (accion.toLowerCase()) {
            case "agregar":
                const nuevaTarea = prompt("Ingrese la nueva tarea:")
                lista.agregarTarea(nuevaTarea)
                break
            case "eliminar":
                const indiceEliminar = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1
                lista.eliminarTarea(indiceEliminar)
                break
            case "mostrar":
                lista.mostrarLista()
                break
            case "salir":
                alert("Saliendo del programa.")
                return
            default:
                alert("Acción no válida.")
        }
    }
}

gestionarLista()
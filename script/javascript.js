

// Desafio nro: 3

const todasLasTarea = ["backend","frontend","marketing","emprendedor","cloud","chef"]

function tareas(tarea){
    switch(tarea){
        case todasLasTarea[0]:
            return "La tarea de backend esta asignada a Jesus Martin Aguilar"
        case todasLasTarea[1]:
            return "La tarea de frontend esta asignada a Jesus Eduardo Aguilar"
        case todasLasTarea[2]:
            return "La tarea de marketing esta asignada a Malena Guadalupe Aguilar"
        case todasLasTarea[3]:
            return "La tarea de emprendedor esta asignada a Fabian Lorenzo Aguilar"
        case todasLasTarea[4] :
            return "La tarea de cloud esta asignada a Ivan Nicolas Aguilar"
        case todasLasTarea[5] :
            return "La tarea de chef esta asignada a Nilda Maria Alarcon"
        default:
            return "No hay persona asignada para esta tarea.( "  + tarea + " ) deberas contratar una nueva persona para esta tarea."
    }
}


let cantTareas = Number(parseInt(prompt("Ingrese la cantidad de tareas que hay pendientes para asignar.")))

if( cantTareas = todasLasTarea.length){
    for(let i= 1; i<= todasLasTarea.length ; i++){
        var tarea1 = tareas(prompt("Ingrese la tarea"))

        console.log(tarea1)
    }
}else{
    console.log("Hay mas tareas de las que el personal puede tomar")
    for(let i= 1; i<= cantTareas; i++){
        var tarea1 = tareas(prompt("Ingrese la tarea"))
        console.log(tarea1)
    }
}

tareas()

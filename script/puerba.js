

// Practica de javascript (ciclos y funciones)


function tareas(tarea){
    switch(tarea){
        case "backend":
            return "La tarea de backend esta asignada a Jesus Martin Aguilar"
        case "frontend":
            return "La tarea de frontend esta asignada a Jesus Eduardo Aguilar"
        case "marketing":
            return "La tarea de marketing esta asignada a Malena Guadalupe Aguilar"
        case "emprendedor":
            return "La tarea de emprendedor esta asignada a Fabian Lorenzo Aguilar"
        case "cloud":
            return "La tarea de cloud esta asignada a Ivan Nicolas Aguilar"
        case "chef":
            return "La tarea de chef esta asignada a Nilda Maria Alarcon"
        default:
            return "No hay persona asignada para esta tarea."
        }
}

let cantTareas = Number(parseInt(prompt("Ingrese la cantidad de tareas que hay pendientes para asignar.")))

for(let i= 1; i<= cantTareas ; i++){
    var tarea1 = tareas(prompt("Ingrese la tarea"))
    console.log(tarea1)
}
tareas()



// -----------------------------------------------------------------------------------


// function miFuncionSolicitarNombre(primerNombre,segundoNombre,apellido,tarea) {
//     return pedro = "La persona asignada a la tarea de " + tarea + " es: " + primerNombre + segundoNombre + apellido
// };

// var resultado1 = miFuncionSolicitarNombre("Jesus"," Martin"," Aguilar","backend");
// var resultado2 = miFuncionSolicitarNombre("Lorenzo"," Fabian"," Aguilar","emprendedor");
// var resultado3 = miFuncionSolicitarNombre("Malena"," Guadalupe"," Aguilar","marketing");
// var resultado4 = miFuncionSolicitarNombre("Jesus"," Eduardo", " Aguilar","frontend");
// var resultado5 = miFuncionSolicitarNombre("Ivan"," Nicolas", " Aguilar ","cloud");
// var resultado6 = miFuncionSolicitarNombre("Nilda"," Maria", " Alarcon","chef");

// console.log(resultado1)
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)
// console.log(resultado5)
// console.log(resultado6)

// miFuncionSolicitarNombre()

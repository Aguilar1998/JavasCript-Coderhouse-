
function mate(ingrediente_1,ingrediente_2,ingrediente_3,elSuperPreferido){
    return "La mejor forma de preparar un mate es: \n 1-Llenar un termo con " + "agua  " + " caliente. Para que la temperatura de tu mate esté en su punto justo, asegurate de que no esté ni tibia ni hirviendo... \n" + " 2-Colocar la " + ingrediente_1 + " dentro del mate, " + " preferentemente el que el publico elije es la   " + elSuperPreferido + ", luego agregarle algun " + ingrediente_2 + " y agitar... \n 3-Le sacamos el polvo y luego le colocamos el " + ingrediente_3 + " \n 4- Introducimos la bombilla \n 5- Cebamos y compartimos un momento."
}

const pasos = () => {

    let numRonda = parseInt(
    
    prompt("Ingrese la cantidad de personas en la ronda"));
    
    var ingrediente_1 = prompt("El ingrediente que va primero es: \n Paso 1 (yerba) ").toLowerCase();
    
    var ingrediente_2 = prompt("El ingrediente que va segundo es: \n Paso 2 (yuyo)").toLowerCase();
    
    var ingrediente_3 = prompt("El ingrediente qeu va tercero es: \n Paso 3 (agua) ").toLowerCase();

    materos(numRonda, ingrediente_1, ingrediente_2, ingrediente_3);
    
};

const materos = (numRonda, ingrediente_1, ingrediente_2, ingrediente_3) => {
    var elSuperPreferido = 0;
    let elPreferido1 = 0;
    let elPreferido2 = 0;
    let elPreferido3 = 0;
    let elPreferido4 = 0;
    for (let i = 1; i <= numRonda; i++) {
        let preferencia = prompt(`Ingrese el tipo de yerba que prefiere \n Nro: #${i}`
        ).toLowerCase();
        // Comparo las preferencias y la asigno a una sola variable par aluego mostrar la preferida
        switch (preferencia) {
            case "yerbamate":
                elPreferido1 += 1;
                break;
            case "aguantadora":
                elPreferido2 += 1;
                break;
            case "taragui":
                elPreferido3 += 1;
                break;
            case "rosamonte":
                elPreferido4 += 1;
                break;
        }

        if (elPreferido1 > elPreferido2) {
            elSuperPreferido = "yerbamate";
        } else if (elPreferido2 > elPreferido3) {
            elSuperPreferido = "aguantadora";
        } else if (elPreferido3 > elPreferido4) {
            elSuperPreferido = "taragui";
        } else {
            elSuperPreferido = "rosamonte";
        }
        
    }
    
    console.log(
    
    mate(ingrediente_1, ingrediente_2, ingrediente_3, elSuperPreferido));
    
};
    
pasos();


// link sobre como preparar un mate :)
// https://www.google.com/search?q=como+preparar+un+buen+mate&sxsrf=ALiCzsYQY-kPeWx9bTiiKKAJlT54b-lLzw%3A1653359112450&ei=CEKMYrWHG4Pa1sQPuJKUuAg&ved=0ahUKEwi1q9XUivf3AhUDrZUCHTgJBYcQ4dUDCA4&uact=5&oq=como+preparar+un+buen+mate&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BAgjECc6BAgAEEM6CwgAEIAEELEDEIMBOgUILhCABDoECAAQAzoICAAQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOggIABCABBCxA0oECEEYAEoECEYYAFCSB1jdHmDcH2gDcAF4AIABcIgBkxGSAQQyMy4zmAEAoAEByAEKwAEB&sclient=gws-wiz

// video : 
// https://www.youtube.com/watch?v=kbtJs0xVPVw




















































/////////////////////////////////////////////////////////////////////////////////////////////////////

//          Se ingresa por cada alumno la calificación obtenida en una evaluación parcial 
//       y el número de comisión al que pertenece.  
//       Estos pares de datos llegan sin orden alguno.
// var notaPromedio

// const promedio = (totalDeCalificacion,cantDeAlumnosEnLaComision) => {
//     var notaPromedio = totalDeCalificacion/cantDeAlumnosEnLaComision
//     return " El promedio de la comision" + nroDeComisiones + " es de: " + notaPromedio
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////

// var cantDeAlumnosEnLaComision
// var nombreDelAlumno
// var calificacion

// /////////////////////////////////////////////////////////////////////////////////////////////////////

// // Informe el promedio de cada comisión.

// var cantComisiones = parseInt(prompt("(Por favor ingrese manos de 5 comisiones a la vez.)\n Cantidad de comisiones: "))

// do{
//     let cantDeAlumnosEnLaComision = parseInt(prompt("Ingrese la cantidad de alumnos en esta comision: "))
//     let alumno
//     for( alumno = 1; alumno <= cantDeAlumnosEnLaComision ; alumno++){
//         nombreDelAlumno = prompt("Ingrese el nombre del alumno nro: " + alumno)
//         calificacion = parseInt(prompt("Ingrese la calificacion del alumno: " + alumno))
//     }

//     var cantDeAlumnosTotales_1
//     var contadorDeComisiones_1
//     var cantDeAlumnosTotales_2
//     var contadorDeComisiones_2
//     var cantDeAlumnosTotales_3
//     var contadorDeComisiones_3
//     var cantDeAlumnosTotales_4
//     var contadorDeComisiones_4
//     var cantDeAlumnosTotales_5
//     var contadorDeComisiones_5

//     let nroDeComisiones

//     switch(nroDeComisiones){
//         case 1:
//             totalDeCalificacion_1 += calificacion
//             cantDeAlumnosTotales_1 += cantDeAlumnosEnLaComision
//         case 2:
//             totalDeCalificacion_2 += calificacion
//             cantDeAlumnosTotales_2 += cantDeAlumnosEnLaComision
//         case 3:
//             totalDeCalificacion_3 += calificacion
//             cantDeAlumnosTotales_3 += cantDeAlumnosEnLaComision
//         case 4:
//             totalDeCalificacion_4 += calificacion
//             cantDeAlumnosTotales_4 += cantDeAlumnosEnLaComision
//         case 5:
//             totalDeCalificacion_5 += calificacion
//             cantDeAlumnosTotales_5 += cantDeAlumnosEnLaComision
//         default:
//             console.log("No es posible cargar la 5ta comision.")
//     }
    
//     nroDeComisiones++

// }while(nroDeComisiones <= cantComisiones)

// console.log("La comision" + contadorDeComisiones_1 + "tiene un promedio de: " + promedio) 
// console.log("La comision" + contadorDeComisiones_2 + "tiene un promedio de: " + promedio) 
// console.log("La comision" + contadorDeComisiones_3 + "tiene un promedio de: " + promedio) 
// console.log("La comision" + contadorDeComisiones_4 + "tiene un promedio de: " + promedio) 
// console.log("La comision" + contadorDeComisiones_5 + "tiene un promedio de: " + promedio) 

//////////////////////////////////////////////////////////////////////////////////////////////////

//       Problema: considere el enunciado del ejercicio anterior.Se desea lograr la
//       misma salida (promedio de cada comisión) para la materia Inglés. Esta tiene 4
//       grupos o comisiones, pero se desconoce el número de alumnos por comisión.
//       Los datos terminan con la calificación cero y el número de comisión cero.

/////////////////////////////////////////////////////////////////////////////////////////////////////


// return `Bienvenido ${nombre} tu apellido es ${apellido}`;
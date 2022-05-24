/////////////////////////////////////////////////////////////////////////////////////////////////////

//          Se ingresa por cada alumno la calificación obtenida en una evaluación parcial 

//       y el número de comisión al que pertenece.  

//       Estos pares de datos llegan sin orden alguno.


var notaPromedio

const promedio = (totalDeCalificacion,cantDeAlumnosEnLaComision) => {

    var notaPromedio = totalDeCalificacion/cantDeAlumnosEnLaComision

    return " El promedio de la comision" + nroDeComisiones + " es de: " + notaPromedio

}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var cantDeAlumnosEnLaComision

var nombreDelAlumno

var calificacion

var cantDeAlumnosTotales_1

var contadorDeComisiones_1

var cantDeAlumnosTotales_2

var contadorDeComisiones_2

var cantDeAlumnosTotales_3

var contadorDeComisiones_3

var cantDeAlumnosTotales_4

var contadorDeComisiones_4

var cantDeAlumnosTotales_5

var contadorDeComisiones_5

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Informe el promedio de cada comisión.

var cantComisiones = parseInt(prompt("(Por favor ingrese manos de 5 comisiones a la vez.)\n Cantidad de comisiones: "))

do{

    let cantDeAlumnosEnLaComision = parseInt(prompt("Ingrese la cantidad de alumnos en esta comision: "))

    let alumno

    for( alumno = 1; alumno < cantDeAlumnosEnLaComision ; alumno++){

        nombreDelAlumno = prompt("Ingrese el nombre del alumno nro: " + alumno)

        calificacion = parseInt(prompt("Ingrese la calificacion del alumno: " + alumno))

    }

    var nroDeComisiones

    switch(nroDeComisiones){

        case 1:

            totalDeCalificacion_1 += calificacion

            cantDeAlumnosTotales_1 += cantDeAlumnosEnLaComision

        case 2:

            totalDeCalificacion_2 += calificacion

            cantDeAlumnosTotales_2 += cantDeAlumnosEnLaComision

        case 3:

            totalDeCalificacion_3 += calificacion

            cantD///eAlumnosTotales_3 += cantDeAlumnosEnLaComision

        case 4:

            totalDeCalificacion_4 += calificacion

            cantDeAlumnosTotales_4 += cantDeAlumnosEnLaComision

        case 5:

            totalDeCalificacion_5 += calificacion

            cantDeAlumnosTotales_5 += cantDeAlumnosEnLaComision

        default:

            console.log("No es posible cargar la 5ta comision.")

    }

}while(nroDeComisiones <= cantComisiones)

console.log("La comision" + contadorDeComisiones_1 + "tiene un promedio de: " + promedio) 

console.log("La comision" + contadorDeComisiones_2 + "tiene un promedio de: " + promedio) 

console.log("La comision" + contadorDeComisiones_3 + "tiene un promedio de: " + promedio) 

console.log("La comision" + contadorDeComisiones_4 + "tiene un promedio de: " + promedio) 

console.log("La comision" + contadorDeComisiones_5 + "tiene un promedio de: " + promedio) 

//////////////////////////////////////////////////////////////////////////////////////////////////

//     Se ingresa por cada alumno la calificación obtenida en una evaluación parcial y el número de comisión al que pertenece.  
// Estos pares de datos llegan sin orden alguno. Informe el promedio de cada comisión.
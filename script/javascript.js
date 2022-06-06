
class termos {
    constructor(marca, litros, precio) {
        this.marca = marca
        this.litros = litros
        this.precio = precio
    }
}
class mate {
    constructor(marca, material, precio) {
        this.marca = marca
        this.material = material
        this.precio = precio
    }
}

const termos1 = new termos('stanley ', 1, 24000,)
const termos2 = new termos('enerfit', 1/2, 9000)
const termos3 = new termos('thermos ', 1/2, 16000)

const mate1 = new mate('stanley ', 'Aluminio', 24000,)
const mate2 = new mate('enerfit', 'Aluminio', 9000)
const mate3 = new mate('thermos', 'aluminio', 16000)

const carrito = []


const mostrarMensaje = (termos) => {
    console.log('El termos ' + termos.marca + ' de ' + termos.litros + ' cuesta $' + termos.precio)
}
const mostrarMensaje2 = (mate) => {
    console.log('El termos ' + mate.marca + ' de ' + mate.litros + ' cuesta $' + mate.precio)
}

const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((termos) => {
        sumaTotal += termos.precio
    })
    return sumaTotal
}

const agregarProducto = () => {
    const productoElegido = prompt('Elegi un termos entre: stanley, enerfit, thermos').toLowerCase()

    switch (productoElegido) {
        case 'stanley':
            mostrarMensaje(termos1)
            carrito.push(termos1)
            break
        case 'enerfit':
            mostrarMensaje(termos2)
            carrito.push(termos2)
            break
        case 'thermos':
            mostrarMensaje(termos3)
            carrito.push(termos3)
            break
        default:
            console.log('Por favor, ingresa una opcion correcta')
            break
    }

    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        console.log('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()














































// // Desafio nro: 3
// // function agunatadora(yerba){
// //     yerba===variedadDeYerba[0]
// // }


// // function porCadaUno(array,funcion){
// //     for(const elemento of array){
// //         funcion(elemento)
// //     }
// // }

// const variedadDeYerba = ["aguantadora","sinceridad","pampa","playadito","cbse","rosamonte"]

// const mensaje = [
//     { nombre: 'aguantadora',mensaje: "Desde Misiones, la Tierra del Oro Verde, una Yerba Mate única para acompañar tus jornadas. Encontrá la variedad que más se adapte a tus gustos en la Tienda Online"},
//     { nombre: 'sinceridad', mensaje: ": Una Yerba Mate suave, pensada para quienes gustan de un mate muy equilibrado. Encontrá la variedad que más se adapte a tus gustos en la Tienda Online."},
//     { nombre: 'pampa', mensaje: ": Un producto Premium. Cultivada y elaborada respetando los ritmos naturales de crecimiento. En versiones Orgánica y BCP (Bajo Contenido en Polvo)"},
//     { nombre: 'playadito', mensaje: ": Sabor tradicional combinado con esencia de naranja. Técnica de estacionamiento natural y paquete pensado para conservar la calidad."},
//     { nombre: 'cbse', mensaje: ": CBSé - Establecimiento Santa Ana es una empresa de bebidas orgánicas especializada en termos de yerba mate, con sede en Argentina. La empresa exporta sus termos a nivel internacional desde 2000. CBSé ofrece principalmente yerba mate de hojas sueltas con varios sabores."},
//     { nombre: 'rosamonte', mensaje: ": Es nutritivo. Aporta vitaminas A, B, C y E, además de minerales como el potasio, sodio, hierro y magnesio a lo que se suman más de 10 aminoácidos esenciales. Previene la aparición de caries"}
// ]

// mensaje.forEach((nombre) => {
//     console.log(nombre)
// });




// let cantYerbas = Number(parseInt(prompt("Ingrese la cantidad de marcas de yerbas que le gustaria conocer.")))

// if( cantYerbas === variedadDeYerba.length){
//     for(let i= 1; i<= variedadDeYerba.length; i++){
//         const resultado = mensaje.filter((mensaje) => mensaje.nombre.includes('prog'))
//         console.log(resultado)
//     }
// }else if(cantYerbas < variedadDeYerba.length){
//     console.log("Contamos con estas variedades de yerbas: "+ variedadDeYerba )
//     for(let i= 1; i<= cantYerbas; i++){
//         const resultado = mensaje.filter((mensaje) => mensaje.nombre.includes('prog'))
//         console.log(resultado)
//     }
// }else {
//     console.log("no contamos con tantas varidedades por el momento, la informacion que no podamos brindarte sera investigada para incorporarla..")
//     for(let i= 1; i<= cantYerbas; i++){
//         const resultado = mensaje.filter((mensaje) => mensaje.nombre.includes('prog'))
//         console.log(resultado)
//     }
// }
    
// // yerbas2()


// // ---Tema:------

// // retorna funciones 
// // recibir funciones por parametros
// // Métodos de búsqueda y transformación (forEach,find,filter,some,map,reduce,sort)

console.log(document)


// class mate {
//     constructor(tamaño, material, precio) {
//         this.tamaño = tamaño
//         this.material = material
//         this.precio = precio
//     }
// }

// const mate1 = new mate('grande ', 'aluminio', 4000)
// const mate2 = new mate('mediano', 'aluminio', 2000)
// const mate3 = new mate('chico ', 'aluminio', 1000)

// const carrito1 = []


// const mostrarMensaje1 = (mate) => {
//     console.log('El mate ' + mate.tamaño + ' de ' + mate.material + ' cuesta $' + mate.precio)
// }


// const totalCarrito1 = () => {
//     let sumaTotal = 0
//     carrito1.forEach((producto) => {
//         sumaTotal += producto.precio
//     })
//     return sumaTotal
// }

// const agregarProducto1 = () => {
//     const productoElegido = prompt('Elegi un mate entre: grande, mediano o chico').toLowerCase()

//     switch (productoElegido) {
//         case 'grande':
//             mostrarMensaje1(mate1)
//             carrito1.push(mate1)
//             break
//         case 'mediano':
//             mostrarMensaje1(mate2)
//             carrito1.push(mate2)
//             break
//         case 'chico':
//             mostrarMensaje1(mate3)
//             carrito1.push(mate3)
//             break
//         default:
//             console.log('Por favor, ingresa una opcion correcta')
//             break
//     }

//     if (confirm('Desea agregar otro producto?')) {
//         agregarProducto1()
//     } else {
//         console.log('Finalizo Compra, su total es de $' + totalCarrito1())
//         console.log(carrito1)
//     }
// }

// agregarProducto1()
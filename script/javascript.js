

class termos {
    constructor(marca, litros, precio) {
        this.marca = marca
        this.litros = litros
        this.precio = precio
    }
}

const termos1 = new termos('grande ', 'aluminio', 4000)
const termos2 = new termos('mediano', 'aluminio', 2000)
const termos3 = new termos('chico ', 'aluminio', 1000)

const carrito = []


const mostrarMensaje = (termos) => {
    console.log('El termos ' + termos.marca + ' de ' + termos.litros + ' cuesta $' + termos.precio)
}
const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((termos) => {
        sumaTotal += termos.precio
    })
    return sumaTotal
}

const agregarProducto = () => {
    const productoElegido = prompt('Elegi un termo entre: stanley, enerfit, thermos').toLowerCase()

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













/* Funcion formulario */
const baseDeDatos = {
    nombre: 'Martin',
    correo: 'Martin@Estudiante.com',
}
const button = (event)=>{
    event.preventDefault();
    const nombre = event.target[0].value
    const correo = event.target[1].value
    
    if (!nombre || !correo) {
        console.log('Falta completar un campo');
        return;
    }else if ( (nombre!==baseDeDatos.nombre)) {
        console.log('Este proyecto no fue creado por ti!');
        return;
    }else if (!nombre && !correo){
        window.location.href = 'http://www.google.com';
        return;
    }

    console.log('Bienvenido',nombre,', tu correo es: ', correo);
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', button);



















class termos {
    constructor(marca, litros, precio) {
        this.marca = marca
        this.litros = litros
        this.precio = precio
    }
}

const mate1 = new mate('grande ', 'aluminio', 4000)
const mate2 = new mate('mediano', 'aluminio', 2000)
const mate3 = new mate('chico ', 'aluminio', 1000)

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
















// Agregar Nodos:
// paso 1: crear un elemento en blanco
// ej:
    const contenedor = document.createElement('div')



// paso 2: Darle un contenido a mi elemento creado
// Se puede implementar una card completa? 
    // ej:
    contenedor.innerHTML = '<p>Para saber mas sobre nuestros productos registrate y envianos un mensaje para que podamos brindarte informacion al respecto.</p>'


// paso 3: Asignar nuestro contenedor creado como hijo de otro elemento.
// Antes de este paso, tengo que haber accedido a mi elemento padre.
    // ej:
    const galeria = document.getElementById('galeria')
    galeria.append(contenedor)


    renderProducts();
    ejCarrito();



    Hola Jesús!

    Creo que me confundiste con el otro tutor jajaja, pero no pasa nada
    
    Me gustaría comentarte que tu JS va muy bien, veo que incluso ya has incorporado evento con los cuales podemos interactuar, veo que tienes el login, un pequeño consejo para que ese registro te lleve a otra página con lo que quieras mostrar podrías usar en tu if lo siguiente una vez que el input sea valido, es decir, en la condición donde indica que el input es correcto podrías colocar lo siguiente:
    
        window.location.href = 'http://www.google.com';
    Claro que tu página sería el archivo html a donde quieras dirigirte.
    
    
    
    Por otra parte sería muy bueno que pudieras generar tus productos con JS, simplemente que los dibuje con un forEach sería genial, en esa pagina de productos, si tienes alguna duda de como realizar esto puedes preguntarme o checar el proyecto ejemplo que les compartí anteriormente, si pudieras lograr eso sería genial.
    
    
    
    Te hago la devolución para que intentemos hacer esto de más nivel, vale?
    
    
    
    Espero que se comprenda muy bien la devolución, para cualquier duda que tengas me puedes consultar.
    
    Saludos!
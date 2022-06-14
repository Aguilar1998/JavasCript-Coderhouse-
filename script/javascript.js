


let Ejcarrito = [
    {
        "precio": 500,
        "id": 1,
        "title": "Yerba",
        "thumbnailUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/621306/Yerba-Mate-La-Merced-Campo-Sur-O-c-500g-1-857355.jpg?v=637473138275470000"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Mate",
        "thumbnailUrl": "../Resourse/image/mate-slider3.webp"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Termo",
        "thumbnailUrl": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/450/256/products/termo-verde-nuevo-frente1-9ebc319aca02038ab116166160261528-640-0.jpg"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Bombilla",
        "thumbnailUrl": "https://http2.mlstatic.com/D_NQ_NP_794871-MLA48950371330_012022-O.webp"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mochila matera",
        "thumbnailUrl": "https://http2.mlstatic.com/D_NQ_NP_999412-MLA49655019392_042022-O.webp"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Taza",
        "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t17uGr72Ws532C9KyRiaWZX9dy6STeX8Lw&usqp=CAU"
    }
]



class termos {
    constructor(marca, litros, precio) {
        this.marca = marca
        this.litros = litros
        this.precio = precio
    }
}

const termos1 = new termos('stanley ', 1, 24000, img: url = ("https://cdn.shopify.com/s/files/1/0238/5366/2285/products/14.2verde_2000x.jpg?v=1605274036"))
const termos2 = new termos('enerfit', 1/2, 9000,  img: url = ("https://cdn.shopify.com/s/files/1/0238/5366/2285/products/14.2verde_2000x.jpg?v=1605274036"))
const termos3 = new termos('thermos ', 1/2, 16000,  img: url = ("https://cdn.shopify.com/s/files/1/0238/5366/2285/products/14.2verde_2000x.jpg?v=1605274036"))

// Creamos un array con todos nuestros termos
const todosLosTermos = [
    termos1,
    termos2,
    termos3
]


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


// RENDERIZAR TODOS LOS PRODUCTOS
const renderProducts = () => {
    products.forEach((product) => {
        const { marca, litros, precio } = product;
        productsEl.innerHTML += `
        <div class="item">
            <div class="item-container">
                <div class="item-img">
                    <img src="${imgSrc}" alt="${name}" />
                </div>
                <div class="desc">
                    <h2>${name}</h2>
                    <h2><small>$</small>${price}</h2>
                    <p>
                        ${description}
                    </p>
                </div>
                <div class="add-to-wishlist">
                    <img src="./icons/heart.png" alt="add to wish list">
                </div>
                <div class="add-to-cart" onclick="addToCart(${id})">
                    <img src="./icons/bag-plus.png" alt="add to cart">
                </div>
            </div>
        </div>
    `;
    });
};










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






    Hola Jesús!

    Creo que me confundiste con el otro tutor jajaja, pero no pasa nada
    
    Me gustaría comentarte que tu JS va muy bien, veo que incluso ya has incorporado evento con los cuales podemos interactuar, veo que tienes el login, un pequeño consejo para que ese registro te lleve a otra página con lo que quieras mostrar podrías usar en tu if lo siguiente una vez que el input sea valido, es decir, en la condición donde indica que el input es correcto podrías colocar lo siguiente:
    
        window.location.href = 'http://www.google.com';
    Claro que tu página sería el archivo html a donde quieras dirigirte.
    
    
    
    Por otra parte sería muy bueno que pudieras generar tus productos con JS, simplemente que los dibuje con un forEach sería genial, en esa pagina de productos, si tienes alguna duda de como realizar esto puedes preguntarme o checar el proyecto ejemplo que les compartí anteriormente, si pudieras lograr eso sería genial.
    
    
    
    Te hago la devolución para que intentemos hacer esto de más nivel, vale?
    
    
    
    Espero que se comprenda muy bien la devolución, para cualquier duda que tengas me puedes consultar.
    
    Saludos!
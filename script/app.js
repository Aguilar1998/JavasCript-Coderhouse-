

// Declaraciones
const allproductos = [termo, bombilla, mochilaMatera, mate, yerba, taza]

const allButton = [
    termoButton, 
    bombillaButton,
    mochilaMateraButton, 
    mateButton, 
    yerbaButton, 
    tazaButton
]




// Query de Elementos

const productosListContainer = document.querySelector('.main__Galeri')

const ListContainer = document.querySelector('.seleccionButton')

const eventButton = document.querySelector('.card__Button')


// Funciones
const mostrarmensaje = () =>{
    console.log('Evento escuchado');
}



const mostrarTodosLosProductos = (e) =>{
    console.log(e.target);
    allproductos.forEach(producto => {
        const productoCard = document.createElement('section')
        productoCard.className = 'main__Galeri'
        productoCard.setAttribute('data-id', producto.id)
        productoCard.innerHTML = `
        <div id="productos" class="card">
            <figure class="card__Imagen">
                <img src="${producto.thumbnailUrl}" alt="${producto.marca}">
            </figure>
            <div class="card__Contenido">
                <div class="card__Cabecera">
                    <h3 class="card__Nombre">
                    ${producto.marca}
                    </h3>
                    <span class="card__Precio">
                    ${producto.precio}
                    </span>
                </div>
                <p class="card__Bio">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error natus recusandae veritatis, molestiae et accusantium sapiente laboriosam consequatur harum nam rem dolorem officiis quia temporibus ratione expedita vero aliquam. Dolorum!
                </p>
                <button data-id="${producto.marca}" class="card__Button">
                    Agregar al carrito
                </button>
            </div>
        </div>
        `;
        productosListContainer.append(productoCard)
    });

    let carritoCompra = []

    const mostrarDatosDelBoton = (e) =>{
        const datoDeLosProductos = e.target.getAttribute('data-id');
        const product = allproductos.find(miProducto => miProducto.marca == datoDeLosProductos)
        carritoCompra.push(product)
        // console.log(carritoCompra);   
        console.log('carrito', carritoCompra)
        mostrarTotal(getTotal(carritoCompra))
        mostrarCarrito(carritoCompra) 
    }

    const botonesReferencias =document.querySelectorAll('.card__Button')
    botonesReferencias.forEach(agregarAlCarrito => {
        agregarAlCarrito.addEventListener('click', mostrarDatosDelBoton)
    });

    //get total carrito
    const getTotal = (arr) => {
        let total = 0
        arr.forEach((producto) => {
            total += producto.precio
        })
        return total
    }
    //pintar total carrito
    const mostrarTotal = (total) => {
        const divTotal = document.querySelector('#total-carrito')
        divTotal.innerHTML = total.toLocaleString()
    }
    //pintar cuenta carrito
    const mostrarCarrito = (arr) => {
        const divCuenta = document.querySelector('.cuenta-carrito')
        divCuenta.innerHTML = arr.length
    }
}
// // ACTUALIZAR EL CARRITO
// const updateCart = () => {
//     mostrarTodosLosProductos();
//     getTotal();
    
//     // guardar el array en el localStorage
//     localStorage.setItem("CART", JSON.stringify(cart));
// };

// // array del carrito
// let main__Galeri = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

// // AÑADIR AL CARRITO
// const addToCart = (id) => {
//     // checar si un producto ya está en el carrito
//     if (cart.some((item) => item.id === id)) {
//         changeNumberOfUnits("plus", id);
//     } else {
//         const item = products.find((product) => product.id === id);
//         cart.push({
//         ...item,
//         numberOfUnits: 1,
//         });
//     }

//     updateCart();
// };
// variable para mostrar todos los productos
const agregarProductosConBoton = document.querySelector('.todosLosProductos')
console.log(agregarProductosConBoton);

// evento click para mostrar todos los productos 
agregarProductosConBoton.addEventListener('click',mostrarTodosLosProductos )





// funcion para renderizar botones

const listButton = () =>{
    allButton.forEach(buttonCardList => {
        const listaDeproductosEnBotones = document.createElement('button')
        listaDeproductosEnBotones.className = 'seleccionarProducto'
        listaDeproductosEnBotones.setAttribute('data-id', buttonCardList.id)
        listaDeproductosEnBotones.innerHTML = `
        <span>
            ${buttonCardList.name}
        </span>
        `;
        ListContainer.append(listaDeproductosEnBotones)
    });
}



// EventListeners



// Ejecucioones

listButton()
// mostrarTodosLosProductos()
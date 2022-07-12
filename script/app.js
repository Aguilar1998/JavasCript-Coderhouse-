// Declaraciones
const allproductos = [
    termo,
    bombilla, 
    mochilaMatera, 
    mate, 
    yerba, 
    taza
]

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



// Funciones


const mostrarTodosLosProductos = (e) =>{
    // console.log(e.target);
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
    // array 
    let carritoCompra = []

    const mostrarDatosDelBoton = (e) =>{
        const datoDeLosProductos = e.target.getAttribute('data-id');
        const product = allproductos.find(miProducto => miProducto.marca == datoDeLosProductos)
        carritoCompra.push(product)
        console.log(carritoCompra);   
        console.log('carrito', carritoCompra)
        mostrarTotal(getTotal(carritoCompra))
        mostrarCarrito(carritoCompra) 
    }

    const botonesReferencias =document.querySelectorAll('.card__Button')
    botonesReferencias.forEach(agregarAlCarrito => {
        agregarAlCarrito.addEventListener('click', mostrarDatosDelBoton)
    });

    const getTotal = (arr) => {
        let total = 0
        arr.forEach((producto) => {
            total += producto.precio
        })
        return total
    }
    const mostrarTotal = (total) => {
        const divTotal = document.querySelector('#total-carrito')
        divTotal.innerHTML = total.toLocaleString()
    }
    const mostrarCarrito = (arr) => {
        const divCuenta = document.querySelector('.cuenta-carrito')
        divCuenta.innerHTML = arr.length
    }
}

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




const mostrarProductoSeleccionado = document.querySelector('.seleccionButton')
console.log(mostrarProductoSeleccionado);
mostrarProductoSeleccionado.addEventListener('click',mostrarTodosLosProductos)


const agregarCartProducto = () => {
    const miClick = documen.querySelector('.main__Galeri')
    console.log(miClick);
    miClick.addEventListener('click', listButton)

    switch (productos(this.id)) {
        case 1:
            productos(termo)
            console.log(termo);    
            break
        case 2:
            productos(bombilla)
            console.log(bombilla);
            break
        case 3:
            productos(mochilaMatera)
            console.log(mochilaMatera) 
            break
        case 4:
            productos(mate)
            console.log(mate) 
            break
        case 5:
            productos(yerba)
            console.log(yerba) 
            break
        case 6:
            productos(taza)
            console.log(taza) 
            break
        default:
            console.log('Boton incorrecto')
            break
    }
}




// EventListeners



// Ejecucioones

listButton()

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

const carritoCompra = []

const carritoButton = []


///////////////////////////////////

// Query de elementos

const productosListContainer = document.querySelector('.main__Galeri')

const ListContainer = document.querySelector('.seleccionButton')

const mostrarProductoSeleccionado = document.querySelector('.seleccionarProducto')

const pintarProductosSeleccionado = document.querySelector('.cart-Items')








///////////////////////////////////

// Funciones

console.group("Funcion card")

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

    const comprarCarrito = () =>{
        pintarProductosSeleccionado.innerHTML = ''
        carritoCompra.forEach(carro => {
            const card = document.createElement('div')
            card.className = 'cart-Items'
            card.setAttribute('data-id', carro.marca)
            card.innerHTML = `
                <div class="cart__header">
                    <img src="${carro.thumbnailUrl}" alt="producto">
                    <h3 class="cart__Nombre">
                        ${carro.marca}
                    </h3>
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${carro.id})">-</div>
                    <span class="cart__Precio">
                        $${carro.precio}
                    </span>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${carro.id})">+</div>
                </div>
            `;
            pintarProductosSeleccionado.append(card)
        });

    }
    
    const mostrarDatosDelBoton = (e) =>{
        const datoDeLosProductos = e.target.getAttribute('data-id');
        const product = allproductos.find(miProducto => miProducto.marca == datoDeLosProductos)
        carritoCompra.push(product)
        console.log(carritoCompra);   
        console.log('carritoCompra', carritoCompra)
        mostrarTotal(getTotal(carritoCompra))
        mostrarCarrito(carritoCompra) 
        comprarCarrito()
        localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra))
    }

    const botonesReferencias =document.querySelectorAll('.card__Button')
    botonesReferencias.forEach(agregarAlCarrito => {
        agregarAlCarrito.addEventListener('click', mostrarDatosDelBoton)
    });

    if (localStorage.getItem('carritoCompra')) {
        carritoCompra = JSON.parse(localStorage.getItem('carritoCompra'))
        mostrarDatosDelBoton()
    }

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


    const vaciarCarrito =() => {
        if (localStorage.getItem('carritoCompra')) {
            localStorage.removeItem('carritoCompra')
        }
        carritoCompra = []
        carritoCompra()
    }
    const vaciarCarritoBtn = document.querySelector('.vaciarCarrito')
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
}


console.groupEnd()



///////////////////////////////////

console.group("funcion Boton")

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

console.groupEnd()







///////////////////////////////////

// EventListeners

mostrarProductoSeleccionado.addEventListener('click',mostrarTodosLosProductos)



///////////////////////////////////

// Ejecucioones

listButton()



// Declaraciones
const allproductos = [termo, bombilla, mochilaMatera]





// Query de Elementos

const productosListContainer = document.querySelector('.main__Galeri')




// Funciones


const renderizarListaProductos = () =>{
    allproductos.forEach(producto => {
        const productoCard = document.createElement('section')
        productoCard.className = 'main__Galeria'
        productoCard.setAttribute('data-id', producto.id)
        productoCard.innerHTML = `
        <div id="productos" class="card">
        <figure class="card__Imagen">
            <img src="${producto.thumbnailUrl}" alt="${producto.marca}">
        </figure>
        <div class="card__Contenido">
            <div class="card__Cabecera">
                <h3 class="card__Nombre">$${producto.precio}</h3>
                <span class="card__Profesion">${producto.marca}</span>
            </div>
            <p class="card__Bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error natus recusandae veritatis, molestiae et accusantium sapiente laboriosam consequatur harum nam rem dolorem officiis quia temporibus ratione expedita vero aliquam. Dolorum!</p>
            <button class="card__Buttom">
                <span>Comprar</span>
            </button>
        </div>
    </div>
        `;
        productosListContainer.append(productoCard)
    });
}


// const accionarProductos = () =>{
//     allproductos.forEach(producto => {
//         const productoButton = document.createElement('section')
//         productoButton.className = 'button'
//         productoButton.setAttribute('data-id', producto.id)
//         productoButton.innerHTML = `
//                 <span>Comprar</span>
//         `;
//         productosListContainer.append(productoButton)
//     });
// }


// EventListeners








// Ejecucioones

renderizarListaProductos()
// accionarProductos()
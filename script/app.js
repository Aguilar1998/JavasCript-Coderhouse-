

// Declaraciones
const allproductos = [termo, bombilla, mochilaMatera, mate, yerba, taza]

const allButton = [termoButton, bombillaButton, mochilaMateraButton, mateButton, yerbaButton, tazaButton]




// Query de Elementos

const productosListContainer = document.querySelector('.main__Galeri')

const ListContainer = document.querySelector('.seleccionButton')



// Funciones


const renderizarListaProductos = () =>{
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

const listButton = () =>{
    allButton.forEach(buttonCardList => {
        const buttonCard2 = document.createElement('button')
        buttonCard2.className = 'card__Buttom'
        buttonCard2.setAttribute('data-id', buttonCardList.id)
        buttonCard2.innerHTML = `
        <span>
            ${buttonCardList.name}
        </span>
        `;
        ListContainer.append(buttonCard2)
    });
}



// const renderizarDatosProductos =(e) =>{
    
// }
const agregarListenerButton =()=>{
    const productoCardButton = document.querySelector('.card__Buttom') 
    productoCardButton.addEventListeners('click',renderizarDatosProductos)
}

// EventListeners



// Ejecucioones

renderizarListaProductos()
listButton()
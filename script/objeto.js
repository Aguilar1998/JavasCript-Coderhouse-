class productos {
    constructor(marca, material, precio, id, thumbnailUrl ) {
        this.marca = marca
        this.material = material
        this.precio = precio
        this.id = id
        this.thumbnailUrl = thumbnailUrl
    }
}

const termo = new productos('Termo Stanley ', 'aluminio', 4000, 1,  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/450/256/products/termo-verde-nuevo-frente1-9ebc319aca02038ab116166160261528-640-0.jpg' )
const bombilla = new productos('Bombilla Campero', 'aluminio', 2000, 2, 'https://http2.mlstatic.com/D_NQ_NP_794871-MLA48950371330_012022-O.webp' )
const mochilaMatera = new productos('Mochila Matera Enerfit ', 'aluminio', 1000, 3, 'https://http2.mlstatic.com/D_NQ_NP_999412-MLA49655019392_042022-O.webp' )
const mate = new productos('Mate pampero ', 'madera', 1000, 3, 'https://http2.mlstatic.com/D_NQ_NP_929154-MLA48771796965_012022-O.webp' )
const yerba = new productos('Yerba aguantadora ', 'En paquete', 1000, 3, 'https://yerbamateargentina.org.ar/imagenes/archivos/productos/21331_imagen_812x812xrecortarxagrandar.jpg?random=1616970886' )
const taza = new productos('taza para cafe ', 'ceramica', 1000, 3, 'https://www.hola.com/imagenes/seleccion/20200918175443/tazas-bonitas-practicas-oficina/0-866-303/tazas-blanco-negro-oficina-a.jpg' )


edadUsuario >= 18 ? console.log('puede pasar'): console.log('no puede pasar')
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
const mate = new productos('Mate pampero ', 'madera', 1000, 3, '../assets/image/Mates/mate2-slider1.webp' )
const yerba = new productos('Yerba aguantadora ', 'En paquete', 1000, 3, '../assets/image/yerbaAguantadora.jpg' )
const taza = new productos('taza para cafe ', 'ceramica', 1000, 3, 'https://st.depositphotos.com/1020804/1263/i/450/depositphotos_12638853-stock-photo-coffee-cup-and-beans.jpg' )


edadUsuario >= 18 ? console.log('puede pasar'): console.log('no puede pasar')
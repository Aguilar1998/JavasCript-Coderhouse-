



///////////////////////////////////////////////////////////////////////////////////////

console.log(document)


const termos1 = new termos('grande ', 'stanley', 24000);
const termos2= new termos('mediano', 'thermos', 9000);
const termos3 = new termos('chico', 'enerfit', 16000);

const mate1 = new mate('grande ', 'stanley', 4000);
const mate2 = new mate('mediano', 'stanley', 2000);
const mate3 = new mate('chico ', 'stanley', 1000);


productos[
    mate1,
    mate2,
    mate3,
    termos1,
    termos2,
    termos3
]

console.log(productos);


switch (productos) {
    case mate: 
        class mate {
            constructor(tamaño, marca, precio) {
                // metodo constructor (no es necesario colocar que es una funcion)
                this.tamaño = tamaño
                this.marca = marca
                this.precio = precio
            }
            hablar(){
                console.log("Seleccionaste un " + this.marca +" de tamaño  " + this.tamaño);
            }
            sumaIva(){
                this.precio = this.precio * 1.21;
            }
            vender(){
                this.vendido = true;
            }
        }
        // debe ingresar los datos
        
        break;
    case termos:
        class termos {
            constructor(tamaño, marca, precio) {
                // Datos de los distintos termos que existen en mi sitio.
                this.tamaño = tamaño
                this.marca = marca
                this.precio = precio
            }
            hablar(){
                console.log("Seleccionaste un termo de marca: " + this.marca + " de " + this.tamaño + "litros");
            }
            sumaIva(){
                this.precio = this.precio * 1.21;
            }
            vender(){
                this.vendido = true;
            }
        }
        
        // debe ingresar los datos
        
        break;
    default:
        break;
}





productos()




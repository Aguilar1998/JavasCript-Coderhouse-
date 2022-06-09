






class termos {
    constructor(marca, litros, precio) {
        this.marca = marca
        this.litros = litros
        this.precio = precio
    }
}

const termos1 = new termos('stanley ', 1, 24000,)
const termos2 = new termos('enerfit', 1/2, 9000)
const termos3 = new termos('thermos ', 1/2, 16000)

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
    }

    console.log('Bienvenido',nombre,', tu correo es: ', correo);
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', button);









// Hola Jesús!

// Creo que me confundiste con el otro tutor jajaja, pero no pasa nada

// Me gustaría comentarte que tu JS va muy bien, veo que incluso ya has incorporado evento con los cuales podemos interactuar, veo que tienes el login, un pequeño consejo para que ese registro te lleve a otra página con lo que quieras mostrar podrías usar en tu if lo siguiente una vez que el input sea valido, es decir, en la condición donde indica que el input es correcto podrías colocar lo siguiente:

// 	window.location.href = 'http://www.google.com';
// Claro que tu página sería el archivo html a donde quieras dirigirte.



// Por otra parte sería muy bueno que pudieras generar tus productos con JS, simplemente que los dibuje con un forEach sería genial, en esa pagina de productos, si tienes alguna duda de como realizar esto puedes preguntarme o checar el proyecto ejemplo que les compartí anteriormente, si pudieras lograr eso sería genial.



// Te hago la devolución para que intentemos hacer esto de más nivel, vale?



// Espero que se comprenda muy bien la devolución, para cualquier duda que tengas me puedes consultar.

// Saludos!

todosLosTermos.forEach(mostrarTermos => {
    console.log("mostrar mensaje");
});




// // Agregar Nodos:
// // paso 1: crear un elemento en blanco
// // ej:
//     const contenedor = document.createElement('div')



// // paso 2: Darle un contenido a mi elemento creado
// // Se puede implementar una card completa? 
//     // ej:
//     contenedor.innerHTML = '<p>Para saber mas sobre nuestros productos registrate y envianos un mensaje para que podamos brindarte informacion al respecto.</p>'


// // paso 3: Asignar nuestro contenedor creado como hijo de otro elemento.
// // Antes de este paso, tengo que haber accedido a mi elemento padre.
//     // ej:
//     const galeria = document.getElementById('galeria')
//     galeria.append(contenedor)

//     contenedor.innerHTML = '1'






//     -Agrgar un producto al carrito.
//     const contenedor = document.createElement('car')





//     -Eliminar un producto del carrito.
//     -Sumar el valor de los productos en el carrito e informar el resultado de la suma.
//     -Cuando presione el carrito debera visualizar los productos que selecciono mas el monto total.





















// //////////////////////////////////////////////////////////

// // Clase 10

// // Definir Storage.
// // Identificar y diferenciar localStorage y sessionStorage.
// // Definir JSON y entender su alcance y utilidad en cada situación.


// // LOCALSTORAGE: SETITEM
// // Se almacenan en el navegador de forma indefinida

// // Método ->  localStorage.setItem(clave, valor)
// // clave = nombre para identificar el elemento 
// // valor = valor/contenido del elemento 
// localStorage.setItem('bienvenida', '¡Hola Coder!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

// // Recorriendo el storage
// for (let i = 0; i < localStorage.length; i++) {
//     const clave = localStorage[i];
//     console.log("clave: " + clave);
//     console.log("valor: " + localStorage.getItem(clave));
// }

// const isDArkMode = localStorage.getItem('isDarkMode')
// console.log(isDarkMode);
// // importante comprobar que sea true...
// if (!isDarkMode) {
//     alert('Dark Mode Activado')
// }else{
//     alert('Dark Mode no esta activado')
// }

// // localStorage.clear()
// // Esto es para eliminar todo!



// //////////////////////////////////////////////////////


// // sessionStorage: SETITEM
// // Se almacena en el navegador hasta que el usuario cierra la ventana.



// // Método ->  sessionStorage.setItem(clave, valor)
// // clave = nombre del elemento
// // valor = Contenido del elemento
// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');


// let lista   =  sessionStorage.getItem('seleccionados').split(",");
// let bandera = (sessionStorage.getItem('esValido') == 'true');
// let email   =  sessionStorage.getItem('email');

// console.log(typeof lista);   //object ["1","2","3"];
// console.log(typeof bandera); //boolean;
// console.log(typeof email);   //string;








// // Pongo algunos resultados booleanos para recordar


// // Boolean(null) //false
// // Boolean(undefined) //false
// // Boolean("")	  // false
// // Boolean(NaN)//false
	
// // Boolean("cualquierTexto”)//true
// // Boolean(38573)//true










// // CONVERSIONES DE/HACIA JSON

// // Cuando sea necesario enviar un objeto Javascript al servidor o almacenarlo en storage, será necesario convertirlo a un JSON (una cadena) antes de ser enviado.


// // JSON.stringify 

// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}



// // JSON.parse


// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2   


// // ejemplo
// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));


// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//     producto.sumaIva();
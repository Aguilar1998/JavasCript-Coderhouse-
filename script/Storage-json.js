    
//     localStorage: setitem 
// Se almacena en el navegador de forma indefinida
// -Definimos claves en el storage donde almacenamos valores. y se guardan en formato de cadena de caracteres(DOMstring).

// ----------

//     sessionStorage: setitem
// Se almacena en el navegador hasta que el usuario cierra la ventana.
//     se guardan en formato de cadena de caracteres(DOMstring).

// Utilizamos el metodo key dentro de un for para iterar el localStorage

//     for (let i = 0; i < localStorage.length; i++) {
//         const clave = localStorage.key(i);
//         console.log("clave: "+ clave);
//         console.log("valor: "+ localStorage.getItem(clave));
//     }

// Eliminar dados del storage(.removeItem)



localStorage.getItem("boton", this.id)
// Eventos

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
    }else if (!nombre && !correo){
        window.location.href = 'http://www.google.com';
        return;
    }

    console.log('Bienvenido',nombre,', tu correo es: ', correo);
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', button);


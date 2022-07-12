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
        console.log('Completa todos los datos');
        return;
    }else if ( (nombre!==baseDeDatos.nombre)) {
        console.log('No existe este usuario!');
        return;
    }else if (!nombre && !correo){
        window.location.href = 'http://www.google.com';
        console.log('Bienvenido',nombre,', tu correo es: ', correo);
        return;
    }
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', button);


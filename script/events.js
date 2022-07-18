// Eventos

/* Funcion formulario */
const baseDeDatos = {
    nombre: 'Martin',
    correo: 'Martin@Estudiante.com',
}
const resultado = document.getElementById('inicioSesion')

const button = (event)=>{
    event.preventDefault();
    const nombre = event.target[0].value
    const correo = event.target[1].value
    
    if (!nombre || !correo) {
        resultado.innerText = 'Completa todos los datos'
        return;
    }else if ( (nombre!==baseDeDatos.nombre)) {
        resultado.innerText = 'No existe este usuario!'
        return;
    }else if (!nombre && !correo){
        resultado.innerText = 'Bienvenido',nombre,', tu correo es: ', correo
        window.location.href = 'http://www.google.com';
        return;
    }
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', button);


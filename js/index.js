let numeroSecreto; // Declaramos una variable que contenga la "llamada" a una función que generará el número aleatorio
let botonComprobar = document.querySelector('#comprobar') // Declaramos una variable que contenga el botón del HTML que va a comprobar el número
let borrarDatos = document.querySelector('.borrarDatos') // Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage
let intentosExitosos = localStorage.getItem('exitosos') || 0; // Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave
let intentosFallidos = localStorage.getItem('fallidos') || 0; // Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave

function generarNumeroAleatorio() { // Declaramos una función que generará el número aleatorio
    numeroSecreto = Math.floor(Math.random() * 10); // Añadimos un 
}

botonComprobar.addEventListener('click', verificarNumero)

function verificarNumero() {
    let numeroUsuario = document.querySelector('#numeroUsuario').value;
    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        actualizarEstadisticas(true);
        mostrarResultado("¡Correcto! El número era " + numeroSecreto);
        generarNumeroAleatorio();
    } else {
        actualizarEstadisticas(false);
        mostrarResultado("Incorrecto, intenta de nuevo.");
    }
}

function actualizarEstadisticas(esExitoso) {
    if (esExitoso) {
        intentosExitosos++;
        localStorage.setItem('exitosos', intentosExitosos);
    } else {
        intentosFallidos++;
        localStorage.setItem('fallidos', intentosFallidos);
    }
    mostrarEstadisticas();
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}

function mostrarEstadisticas() {
    let mensaje = `Exitosos: ${intentosExitosos}, Fallidos: ${intentosFallidos}`;
    document.getElementById('estadisticas').textContent = mensaje;
}

borrarDatos.addEventListener('click', borrarDatosLocales)

function borrarDatosLocales() {
    localStorage.clear()
    location.reload();
}

generarNumeroAleatorio()
mostrarEstadisticas();

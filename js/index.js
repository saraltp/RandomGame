let numeroSecreto; // Declaramos una variable que contenga la "llamada" a una función que generará el número aleatorio
let botonComprobar = document.querySelector('#comprobar') // Declaramos una variable que contenga el botón del HTML que va a comprobar el número
let borrarDatos = document.querySelector('.borrarDatos') // Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage
let textoResultado = document.querySelector('#resultado') // Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let textoEstadisticas = document.querySelector('#estadisticas') // Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let intentosExitosos = localStorage.getItem('exitosos') || 0; // Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave
let intentosFallidos = localStorage.getItem('fallidos') || 0; // Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave

function generarNumeroAleatorio() { // Declaramos una función que generará el número aleatorio
    numeroSecreto = Math.floor(Math.random() * 10); // Añadimos un 
    console.info(numeroSecreto)
}

botonComprobar.addEventListener('click', verificarNumero)

function verificarNumero() {
    let numeroUsuario = document.querySelector('#numeroUsuario').value;
    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        intentosExitosos++;
        localStorage.setItem('exitosos', intentosExitosos);
        textoResultado.innerHTML = "<div class='correcto'><span style='color:green'>✔</span> ¡Correcto! El número era <b>" + numeroSecreto + "</b></div>";
        textoEstadisticas.innerHTML = `Exitosos: ${intentosExitosos}, Fallidos: ${intentosFallidos}`;
        generarNumeroAleatorio();
    } else {
        intentosFallidos++;
        localStorage.setItem('fallidos', intentosExitosos);
        textoResultado.innerHTML = "<div class='incorrecto'><span style='color:red'>✘</span> Incorrecto, intenta de nuevo.</div>";
        textoEstadisticas.innerHTML = `Exitosos: ${intentosExitosos}, Fallidos: ${intentosFallidos}`;
    }
}

borrarDatos.addEventListener('click', borrarDatosLocales)

function borrarDatosLocales() {
    localStorage.clear()
    location.reload();
}

textoEstadisticas.innerHTML = `Exitosos: ${intentosExitosos}, Fallidos: ${intentosFallidos}`;

generarNumeroAleatorio()
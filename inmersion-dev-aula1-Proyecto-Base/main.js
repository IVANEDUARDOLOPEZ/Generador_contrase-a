let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let btn = document.getElementById('limpiar');
let contraseña = document.getElementById('contrasena');
let mensajeSeguridad = document.getElementById('mensaje-seguridad'); // Asegúrate de tener un elemento con este id en tu HTML

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8) {
        alert("La cantidad debe ser mayor a 8");
        return;
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        password += caracterAleatorio;
    }

    contraseña.value = password;
    
    
    let tieneMayusculas = /[A-Z]/.test(password);
    let tieneMinusculas = /[a-z]/.test(password);
    let tieneNumeros = /[0-9]/.test(password);
    let tieneSimbolos = /[!@#$%^&*]/.test(password);

    if (tieneMayusculas && tieneMinusculas && tieneNumeros && tieneSimbolos) {
        mensajeSeguridad.textContent = "Contraseña muy segura";
    } else if (tieneMayusculas && tieneMinusculas && tieneNumeros) {
        mensajeSeguridad.textContent = "Contraseña segura";
    } else if (tieneMayusculas && tieneMinusculas) {
        mensajeSeguridad.textContent = "Contraseña poco segura";
    } else {
        mensajeSeguridad.textContent = "Contraseña insegura";
    }
}

function limpiar() {
    cantidad.value = '';
    contraseña.value = '';
    mensajeSeguridad.textContent = ''; 
}








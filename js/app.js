//----------- VARIABLES ----------

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const btnEnviar = document.getElementById('enviar');
const formulario = document.getElementById('enviar-mail')

const btnReset = document.getElementById('resetBtn')

//----------- EVENT LISTENERS ---------------
eventlisteners();

function eventlisteners(){
    // inicio de la aplicacion y desabilitar submit
document.addEventListener('DOMContentLoaded', inicioApp);
    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetFormulario);
};



// ---------- FUNCIONES -------------


function inicioApp(){
    // desahbilitar el envio
    btnEnviar.disabled = true
};

// Valida el campo tenga algo escrito
function validarCampo(){

    validarLongitud(this);

    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
}

function validarLongitud(campo){
    
    if (campo.value.length > 0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }

}

function enviarEmail(e){
    console.log('mail enviado')
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block';

    // ocultar spinner y mostrar enviado
    setTimeout(function(){
        spinnerGif.style.display = "none"
        document.getElementById('loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formulario.reset();

        }, 2000)

    }, 3000);
    
    
    e.preventDefault();


}

function resetFormulario(e){
    e.preventDefault();
    formulario.reset();
}
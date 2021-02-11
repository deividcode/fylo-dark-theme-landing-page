// Variables
/* Codigo para validar email*/
const formulario = document.querySelector('send-email__form');
const mensajeError = document.querySelector('#mensajeError');
const btnEmail = document.querySelector('.btn__email');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Functiones

// EventListenner

eventListenner();

function eventListenner(){

    btnEmail.addEventListener('click', examinarEmail);

}

function examinarEmail(e){

    e.preventDefault();    
    
    let inputCorreo = document.querySelector('#input_email').value;
    
    if(er.test(inputCorreo)){
        mostrarMensaje('Mail Sent Successfully', "#0ad00a");
        // Enviar
    }else{
        mostrarMensaje('Please Enter a Valid Email Address', "#FF4242");
    }

}

function mostrarMensaje(mensaje, color){
    mensajeError.style.color = color
    mensajeError.innerHTML = mensaje;
}



'use strict'

//variables

//Pop Up
const btnAyuda = document.querySelector('#btn-ayuda');
const popUp = document.querySelector('.contenedor-popup');
const btnCerrarPopUp = document.querySelector('#btn-cerrar-ayuda');

//Formulario
const inputUsuario = document.querySelector('#input-usuario').value;
const inputContraseña = document.querySelector('#input-contraseña').value;
const btnLogin = document.querySelector('#btn-login');
const incorrectoUsuario = document.querySelector('#incorrecto-usuario');





//Formulario

//Funciones

//Validar formulario
const validarFormulario = (e) =>{
    if(inputUsuario != 'admin'){
        incorrectoUsuario.innerHTML = 'Usuario incorrecto';
    }else if(inputUsuario.lenght < 1){
        incorrectoUsuario.innerHTML = 'Debe ingresar usuario';
    }

    e.preventDefault();
}





//Eventos

//pop up
btnAyuda.addEventListener('click', () => {
    popUp.style.display = 'block';
});

btnCerrarPopUp.addEventListener('click', () =>{
    popUp.style.display = 'none';
});


btnLogin.addEventListener('click', validarFormulario);






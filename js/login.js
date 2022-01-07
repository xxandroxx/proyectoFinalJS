'use strict'
//variables

//Pop Up
const btnAyuda = document.querySelector('#btn-ayuda');
const popUp = document.querySelector('.contenedor-popup');
const btnCerrarPopUp = document.querySelector('#btn-cerrar-ayuda');

//Formulario
const inputUsuario = document.querySelector('#input-usuario');
const inputContraseña = document.querySelector('#input-contraseña');
const btnLogin = document.querySelector('#btn-login');
const incorrectoUsuario = document.querySelector('#incorrecto-usuario');
const incorrectoContraseña = document.querySelector('#incorrecto-contraseña');
const formularioLogin = document.querySelector('#formulario-login');
const contenedorLogin = document.querySelector('.contenedor-login');
const contenidoJuego = document.querySelector('.contenido-juego');


//Funciones
formularioLogin.addEventListener('submit', e => e.preventDefault());

//Validar formulario
const validarFormulario = () =>{
    
    //Error usuario
    if(inputUsuario.value.length < 1){
        incorrectoUsuario.innerHTML = 'Debe ingresar un usuario';
    }else if(inputUsuario.value != 'admin'){
        incorrectoUsuario.innerHTML = 'Usuario incorrecto';
    }else{
        incorrectoUsuario.innerHTML = '';
    }

    //Error contraseña
    if(inputContraseña.value.length <1){
        incorrectoContraseña.innerHTML = 'Debe ingresar una contraseña'
    }else if(inputContraseña.value != 'admin'){
        incorrectoContraseña.innerHTML = 'Contraseña incorrecta';
    }else{
        incorrectoContraseña.innerHTML = '';
    }

    //Correcto el ingreso de usuario y contraseña
    if(inputUsuario.value === 'admin' && inputContraseña.value === 'admin'){

        incorrectoUsuario.innerHTML = 'Correcto';
        incorrectoUsuario.style.color = 'green';
        incorrectoContraseña.innerHTML = 'Correcto';
        incorrectoContraseña.style.color = 'green';

        setTimeout(() => {
           contenedorLogin.style.display = 'none';
           contenidoJuego.style.display = 'block';
        }, 1000);
    }
}


//Eventos

//pop up
btnAyuda.addEventListener('click', () => {
    popUp.style.display = 'block';
});

btnCerrarPopUp.addEventListener('click', () =>{
    popUp.style.display = 'none';
});


//Formulario
btnLogin.addEventListener('click', validarFormulario);






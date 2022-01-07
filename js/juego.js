'use strict'

//Variables
const btnJugar = document.querySelector('.btn-jugar');
const mainJuego = document.querySelector('.main-juego');
const contenedorPuntajesAnteriores = document.querySelector('.contenedor-puntajes-anteriores');
const seleccionImg = document.querySelector('.seleccion-img');
const seleccionImgIa = document.querySelector('#seleccion-img');
const btnReintentar = document.querySelector('#btn-reintentar');
const contenedorGameOver = document.querySelector('.contenedor-gameover');

//Puntaje
 let puntaje = document.querySelector('#puntaje');
 let puntosAcumulados = 0;
 let puntajeFinal = document.querySelector('#puntaje-final');
 let mostrarPuntajes = document.querySelector('#mostrar-puntajes');

//Acumulador
let acumulador = 0;

//Jugador/IA
const imgPrincipalUsuario = document.querySelector('#img-principal-usuario');
const imgPrincipalIa = document.querySelector('#img-principal-ia');
const imgPiedra = document.querySelector('#img-piedra');
const imgPapel = document.querySelector('#img-papel');
const imgTijera = document.querySelector('#img-tijera');



//Funciones

//Funcion Piedra:
const piedraSeleccion = () =>{
    //Seleccion del usuario
    imgPrincipalUsuario.src = 'img/left-st.jpg';

    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
    }, 2000);


    //Selección aleatoria del IA
    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    let random = aleatorio(1,3);

    const opcion = numero => {
        if(numero < 2 && numero > 0){

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-sc.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            //Acumulador
            acumulador++;
            console.log(acumulador);
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){

            //cambio de imagen
            imgPrincipalIa.src = 'img/right-pp.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-st.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados - 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);

}


//Funcion Papel
const papelSeleccion = () =>{

    //Seleccion del usuario
    imgPrincipalUsuario.src = 'img/left-pp.jpg';

    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
    }, 2000);


    //Selección aleatoria del IA
    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    let random = aleatorio(1,3);

    const opcion = numero => {
        if(numero < 2 && numero > 0){

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-sc.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            //Acumulador
            acumulador++;
            console.log(acumulador);
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){

            //cambio de imagen
            imgPrincipalIa.src = 'img/right-pp.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados + 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-st.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);

}



//Funcion Tijera
const tijeraSeleccion = () =>{

    //Seleccion del usuario
    imgPrincipalUsuario.src = 'img/left-sc.jpg';

    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
    }, 2000);


    //Selección aleatoria del IA
    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    let random = aleatorio(1,3);

    const opcion = numero => {
        if(numero < 2 && numero > 0){

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-sc.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados + 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            //Acumulador
            acumulador++;
            console.log(acumulador);
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){

            //cambio de imagen
            imgPrincipalIa.src = 'img/right-pp.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{

            //Cambio de imagen
            imgPrincipalIa.src = 'img/right-st.jpg';

            //Puntos
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             //Acumulador
             acumulador++;
             console.log(acumulador);
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);
}

//Funcion termino de juego
const terminoDeJuego = () =>{

    if(acumulador >= 10){
        contenedorGameOver.style.display = 'block';

        if(puntosAcumulados < 0){
            puntosAcumulados = 0;
        }
        puntajeFinal.innerHTML = puntosAcumulados
    }

}

/******************************************************************************* */

//Eventos
btnJugar.addEventListener('click', () =>{

    btnJugar.style.backgroundColor = 'green';
    btnJugar.style.color = '#fff';
    setTimeout(() => {
        btnJugar.style.display = 'none';
        mainJuego.style.display = 'block';
        contenedorPuntajesAnteriores.style.display = 'block';
    }, 1000);
});


//Evento reiniciar el juego
btnReintentar.addEventListener('click', () =>{
    contenedorGameOver.style.display = 'none';

    acumulador = 0;
    puntosAcumulados = 0;
    puntaje.innerHTML = 0;
});

//Eventos de seleccion de imagen
imgPiedra.addEventListener('click', piedraSeleccion);
imgPapel.addEventListener('click', papelSeleccion);
imgTijera.addEventListener('click', tijeraSeleccion);



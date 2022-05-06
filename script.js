/*Configuracion de los botones + y -*/
document.getElementById('mas1h').addEventListener('click', sumarHoras);
document.getElementById('menos1h').addEventListener('click', quitarHoras);

document.getElementById('mas1m').addEventListener('click', sumarMinutos);
document.getElementById('menos1m').addEventListener('click', quitarMinutos);

document.getElementById('mas1s').addEventListener('click', sumarSegundos);
document.getElementById('menos1s').addEventListener('click', quitarSegundos);

function sumarHoras(){
    
    if (document.getElementById('tiempoHoras').value > 59){
        alert('Demaciado tiempo, el maximo es 59h');
        document.getElementById('tiempoHoras').value = 59;
    }
}

function quitarHoras(){
    if (document.getElementById('tiempoHoras').value <= -1){
        document.getElementById('tiempoHoras').value = 0;
    }
}

function sumarMinutos(){
    if (document.getElementById('tiempoMinutos').value > 59){
        document.getElementById('tiempoMinutos').value=0;
        document.getElementById('tiempoHoras').value++;
    }
}

function quitarMinutos(){
    if (document.getElementById('tiempoMinutos').value <= -1){
        document.getElementById('tiempoMinutos').value = 0;
    }
}

function sumarSegundos(){
    
    if (document.getElementById('tiempoSegundos').value > 59){
        document.getElementById('tiempoSegundos').value=0;
        document.getElementById('tiempoMinutos').value++;
    }
}

function quitarSegundos(){
    if (document.getElementById('tiempoSegundos').value <= -1){
        document.getElementById('tiempoSegundos').value = 0;
    }
}
/*=========================================================================*/
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
}


document.getElementById('iniciar').addEventListener('click', iniciarCronometro);
document.getElementById('reiniciar').addEventListener('click', reiniciarCronometro);


function iniciarCronometro(){
    var conteo = setInterval(() => {
        document.getElementById('parar').addEventListener('click', pararCronometro);

    function pararCronometro(){
        document.getElementById('tiempoHoras').value = 0;
        document.getElementById('tiempoMinutos').value = 0;
        document.getElementById('tiempoSegundos').value = 0;
        clearInterval(conteo);
        alert('Conteo detenido')
    }

        if (document.getElementById('tiempoSegundos').value > 0){
            document.getElementById('tiempoSegundos').value--;
        } else if (document.getElementById('tiempoMinutos').value > 0){
            document.getElementById('tiempoMinutos').value--;
            document.getElementById('tiempoSegundos').value = 59;
        } else if (document.getElementById('tiempoHoras').value > 0 ){
            document.getElementById('tiempoHoras').value--;
            document.getElementById('tiempoMinutos').value = 59;
            document.getElementById('tiempoSegundos').value = 59;
        } else if (document.getElementById('tiempoHoras').value == 0 && document.getElementById('tiempoMinutos').value == 0 && document.getElementById('tiempoSegundos').value == 0){
            clearInterval(conteo,1000);
            const sonido = cargarSonido("alarmaCunumi.mp3");
            sonido.play();
            document.getElementById('detener').addEventListener('click', detener);

            function detener(){
                sonido.pause();
                sonido.currentTime = 0;
            }
        }
    
    }, 1000)
    

}


function reiniciarCronometro(){
    document.getElementById('tiempoHoras').value = 0;
    document.getElementById('tiempoMinutos').value = 0;
    document.getElementById('tiempoSegundos').value = 0;
}



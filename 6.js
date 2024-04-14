var victoriasJugador1 = 0;
var victoriasJugador2 = 0;
var empates = 0;
var totalRondas = 10;

for (let i = 0; i < 10; i++) {
    
    var dadoJugador1 = Math.floor(Math.random() * 6) + 1;
    var dadoJugador2 = Math.floor(Math.random() * 6) + 1;

   
    if (dadoJugador1 > dadoJugador2) {
        victoriasJugador1++;
    } else if (dadoJugador2 > dadoJugador1) {
        victoriasJugador2++;
    } else {
        empates++;
    }
}


var porcentajeVictoriasJugador1 = (victoriasJugador1 / totalRondas) * 100;
var porcentajeVictoriasJugador2 = (victoriasJugador2 / totalRondas) * 100;
var porcetajeEmpate = (empates / totalRondas) * 100;

document.getElementById("resultado").innerHTML="Resultado de la partida:";
document.getElementById("jugador1").innerHTML="Victorias Jugador 1 : " + victoriasJugador1 ;
document.getElementById("jugador2").innerHTML="Victorias Jugador 2 :" + victoriasJugador2 ;
document.getElementById("empate").innerHTML="Empates :" + empates ;
document.getElementById("porcentaje1").innerHTML="Porcentaje Jugador 1 : " + porcentajeVictoriasJugador1 + "%";
document.getElementById("porcentaje2").innerHTML="Porcentaje Jugador 2 : " + porcentajeVictoriasJugador2 + "%";
document.getElementById("porcentajeEmpate").innerHTML="Porcentaje de Empates: " + porcetajeEmpate + "%";



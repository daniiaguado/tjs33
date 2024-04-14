
var dni = prompt("Introduce los numeros de tu dni");

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

var resto = dni % 23;

letraDni= letras[resto];


document.getElementById("resultado").innerHTML = "La letra de tu DNI es " + letraDni;


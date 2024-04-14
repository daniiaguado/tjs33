
var numeros = [];

let i;

for (i = 0; i < 6; i++) {
    i = prompt("Escribe un numero");
    numeros.push(i);
}

console.log(numeros);

var media = (numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]) / 5;

document.getElementById("resultado").innerHTML = "La media de los 5 numeros introducidos es :" + media;
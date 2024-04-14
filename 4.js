var tamaño = parseInt(prompt("Introduce el tamaño del array de números primos:"));


while (tamaño <= 0 || isNaN(tamaño)) {
    tamaño = parseInt(prompt("El tamaño debe ser un número positivo mayor que 0. Introduce el tamaño del array de números primos:"));
}

var arrayPrimos = [];
var numero = 2; 

while (arrayPrimos.length < tamaño) {
    var esPrimo = true;
  
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        arrayPrimos.push(numero);
    }
    numero++; 
}


document.getElementById("resultado").innerHTML = "El array de numeros primos :" + arrayPrimos;

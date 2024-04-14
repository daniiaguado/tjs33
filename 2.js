var clasificacion = ["Ana", "Oswaldo", "Raul", "Celia", "María", "Antonio"];



var indiceRaul = clasificacion.indexOf('Raul');
var indiceCelia = clasificacion.indexOf('Celia');


    clasificacion.splice(indiceRaul, 1, 'Celia'); 
    clasificacion.splice(indiceCelia, 1, 'Raul'); 




let eliminarAntonio = clasificacion.pop(); // la funcion pop elimina el ultimo elemnto de un array


clasificacion.splice(2,0,"Roberto"); // el 2 es la posicion , el 0 indica que no eliminara ningun elemento despues de la posocion introducida
clasificacion.splice(3,0,"Amaya");


clasificacion.unshift("Marta");

document.getElementById("resultado").innerHTML = "Clasificacion : " + clasificacion;
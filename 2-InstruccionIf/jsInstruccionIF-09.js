// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive


function mostrar()
{
// se definen las variables necesarias
let numRandom;
let max = 10;
let min = 1;
//se genera el numero random entre 1 y 10
numRandom = Math.floor(Math.random() * max + min);
	
console.log(numRandom);



}//FIN DE LA FUNCIÓN
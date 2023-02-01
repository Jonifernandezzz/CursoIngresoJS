/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let nuevoSueldo;
let aumento;

// para calcular el nuevo sueldo debo sumarle al sueldo original el aumento
// para calcular un % tengo q multiplicar el valor por el porcentaje y lo divido por cien


sueldo = parseFloat ( document.getElementById ("txtIdSueldo").value);


aumento = sueldo * 10 / 100;

nuevoSueldo = sueldo + aumento;


document.getElementById ("txtIdResultado").value = nuevoSueldo;



	
}

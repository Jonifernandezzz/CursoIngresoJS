/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let importefinal;
	let descuentoAplicado;
	let descuento;
	
	// para calcular el nuevo importe debo sumarle al importe original el Descuento
	// para calcular un % tengo q multiplicar el valor por el porcentaje y lo divido por cien
	
    descuento = -25;
	importe = parseFloat ( document.getElementById ("txtIdImporte").value);
	
	
	descuentoAplicado = importe * descuento / 100;
	
	importefinal = importe + descuentoAplicado;
	
	
	
	document.getElementById ("txtIdResultado").value = importefinal;
	



}

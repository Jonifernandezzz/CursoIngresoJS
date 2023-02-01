/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUnoT;
	let numDosT;
    let numUno;
	let numDos;
	let mensaje;
	numUnoT= document.getElementById ("txtIdNumeroUno").value;
    numDosT = document.getElementById ("txtIdNumeroDos").value;
	
   numUno= parseInt (numUnoT);
   numDos = parseInt (numDosT);
   mensaje = " La suma es " + ( numUno + numDos );
	
	
	alert(mensaje);

}


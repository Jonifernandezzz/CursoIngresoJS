/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numDividendoT;
	let numDivisorT;
	let numDividendo;
	let numDivisor;
	let mensaje;
	

    numDividendoT= document.getElementById ("txtIdNumeroDividendo").value;
    numDivisorT = document.getElementById ("txtIdNumeroDivisor").value;

	numDividendo= parseInt (numDividendoT);
   numDivisor = parseInt (numDivisorT);
   mensaje = " La division es " +  numDividendo % numDivisor;
	


	
	
	alert(mensaje);
}

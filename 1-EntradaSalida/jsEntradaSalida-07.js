/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let numeroUnoT;
	let numeroDosT;
	let numeroUno;
	let numeroDos;
	let mensaje;
	
	numeroUnoT = document.getElementById ("txtIdNumeroUno").value;
	numeroDosT = document.getElementById ("txtIdNumeroDos").value;

   numeroUno = parseInt (numeroUnoT);
   numeroDos = parseInt (numeroDosT);

   mensaje = " la suma es " + (numeroUno + numeroDos) ;


	alert(mensaje);	
}

function restar()
{  
	let numeroUnoT;
	let numeroDosT;
	let numeroUno;
	let numeroDos; 
	let mensaje;

	numeroUnoT = document.getElementById ("txtIdNumeroUno").value;
	numeroDosT = document.getElementById ("txtIdNumeroDos").value;

   numeroUno = parseInt (numeroUnoT);
   numeroDos = parseInt (numeroDosT);

   mensaje = " la resta es " + (numeroUno - numeroDos) ;


	alert(mensaje);	
	

	

}   


function multiplicar()
{ 
	let numeroUnoT;
	let numeroDosT;
	let numeroUno;
	let numeroDos;
	let mensaje
 
	numeroUnoT = document.getElementById ("txtIdNumeroUno").value;
	numeroDosT = document.getElementById ("txtIdNumeroDos").value;

   numeroUno = parseInt (numeroUnoT);
   numeroDos = parseInt (numeroDosT);

   mensaje = " la multiplicacion es " + numeroUno * numeroDos ;


	alert(mensaje);	
	



	
}   

function dividir()
{
	let numeroUnoT;
	let numeroDosT;
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUnoT = document.getElementById ("txtIdNumeroUno").value;
	numeroDosT = document.getElementById ("txtIdNumeroDos").value;

   numeroUno = parseInt (numeroUnoT);
   numeroDos = parseInt (numeroDosT);

   mensaje = " la multiplicacion es " + numeroUno / numeroDos ;


	


	
	
	alert(mensaje);





}  



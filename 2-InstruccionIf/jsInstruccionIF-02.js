//al ingresar una edad debemos informar si es mayor de edad

function mostrar()
{
 let edad;
 edad = document.getElementById("txtIdEdad").value;
 edad = parseInt(edad);
 
 if ( edad  >= 17 )
 {
	alert(" usted es mayor de edad ");
}



	

}//FIN DE LA FUNCIÓN
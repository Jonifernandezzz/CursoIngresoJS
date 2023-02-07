//Al ingresar una edad solo debemos informar si la persona NO es adolescente.




function mostrar()
{
	let edad;
    let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	

	if (edad  < 13 || edad >17)
{
   alert(" usted no es adolecente ");
}

}//FIN DE LA FUNCIÓN edad  < 13 && edad >17
// al ingresar una edad q sea 15, mostrar el mensaje "niña bonita"
function mostrar()
{
	
	
 let edad;
 
 edad = document.getElementById("txtIdEdad").value;
 edad = parseInt(edad);

  if(edad==15)
  {
     alert(" niña bonita ");

 }else{
    alert(" usted no ingreso 15 ")
	
  }

} /*FIN DE LA FUNCIÓN
if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
	y logica                                o logica         negacion
	*/
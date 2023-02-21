/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
  >    y   <  */
function mostrar()
{
	
	let respuesta;
	let positivos;
	let negativos;
	
	positivos=0;
	negativos=1;
	respuesta="si";

	do{
		numero = prompt(" Ingrese un numero ");

		if (numero >= 0 ){   
			//alert("Positivo");
			numero = parseInt(numero)
			positivos = positivos + numero;
      }else{
			//alert("Negativo");
			negativos = negativos * numero
	  } 
         
		
		respuesta = prompt(" Quiere ingresar otro numero? ");

	}while(respuesta=="si");

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;


	

}//FIN DE LA FUNCIÓN
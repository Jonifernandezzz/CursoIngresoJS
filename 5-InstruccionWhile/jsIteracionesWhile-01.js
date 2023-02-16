/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{

let numero;


numero = 0;

	while(numero < 10)
	{
		numero = numero + 1;
		console.log(numero);
	}
}
*/

//FIN DE LA FUNCIÓN

// While  1 bis - edad y nombre, informar el nombre de la persona mas vieja y la mas joven

function mostrar()
{
	//declaro variables
let edad;
let nombre;
let edadmaxima;
let edadminima;
let respuesta;
let bandera;
let nombremenor;
let nombremayor;


//iniciar variables                > y <

bandera= true;
respuesta='si';

while(respuesta=="si")
	{
		nombre = prompt("ingrese su nombre");
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
	    while(isNaN(edad) || edad < 0 || edad  > 110 )
		{
         
			edad = prompt("Error, su edad en numeros!!");
		    edad = parseInt(edad);
		}
		if(bandera == true)
		{
          edadmaxima = edad;
		  edadminima = edad;
		  nombremayor = nombre;
		  nombremenor = nombre;
          bandera = false;

		}
		else if (edadmaxima < edad)
		{
			nombremayor = nombre;
			edadmaxima = edad;
		}
		else if (edadminima > edad)
		{
			nombremenor = nombre;
			edadminima = edad;
		}

		respuesta=prompt("desea continuar? si/no " );
	}
	
	mensaje = "La persona mayor es " + nombremayor + " y la menor es " + nombremenor;
	
	document.write(mensaje);
	
}//FIN DE LA FUNCIÓN

	









  
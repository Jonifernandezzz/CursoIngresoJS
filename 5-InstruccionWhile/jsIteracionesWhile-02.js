/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
> y < 
function mostrar()
{
let numero;

numero = 11;

	while(numero > 0){
	numero = numero - 1;
	console.log(numero);
    }



}//FIN DE LA FUNCIÓN
*/
// Ejercicio while 2 bis            >    <

// ingresar 5 numeros, y determinar la cantidad de numeros mayores que 10 y menores que 20.
 /*function mostrar()
{
	let numero;
	let contador;
	let contadorMayor;
	let contadorMenor;
	let mensaje;

	contadorMayor = 0;
	contadorMenor = 0;


	for(let contador = 0;  contador < 5;   i++)
{
       numero = prompt("ingrese un numero");
	   numero = parseInt(numero);

       while(isNaN(numero)){

		numero = prompt("error, ingrese un numero!!!");
		numero = parseInt(numero);
	   }


	   if(numero > 10)
	   {
         contadorMayor= contadorMayor + 1;

	  }else if(numero < 20){
            
         contadorMenor = contadorMenor + 1;
	   }
}
 mensaje = "los numeros mayores a 10 son " + contadorMayor + " los numeros menores a 20 son " + contadorMenor;
 document.write(mensaje);
 
}
*/

//while 2 bis bis ingresar numeros hasta que el usuario quiera.
// determinar la cantidad de numeros q son mayores que 1o y menores a 20.
// tambien el promedio de los numeros q cumplen la condicion anterior.

function mostrar(){


	let numeroIngresado;
	let respuesta;
	let contador;
	let acumulador;
	let promedio;
	
	contador = 0;
	acumulador = 0;
	respuesta = "si";
	
	while(respuesta=="si"){
	
		numeroIngresado = parseInt(numeroIngresado);
		numeroIngresado = prompt(" Ingrese un numero ");
		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(numeroIngresado);
			numeroIngresado = prompt("Error,  Ingrese un numero ");
		}
		if(numeroIngresado >= 10 && numeroIngresado <= 20 )
		{
			contador= contador + 1;
			acumulador = acumulador + numeroIngresado;
		}
		
		respuesta = prompt(" Quiere ingresar otro numero? si/no");
	}

	promedio = acumulador/contador;
	
	document.write("el promedio de los numeros mayores a 10 y menores a 20 es : " + promedio);
	
}


//No me sale bien la cuenta





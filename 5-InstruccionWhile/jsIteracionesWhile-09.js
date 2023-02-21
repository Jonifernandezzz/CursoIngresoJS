/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
> y < 
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero= true;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	    while(isNaN(numeroIngresado))
		{
         
			numeroIngresado = prompt("Error, ingrese otro numero!!");
		    numeroIngresado = parseInt(numeroIngresado);

		}
		if(banderaDelPrimero == true)
		{
          numeroMaximo = numeroIngresado;
		  numeroMinimo = numeroIngresado;
          banderaDelPrimero = false;

		}
		else if (numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta=prompt("desea continuar? si/no " );
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo
}//FIN DE LA FUNCIÓN
*/

function mostrar(){

let numeroMaximo;
let numeroMinimo;
let menorpar;
let mayorNegativos
let respuesta;
let numeroIngresado;
let banderaDelPrimero;
let banderaDePares;
let banderaMayorNegativos;

respuesta = "si";
banderaDelPrimero = true;
banderaDePares = true;
banderaMayorNegativos = true;

while(respuesta == "si")
{
	numeroIngresado = parseInt (numeroIngresado);
	numeroIngresado = prompt(" Ingrese un numero ");

	while(isNaN(numeroIngresado))
	{
	   numeroIngresado = parseInt(numeroIngresado);
	   numeroIngresado = prompt(" Error, ingrese un numero");
	}

	if (banderaDelPrimero == true)
	{
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		banderaDelPrimero = false;
	}
	else if(numeroMaximo < numeroIngresado)
	{
		numeroMaximo = numeroIngresado;
	}
	else if(numeroMinimo > numeroIngresado)
	{
        numeroMinimo = numeroIngresado;
	}

	if(numeroIngresado %2 == 0)
	{
		if (banderaDePares == true || menorpar > numeroIngresado)
		{
			menorpar = numeroIngresado;
		}
	}
	if(numeroIngresado < 0)
	{
        if(banderaMayorNegativos == true || numeroIngresado > mayorNegativos)
	{
       mayorNegativos = numeroIngresado;
	}

	}
	/* 
   else   (numeroMaximo < numeroIngresado);
   {
	   numeroMaximo = numeroIngresado;
   }
   
   

   if(numeroIngresado % 2 == 0)
   {
    if (banderaDePares == true || menorpar > numeroIngresado)
	{
		menorpar = numeroIngresado;
	}

   }
   if(numeroIngresado < 0)
   {
    if(banderaMayorNegativos == true || numeroIngresado > mayorNegativos)
	{
       mayorNegativos = numeroIngresado;
	}


}
     respuesta = prompt(" Desea guardar otro numero?");



*/
    respuesta = prompt(" Desea guardar otro numero?");
}

document.write("el numero maximo es :" + numeroMaximo + "<br>");
document.write("el numero minimo es :" + numeroMinimo + "<br>");
document.write("el menor par es :" + menorpar + "<br>");
document.write("el mayor negativos es :" + mayorNegativos + "<br>");











}
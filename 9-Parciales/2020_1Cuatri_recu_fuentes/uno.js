/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
 let tipo;
 let marca;
 let fabricante;
 let cantidad;
 let precio;
 let acumuladorBarbijo;
 let acumuladorJabon;
 let acumuladorAlcohol;
 let contadorBarbijo;
 let contadorJabon;
 let contadorAlcohol;
 let precioAlcoholBarato;
 let cantidadAlcoholBarato;
 let fabricanteAlcoholBarato;
 let promedioCompra;
 let mayorTipo;
 let banderaAlcohol;
 let mensajeAlcohol;
 let mensajeJabon;
 let mensajeb;
 
 contadorBarbijo = 0;
 contadorJabon = 0;
 contadorAlcohol = 0;
 acumuladorDeProductos = 0;
 acumuladorBarbijo = 0;
 acumuladorJabon = 0;
 acumuladorAlcohol = 0;
 banderaAlcohol = true;
 mensajeAlcohol = "no se compraron alcoholes";
 
	for(let i = 0; i < 5; i++)
	{   
        tipo=prompt("Ingrese el nombre del producto : barbijo , jabon o alcohol")
		while(tipo!= "barbijo"&&tipo!= "jabon"&&tipo!= "alcohol")
		{
			tipo=prompt("error, ingrese el tipo de producto")
		}
		precio= prompt("ingresar precio $(100-300)");
		precio=parseFloat(precio);
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio= prompt("ingresar un precio valido");
		}

		cantidad= prompt("ingresar cantidad (maximo 1000)");
		cantidad=parseInt(cantidad);
		while(cantidad < 0 || cantidad > 1000 || isNaN(precio))
		{
			cantidad= prompt("ingresar una cantidad valida");
		}

		marca=prompt("ingrese marca :");
		fabricante=prompt("Ingrese fabricante :");

		switch(tipo){

			case "alcohol":
				acumuladorAlcohol= acumuladorAlcohol + cantidad;
				contadorAlcohol = contadorAlcohol + 1;

				if(banderaAlcohol == true || precioAlcoholBarato  > precio ){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					banderaAlcohol = false;
				}
				break;
			case "barbijo":
				acumuladorBarbijo= acumuladorBarbijo + cantidad;
				contadorBarbijo= contadorBarbijo + 1;
				break;
			case "jabon":
				acumuladorJabon= acumuladorJabon + cantidad;
				contadorJabon= contadorJabon + 1;
				break;


		}

    }


	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon ){
     mayorTipo = "alcohol";
	 promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol){
	 mayorTipo = "barbijo";
	 promedioCompra = acumuladorBarbijo / contadorBarbijo;
	}
	else{
	 mayorTipo = "jabon";
	 promedioCompra = acumuladorJabon / contadorJabon;
	}

    if(banderaAlcohol == false){
       mensajeAlcohol = "A- fabricante alcohol barato" + fabricanteAlcoholBarato +
	   "\nCantidad:" + cantidadAlcoholBarato + "\nPrecio:" + precioAlcoholBarato;
	}

	mensajeb = "B- Tipo con mas unidades es:" + mayorTipo + "promedio :" + promedioCompra;
	mensajeJabon = "C- Unidades de jabon : " + acumuladorJabon;
	
	alert(mensajeAlcohol +  "\n" + mensajeb + "\n" + mensajeJabon);
	
}	 



/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/


//recuperatorio 1;

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
	let precioJabonCaro;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;
	let promedioCompra;
	let mayorTipo;
	let banderaJabon;
	let mensajeJabon;
	let mensajeBarbijo;
	let mensajeb;
	
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorDeProductos = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;
	banderaJabon = true;
	mensajeJabon = "no se compraron jabones";
	
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
   
				  
				   break;
			   case "barbijo":
				   acumuladorBarbijo= acumuladorBarbijo + cantidad;
				   contadorBarbijo= contadorBarbijo + 1;
				   break;
			   case "jabon":
				   acumuladorJabon= acumuladorJabon + cantidad;
				   contadorJabon= contadorJabon + 1;
				   if(banderaJabon == true || precioJabonCaro  > precio ){
					precioJabonCaro = precio;
					cantidadJabonCaro = cantidad;
					fabricanteJabonCaro = fabricante;
					banderaJabon = false;
				}
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
   
	   if(banderaJabon == false){
		  mensajeJabon = "A- fabricante jabon caro " + fabricanteJabonCaro +
		  "\nCantidad:" + cantidadJabonCaro + "\nPrecio:" + precioJabonCaro;
	   }
   
	   mensajeb = "B- Tipo con mas unidades es: " + mayorTipo + " y el promedio por compra es :" + promedioCompra;
	   mensajeBarbijo = "C- Unidades de barbijos : " + acumuladorJabon;
	   
	   alert(mensajeJabon +  "\n" + mensajeb + "\n" + mensajeBarbijo);
	   

}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{    //declarar variables
	let precioUno;
    let precioDos;
    let precioTres; 
    let suma;
   //asignar a las varibles el dato por id , parsear y pidiendo numero
    precioUno = parseFloat (document.getElementById ("txtIdPrecioUno").value);
    precioDos = parseFloat  (document.getElementById ("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById ("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    alert(" la suma es $ " + suma );

   // console.log ("la suma es $ " + suma );
   //para q aparezca en consola

}
function Promedio ()
{
    let precioUno;
    let precioDos;
    let precioTres; 
    let suma;
    let promedio;

    precioUno = parseFloat (document.getElementById ("txtIdPrecioUno").value);
    precioDos = parseFloat  (document.getElementById ("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById ("txtIdPrecioTres").value);
    
    suma = precioUno + precioDos + precioTres;
    promedio = suma / 3 ;
    alert(" la suma es $ " + promedio );
	



}
function PrecioFinal ()
{
	
    let precioUno;
    let precioDos;
    let precioTres; 
    let suma;
    let iva;
    let importetotal;
    let ivaActual;

    precioUno = parseFloat (document.getElementById ("txtIdPrecioUno").value);
    precioDos = parseFloat  (document.getElementById ("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById ("txtIdPrecioTres").value);
    
     ivaActual = 21;
    suma = precioUno + precioDos + precioTres;
    iva = suma * ivaActual / 100;
    importetotal = suma + iva;
    alert(" la suma es $ " + importetotal );
	


}
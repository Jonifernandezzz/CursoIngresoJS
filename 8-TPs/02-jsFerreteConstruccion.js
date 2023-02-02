/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/




function Rectangulo () 
{
//  A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
// para sacar primetro se hace * 2 + base * 2
//para hacer 3 hilos de alambre se tiene q hacer perimetro * 3/

let largo;
let ancho;
let perimetro;
let alambre;

largo = document.getElementById("txtIdLargo").value;
ancho = document.getElementById("txtIdAncho").value;


largo = parseFloat(largo);
ancho = parseFloat(ancho);

perimetro = largo * 2 + ancho * 2;

alambre = perimetro * 3;






}



function Circulo () 
{
/* B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
para sacar el perimetro de un circulo hay q hacer 2 * pi (3,14) * R*/

let radio;
let perimetro;
let alambre;

    





}
function Materiales () 
{

 /* C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
 para sacar el area 
 para sacar el area de un rectangulo se hace largo * ancho
 para sacar el cemento y el cal multiplico metro cuadrado por cemento y luego cal*/
 






}
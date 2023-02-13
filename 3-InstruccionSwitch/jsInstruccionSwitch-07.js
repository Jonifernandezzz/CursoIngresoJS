/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;

switch(destino){
	case "Bariloche":
		alert("Oeste");
		break;
	case "Mar del plata":
		alert("Este");
		break;
	case "Cataratas":
		alert("Norte");
		break;
	case "Ushuaia":
		alert("Sur");
		break;




}
	





}//FIN DE LA FUNCIÓN
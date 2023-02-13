/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destino;
destino = document.getElementById("txtIdDestino").value;

switch(destino){
	case "Bariloche":
		alert("Hace frio");
		break;
	case "Mar del plata":
		alert("Hace calor");
		break;
	case "Cataratas":
		alert("Hace calor");
		break;
	case "Ushuaia":
		alert("Hace frio");
		break;
}



}//FIN DE LA FUNCIÓN
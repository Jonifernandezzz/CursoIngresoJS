/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/


function mostrar()

{
let destino;
let estacion;
let flag;


destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;

switch(estacion) { 
case "Invierno":
		if(destino =="Bariloche"){
			flag = 1;	
		}
		break;
	case "Verano":
		if(destino =="Mar del plata" || destino == "Cataratas"){
		    flag =1;
		}
		break;
	    
	case "Otoño":
		    flag = 1;
			break;
	case "Primavera":
		if(destino != "Bariloche") {
        flag =1;
		}
		
		break;
	  }

		if (flag ==1 ){
			alert("se viaja");
		}else{
			alert("no se viaja")
		}
     
}//FIN DE LA FUNCIÓN
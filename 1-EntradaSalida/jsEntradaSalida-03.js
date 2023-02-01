/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensaje 
	//nombreIngresado=txtIdNombre.value; esto funciona solo en google
	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensaje = " Su nombre es " + nombreIngresado;
	alert(mensaje);

}



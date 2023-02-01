/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numunoT
	let numdosT
    let numuno
	let numdos
	numunoT= document.getElementById ("txtIdNumeroUno").value;
    numdosT = document.getElementById ("txtIdNumeroDos").value;
	
   numuno= parseInt (numunoT);
   numdos = parseInt (numdosT);

	
	
	alert(numuno + numdos);

}


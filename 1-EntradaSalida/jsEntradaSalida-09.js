/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//cambiando el  numero de "aumento" a negativo, estaria haciendo descuento
function mostrarAumento()
{
    let sueldo;
    let nuevoSueldo;
    let aumentoAplicado;
    let aumento;

    // para calcular el nuevo sueldo debo sumarle al sueldo original el aumento
    // para calcular un % tengo q multiplicar el valor por el porcentaje y lo divido por cien

    aumento = 10;
    sueldo = parseFloat ( document.getElementById ("txtIdSueldo").value);


    aumentoAplicado = sueldo * aumento / 100;

    nuevoSueldo = sueldo + aumentoAplicado;



    document.getElementById ("txtIdResultado").value = nuevoSueldo;



	
}

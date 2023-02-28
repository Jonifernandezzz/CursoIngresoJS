
	/*En el ingreso a un viaje en avión nos solicitan
 nombre, nacionalidad , edad, sexo("f" o "m") 
 validar
 y estado civil("soltero", "casado" o "viudo")
 validar
 y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
bandera 
googlear temperatura
b) Cuantos mayores de edad( más de 17) estan solteros
contador 
//
c) La cantidad de Mujeres que hay solteras o viudas.
contador
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
contador
e) El promedio de edad entre las mujeres casadas.*/
//acumulador y hacer promedio







/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/



function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let contadorMayorViudos;
	let estadoCivil;
	let temperaturaCorporal;
	let contadorTemperatura;
	let banderaTemperatura;
	let nombreMasTemperatura;
	let temperaturaMaxima;
	let contadorMayoresViudos;
	let contadorHombresviudosSolteros;
	let contadorTerceraEdadTemperatura;
	let contadorEdadesSolteros;
	let acumuladorEdadesSolteros;
	let promedio;
	


	respuesta = "si"
	banderaTemperatura = true;
	contadorMayorViudos = 0;
	contadorHombresviudosSolteros = 0;
	contadorTerceraEdadTemperatura = 0;
	contadorEdadesSolteros = 0;
	acumuladorEdadesSolteros = 0;





	while(respuesta=="si")
	{
		nombre=prompt("ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("error, ingrese nombre");	
		}
		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
        while(isNaN(edad) || edad < 0 || edad > 109)
        {
            edad = prompt("Error. Dame una edad");
            edad = parseInt(edad);
        }
		sexo = prompt("ingrese su sexo  (F , M , X)");
        while(sexo != "F" && sexo != "M" && sexo != "X")
        {
            sexo = prompt("Error. Dame un sexo [F - M - X]");
        }
		estadoCivil = prompt("ingrese su estadocivil  (casado , soltero , viudo)");
        while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo")
        {
            estadoCivil = prompt("Error. Dime un estadocivil [casado - soltero - viudo]");
        }
		temperaturaCorporal = prompt("ingrese su temperatura corporal  (35 - 41)");
        while(isNaN(edad) || temperaturaCorporal < 35 || temperaturaCorporal > 41)
        {
            temperaturaCorporal = prompt("Error. Dime una temperatura corporal valida [35 - 41 ]");
        }

		while(banderaTemperatura==true || temperaturaMaxima < temperaturaCorporal)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMasTemperatura = nombre;
			banderaTemperatura = false;
		}
		if(edad > 18 && estadoCivil == "viudo")
		{
			contadorMayorViudos = contadorMayorViudos + 1;
		}
		if(sexo=="M" && estadoCivil == "viudo" || estadoCivil == "soltero")
		{
			contadorHombresviudosSolteros = contadorHombresviudosSolteros + 1;
		}
		if( edad > 60 && temperaturaCorporal > 38)
		{
		contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1;
		}

		if(sexo=="M" && estadoCivil == "soltero")
		{
			contadorEdadesSolteros = contadorEdadesSolteros + 1;
			acumuladorEdadesSolteros = acumuladorEdadesSolteros + edad;
		}

		respuesta = prompt(" Quiere ingresar otra vez? si/no");
    }

	promedio = acumuladorEdadesSolteros / contadorEdadesSolteros;

// punto a
console.log(" el nombre de la persona con mas temperatura es " + nombreMasTemperatura);
// punto b
console.log(" La cantidad de mayores de edad viudos es " + contadorMayorViudos);
// punto c
console. log (" La cantidad de hombres solteros o viudo es " + contadorHombresviudosSolteros);
// punto d 
console. log ("Las personas con mas de  60 años y 38 de temperatura son " + contadorTerceraEdadTemperatura);
// punto e 
console.log ("El promedio de edad de los hombres solteros es de " + promedio);
}

	

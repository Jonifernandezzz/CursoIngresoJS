

function mostrar()
{
    let nombre;
	let edad;
	let sexo;
	let contadorMayorViudos;
	let estadoCivil;
    let nacionalidad;
	let temperaturaCorporal;
	let contadorTemperatura;
	let banderaTemperatura;
	let NacionalidadMasTemperatura;
	let temperaturaMaxima;
	let contadorMayoresSolteros;
	let contadorMujeresviudosSolteros;
	let contadorTerceraEdadTemperatura;
	let contadorEdadesCasadas;
	let acumuladorEdadesCasadas;
	let promedio;
	


	respuesta = "si"
	banderaTemperatura = true;
	contadorMayorViudos = 0;
	contadorMujeresviudosSolteros = 0;
	contadorTerceraEdadTemperatura = 0;
	contadorEdadesCasadas = 0;
	acumuladorEdadesCasadas = 0;





	while(respuesta=="si")
	{
		nombre=prompt("ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("error, ingrese nombre");	
		}
        nacionalidad= prompt("Ingrese su nacionalidad")
        while(!isNaN(nacionalidad))
        {
            nacionalidad=prompt("Error, ingrese su nacionalidad")
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
			NacionalidadMasTemperatura = nacionalidad;
			banderaTemperatura = false;
		}
		if(edad >= 18 && estadoCivil == "soltero")
		{
			contadorMayorSolteros = contadorMayorSolteros + 1;
		}
		if(sexo=="F" && estadoCivil == "soltero" || estadoCivil == "viudo")
		{
			contadorMujeresviudosSolteros = contadorMujeresviudosSolteros + 1;
		}
		if( edad > 60 && temperaturaCorporal > 38)
		{
		contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1;
		}

		if(sexo=="F" && estadoCivil == "casado")
		{
			contadorEdadesCasadas = contadorEdadesCasadas + 1;
			acumuladorEdadesCasadas = acumuladorEdadesCasadas + edad;
		}

		respuesta = prompt(" Quiere ingresar otra vez? si/no");
    }

	promedio = acumuladorEdadesCasadas / contadorEdadesCasadas;

// punto a
console.log(" la nacionalidad de la persona con mas temperatura es " + NacionalidadMasTemperatura);
// punto b
console.log(" La cantidad de mayores de edad solteros es " + contadorMayorViudos);
// punto c
console. log (" La cantidad de mujeres solteras o viudas es " + contadorMujeresviudosSolteros);
// punto d 
console. log ("Las personas con mas de  60 años y 38 de temperatura son " + contadorTerceraEdadTemperatura);
// punto e 
console.log ("El promedio de edad de las mujeres casadas es de " + promedio);
}

	




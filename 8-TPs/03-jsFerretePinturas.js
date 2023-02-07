/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
(32 °F − 32) × 5/9
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
(0 °C × 9/5) + 32
*/
function FahrenheitCentigrados () 
{

 
let fahr;
let centidrados;


fahr = document.getElementById ("txtIdTemperatura").value;
fahr = parseFloat(fahr);
centidrados = (fahr  - 32) * 5/9;

alert(fahr + " Fahrenheit son : " + centidrados + " Centigrados " );


}

function CentigradosFahrenheit () 
{
  let fahr;
  let centigrados;


    centigrados = document.getElementById ("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados);
    fahr = centigrados * 5/9 + 32;
    
    alert(centigrados + " Centigrados son : " + fahr + " Fahrenheit " ) ;
    
    
}

/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/








function mostrar()
{
  let tipo;
  let cantidadBolsas;
  let precioBolsa;
  let respuesta;
  let acumuladorDeBolsas;
  let precioBrutoTotal;
  let precioBrutoProducto;
  let porcentaje;
  let descuento;
  let precioConDescuento;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let tipoConMasUnidades;
  let banderaPrimerProducto;
  let tipoMasCaro;
  let tipoMasCaroPrecio;

  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;
  banderaPrimerProducto=true;

  respuesta="si"
  while(respuesta=="si")
  {
    tipo=prompt("ingrese tipo");
    while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
    {
      tipo=prompt("Error, ingrese un tipo valido")
    }
    cantidadBolsas=prompt("ingrese cantidad de bolsas");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(cantidadBolsas<1)
    {

    cantidadBolsas=prompt(" error, ingrese una cantidad de bolsas valida");
    cantidadBolsas=parseInt(cantidadBolsas);
    
    }

    precioBolsa=prompt("ingrese precio de bolsas");
    precioBolsa=parseInt(precioBolsa);
    while(precioBolsa <1)
    {

    precioBolsa=prompt(" error, ingrese un precio valido");
    precioBolsa=parseInt(precioBolsa);
    
    }

    acumuladorDeBolsas=acumuladorDeBolsas+cantidadBolsas;
    precioBrutoProducto=cantidadBolsas+precioBolsa;
    precioBrutoTotal= precioBrutoTotal+precioBrutoProducto
    
    if(banderaPrimerProducto=true)
    {
      tipoMasCaro=tipo;
      tipoMasCaroPrecio=precioBolsa;
      banderaPrimerProducto=false;
    }else
    {
    if(precioBolsa>tipoMasCaroPrecio)
    {
       tipoMasCaro=tipo;
       tipoMasCaroPrecio=precioBolsa;
    }
    }
    
    switch(tipo)
    {
        case "arena":
          acumuladorArena=acumuladorArena+cantidadBolsas;
          break;
        case "cal":
            acumuladorCal=acumuladorCal+cantidadBolsas;
          break;
        case "cemento":
             acumuladorCemento=acumuladorCemento+cantidadBolsas;
          break;
    }

    
  }
  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
    tipoConMasUnidades="arena";
  }else
  {
    if(acumuladorCal>acumuladorCemento)
    {
      tipoConMasUnidades="cal";
    }else
    {
      tipoConMasUnidades="cemento";

    }



  }
  
  if(acumuladorDeBolsas>30)
  {
    porcentaje=25;
  }else
  {
     if(acumuladorDeBolsas>10)
     {
    porcentaje=15;
     }else
     {
      porcentaje=0;
     } 



  }


    if (porcentaje!=0)
    {
     descuento=precioBrutoTotal*porcentaje/100;
    }
   
    if(porcentaje!=0)
    {
      precioConDescuento=precioBrutoTotal-descuento;
      console.log("pagar con descuento: " + precioConDescuento);
    }
     //el importe total a pagar bruto sin descuento
     console.log("bruto sin descuento :"+ precioBrutoTotal);
     console.log("el tipo mas comprado es :" +tipoConMasUnidades);

    
    
    




}

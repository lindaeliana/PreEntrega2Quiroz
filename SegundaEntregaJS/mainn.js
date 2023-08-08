const autos = [
    {marca: "Ford", modelo: "Mustang", precio: 54920000},
    {marca: "Volkswagen", modelo: "Gol", precio: 4000000},
    {marca: "Ranault", modelo: "Sandero", precio: 5872000},
    {marca: "Audi", modelo: "A3 Sedán", precio: 40000000 },
]


function descuento (numero, porcentaje){
    return Math.abs (numero * porcentaje / 100 - numero)
   }

 descuento (100,10)

  console.log(descuento);
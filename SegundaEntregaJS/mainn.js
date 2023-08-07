const autos = [
    {marca: "Ford", modelo: "Mustang", precio: 54920000},
    {marca: "Volkswagen", modelo: "Gol", precio: 4000000},
    {marca: "Ranault", modelo: "Sandero", precio: 5872000},
    {marca: "Audi", modelo: "A3 Sedán", precio: 40000000 },
]



let encontrados = autos.filter((item) => item.precio < 6000000);

console.log(encontrados);
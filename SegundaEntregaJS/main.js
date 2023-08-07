const autos = [
    {marca: "Ford", modelo: "Mustang", precio: 54920000},
    {marca: "Volkswagen", modelo: "Gol", precio: 4000000},
    {marca: "Ranault", modelo: "Sandero", precio: 5872000},
    {marca: "Audi", modelo: "A3 Sedán", precio: 40000000 },
];

let consulta = prompt ("Ingrese la marca del auto");

let producto = autos.find((item) => item.marca === consulta)

if (producto){
alert ("available")
}else {
    alert("not available")
}

let consulta1 = prompt ("Ingrese el modelo del auto")

let producto2 = autos.find((item) => item.modelo === consulta1)

if (producto2) {
    alert ("available")
}else{
    alert ("not available")
}


const autos = [
    {marca: "Ford", modelo: "Mustang", precio: 54920000},
    {marca: "Volkswagen", modelo: "Gol", precio: 4000000},
    {marca: "Renault", modelo: "Sandero", precio: 5872000},
    {marca: "Audi", modelo: "A3 Sedán", precio: 40000000 },
]

let nombre = prompt("Ingrese la marca del auto a consultar");
let producto = autos.find((item) => item.marca === nombre);

if (producto) {
    alert ("Available")
}else {
    alert("not available")
}

let nombre1 = prompt("Ingrese el modelo del auto a consultar");
let producto1 = autos.find((item) => item.modelo === nombre1);

if (producto1) {
alert ("Available")
}else {
    alert("not available")
}

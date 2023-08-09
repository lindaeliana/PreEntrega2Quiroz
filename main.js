//Venta de Autos

const autos = [
    { marca: "Ford", modelo: "Mustang", precio: 54920000 },
    { marca: "Volkswagen", modelo: "Gol", precio: 4000000 },
    { marca: "Renault", modelo: "Sandero", precio: 5872000 },
    { marca: "Audi", modelo: "A3 Sedán", precio: 40000000 },
];

let nombre = prompt("Ingrese la marca del auto a consultar");
let producto = autos.find((item) => item.marca === nombre);

if (consulta) {
    let mensaje = `
    Disponible el modelo: ${producto.modelo}
    Precio: ${producto.precio}
     `;
    alert(mensaje);
} else {
    alert("No disponible");
}

function calcularPrecioConDescuento(precio, descuento) {
    const descuentoAplicado = (precio * descuento) / 100;
    const precioConDescuento = precio - descuentoAplicado;
    return precioConDescuento;
}

let consulta = prompt("Usted tiene un descuento especial... ¿Desea realizar esta compra?");

if (consulta.toLowerCase() === "si") {
    let precioConDescuento = calcularPrecioConDescuento(producto.precio, 20);
    alert(`Precio con descuento: $${precioConDescuento}`);
}
let dinero = 50, ganancias = 0 , apuesta = 20, numero = 0;

while (dinero > 0  &&  apuesta > 0) 
{
    let dado = Math.floor(Math.random () * 6) + 1;

    let num = prompt("A que número quiere apostar, del 1 al 6 ", "1");
    numero = parseInt(num);
     
    let cantidad = prompt("Cantidad que quiere apostar ", "20");
    apuesta = parseInt(cantidad);
    
    alert(`Ha salido el numero: ${dado}`);

    
   if (numero == dado)
   {
    dinero = dinero + apuesta*2
    alert (`Has ganado ${dinero}`)
   } 
   else {
    dinero = dinero - apuesta
    alert (`Has perdido ${apuesta} ahora tienes ${dinero}`)
   } 
   if (dinero == 0) {
    alert ("GAME OVER")
    break;
   } 
   if (dinero >= 200) {
    alert ("HAS GANADO EL JUEGO")
    break;
   }}
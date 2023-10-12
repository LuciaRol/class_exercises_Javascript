var numHermanos = prompt("Cuantos hermanos tienes: ");
var cantidad = prompt("Introduce una cantidad: ");
var descuento1 = (cantidad*15)/100;
var descuento2 = (cantidad*5)/100;

if(numHermanos >= 3){
    document.write(cantidad-descuento1);
}
else if(numHermanos < 3 && numHermanos > 0){
    document.write(cantidad-descuento2);
}
else{
    document.write(cantidad);
}
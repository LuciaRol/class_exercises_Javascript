var num = prompt("Introduce una cantidad: ");
if(parseInt (num>100)){
    let descuento = (num*0.15);
    document.write(num - descuento);
}
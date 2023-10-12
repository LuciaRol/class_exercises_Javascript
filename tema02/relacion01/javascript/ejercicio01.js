fecha = new Date();

// Crear un objeto Date para obtener la fecha y hora actuales
fechaActual = new Date();

// Obtener el año, mes, día, hora, minutos y segundos actuales
anio = fechaActual.getFullYear();
mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
dia = fechaActual.getDate();
hora = fechaActual.getHours();
minutos = fechaActual.getMinutes();
segundos = fechaActual.getSeconds();

// Mostrar la información en la página
document.write("Este año es " + anio);
document.write("<br>Estamos en el mes " + mes);
document.write("<br>Estamos en el día " + dia);
document.write("<br>Son las " + hora + " horas");
document.write("<br>La hora en minutos " + minutos);
document.write("<br>La hora en segundos " + segundos);





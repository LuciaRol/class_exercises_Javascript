// Crear variable "fechaHoy" con la fecha de hoy.
fechaHoy = new Date();

// Crear variable "fecha85" que suma 85 días a la variable "fechaHoy".
fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);

// Crear variable "fecha187" que resta 187 días a la variable "fechaHoy".
fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);

// Sumar 2 años a la variable "fecha85".
fecha85.setFullYear(fecha85.getFullYear() + 2);

// Restar 24 horas a la variable "fecha187".
fecha187.setHours(fecha187.getHours() - 24);

// Crear variable "fechaResto" que sea la resta de "fecha85" menos "fecha187".
fechaResto = new Date(fecha85 - fecha187);

// Mostrar los resultados en la consola.
console.log("fechaHoy:", fechaHoy.toDateString());
console.log("fecha85:", fecha85.toDateString());
console.log("fecha187:", fecha187.toDateString());
console.log("fechaResto (en milisegundos):", fechaResto);

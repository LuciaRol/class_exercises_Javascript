// 1. Encontrar el número más grande
/**
function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
    }
*/

document.write("<h3>1. Encontrar el numero más grande: </h3>")
arrayNumeros = [128, 4, 16, 236, 32, 64];

document.write("Lista de números: " + arrayNumeros + "<br>");

function numeroMasGrande(x){
    x.sort((a,b) => a-b);
    return x.pop();
}
document.write(numeroMasGrande(arrayNumeros) + "<hr>");



listaPalabras = ["Pablito", " Lucia", " Nerdodivergente", " Samsagaz"]
// 2. Encontrar la cadena más larga

document.write("<h3>2. Encontrar la palabra más larga: </h3>");
document.write("Lista de palabras: " + listaPalabras + "<br>");


function cadenaMasLarga(listaPalabras){
        palabraMasLarga = "";
        listaPalabras.forEach(function(palabra) { 
          if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
          }

        });
      return palabraMasLarga;
    }
document.write("La palabra más larga es " + cadenaMasLarga(listaPalabras) + "<hr>") + "<br>";



// 3. Encontrar los numeros pares

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("Array de numeros: " + numeros);

document.write("<h3>3. Encontrar los numeros pares de un array: </h3>");
function numerosPares(numeros){
    let resultado = numeros.filter((num) => num%2 == 0);
    return resultado;
      
}
document.write(numerosPares(numeros) + "<hr>");

// 4. Encontrar los numeros impares

document.write("<h3>4. Encontrar los numeros impares de un array: </h3>");
function numerosImpares(numeros){
    let resultado = numeros.filter((num) => num%2 != 0);
    return resultado;
      
}
document.write(numerosImpares(numeros) + "<hr>");


// 5. Encontrar palabras que contienen "is"
/** 
document.write("<h3>5. Palabras que cotienen is: </h3>");
arrayPalabras = ["isla", "aislado", "gato", "perro"];
document.write("Lista palabras" + arrayPalabras);

function cadenasConIs (arrayPalabras){
    let resultado = [];
    resultado = arrayPalabras.filter(({palabraConIs}) => palabraConIs.includes("is"));
    return resultado;
}
document.write(cadenasConIs(arrayPalabras) + "<hr>");


document.write("<h2>Find words that contain 'is':</h2>")
arr5=[];
arr5=["hola","puede","isla","salon","silla","piso"];
arr5.forEach(element => {
    document.write(element+" ")
});
found3 = arr5.filter(element => element.includes('is'))
document.write("<br>")
found3.forEach(element => {
    document.write(element+" ")
});

*/

// 6. Encontrar todos los numeros divisibles por tres
document.write("<h3>6. Números divisibles por tres </h3>");
document.write("Lista de números: " + numeros + "<br>");

function divisiblePorTres(numeros){
    let resultado = numeros.filter((num) => num %3 == 0);
    return resultado;
      
}
document.write(divisiblePorTres(numeros) + "<hr>");


// 7. Juntar dos arrays

document.write("<h3>7. Juntar dos arrays </h3>");

array1 = [7, 5, 46];
array2 = [96, 666, 3];

document.write("Array 1: " + array1 + "<br>");
document.write("Array 2: " + array2 + "<br>");

function juntaArrays(array1, array2){
    let arrayNuevo = array1.concat(array2);
    return arrayNuevo;
}

document.write("Array nuevo: " + juntaArrays(array1, array2) + "<hr>");


// 8. Juntar y organizar arrays

/** 
document.write("<h3>8. Juntar dos arrays y clasificar de menor a mayor </h3>");

document.write("Array 1: " + array1 + "<br>");
document.write("Array 2: " + array2 + "<br>");

function juntaOrganizaArrays(array1, array2){
    let resultado = juntaArrays(array1, array2)
    return resultado.sort(compareFn);
}

document.write("Array nuevo clasificado: " + juntaOrganizaArrays(array1, array2) + "<hr>");

document.write("<h2>sort joined array from smallest to largest:</h2>")
arr8=[];
arr8=rellena(arr8);
arr8.forEach(element => {
    document.write(element+" ")
});
document.write("<br>")
arr8_1=[];
arr8_1=rellena(arr8_1);
arr8_1.forEach(element => {
    document.write(element+" ")
});
document.write("<br>")
arr8_2=arr7.concat(arr8_1).sort((a,b)=> a-b);  //Forma de ordenar número más rápido.
arr8_2.forEach(element => {
    document.write(element+" ")
});

*/

// 9. Saca la primera palabra de un array

document.write("<h3>9. Elimina la primera palabra de un array </h3>");
document.write("Lista de palabras: " + listaPalabras + "<br><br>");

function eliminarPrimeraPalabraArray(listaPalabras){
    let resultado = listaPalabras.slice(1);
    return resultado;
}

document.write("Lista sin la primera palabra: " + eliminarPrimeraPalabraArray(listaPalabras) + "<hr>");

// 10. Mete una palabra nueva al principio del array

document.write("<h3>10. Mete una palabra nueva al principio del array </h3>");
document.write("Lista de palabras: " + listaPalabras + "<br><br>");

function introducirPalabra(listaPalabras){
    let resultado = listaPalabras.toSpliced(0, 0, "Gatos");
    return resultado;
}

document.write("Lista de palabras nueva: " + introducirPalabra(listaPalabras) + "<hr>");


// 11. Reemplazar algunos elementos del array

document.write("<h3>11. Reemplazar algunos elementos del array</h3>");
document.write("Lista de palabras: " + listaPalabras + "<br><br>");

function reemplazarPalabra(listaPalabras){
    let resultado = listaPalabras.toSpliced(0, 1, "Luna");
    resultado = resultado.toSpliced(1, 1, "Lucero");
    return resultado;
}

document.write("Lista de palabras nueva: " + reemplazarPalabra(listaPalabras));


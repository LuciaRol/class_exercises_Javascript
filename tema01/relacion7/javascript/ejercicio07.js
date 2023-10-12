function combineAllArrays(...args){
    arrayCombinado=[];
    for(i=0;i<args.length;i++){
        arrayCombinado=[...arrayCombinado,...args[i]];
    }
    return arrayCombinado;
}

var resultado = combineAllArrays([1,2,3,4],['hola','adios'],[true,false]);
console.log(resultado);
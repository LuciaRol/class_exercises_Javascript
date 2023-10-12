function sumEveryOther(...args){
    suma = 0;
    for(i=0;i<args.length;i++){
        if(i%2==0){
            suma+=args[i];
        }
    }
    return suma;
}

var resultado = sumEveryOther(10, 2, 11);
console.log(resultado);
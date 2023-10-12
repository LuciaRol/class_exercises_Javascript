function onlyUniques(...args){
    arrayUnicos = [];
    for(i=0;i<args.length;i++){
        for(j=0, unico = true; j<arrayUnicos.length&&unico; j++){
            if(args[i]==arrayUnicos[j]){
                unico = false;
            }
        }
        if(unico){
            arrayUnicos.push(args[i]);
        }
    }
    return arrayUnicos;
}

var resultado = onlyUniques('cat', 'cat', 'dog', 'pig');
console.log(resultado);

// se supone que está bien, pero no me sale ???
window.onload = () => {
    console.log("La página se ha cargado correctamente");

    document.getElementById("btn").addEventListener("click", () => {
        input = document.getElementById("elemento");
        nuevoElemento = input.value;
        
        if (nuevoElemento.trim() !== "") {
          lista = document.getElementById("lista");
          agregarElemento = document.createElement("li");

          agregarElemento.textContent = nuevoElemento;
          lista.appendChild(agregarElemento);
          input.value = ""; 
        }
      });
      
};


window.onload = ()=> {

    pikachu = document.getElementById("img");
    anteriorBtn = document.getElementById("anteriorBtn");
    siguienteBtn = document.getElementById("siguienteBtn")
    pikachuActual = 1;
    imagenesPikachu = 5;
  
    mostrarPikachu = (seleccionImagenes) => {
      if (seleccionImagenes >= 1 && seleccionImagenes <= imagenesPikachu) {
        pikachu.src = "img/pika" + seleccionImagenes + ".png";
        //pikachu.alt = "img " + seleccionImagenes;
        pikachuActual = seleccionImagenes;
      }
    }
  
    anteriorBtn.addEventListener("click",() => {
      if (pikachuActual > 1) {
        mostrarPikachu(pikachuActual - 1);
      }
    });
  
    siguienteBtn.addEventListener("click",() => {
      if (pikachuActual < imagenesPikachu) {
        mostrarPikachu(pikachuActual + 1);
      }
    });
  
    mostrarPikachu(pikachuActual);
  };
  
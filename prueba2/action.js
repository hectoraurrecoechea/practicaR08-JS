window.addEventListener("DOMContentLoaded",(e)=> {
     let parrafos= document.querySelectorAll("p");
     let tipoLetra = document.getElementById("tipoLetra");
     let colorLetra = document.getElementById("colorLetra");
     let colorFondo = document.getElementById("colorFondo");
     let tamano = document.getElementById("tamano");
     let nuevo = document.getElementById("nuevo");
     let quitarSeleccion = document.getElementById("quitarSeleccion");
     let quitarFormat = document.getElementById("quitarFormato");


     for (parrafo of parrafos){
         parrafo.addEventListener("click", function (e){
             e.currentTarget.classList.toggle("seleccion");
         })
     }

     tipoLetra.addEventListener("change", function (e){
         let cambio = document.querySelectorAll(".seleccion");
         for (parrafo of cambio){
             parrafo.style.fontFamily=tipoLetra.value;
         }
     })

    colorLetra.addEventListener("change", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.style.color=colorLetra.value;
        }
    })

    colorFondo.addEventListener("change", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.style.backgroundColor=colorFondo.value;
        }
    })

    tamano.addEventListener("change", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.style.fontSize=tamano.value;
        }
    })

    nuevo.addEventListener("keyup", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.textContent=nuevo.value;
        }
    })

    quitarSeleccion.addEventListener("click", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.classList.remove("seleccion");
        }
    })

    quitarFormato.addEventListener("click", function (e){
        let cambio = document.querySelectorAll(".seleccion");
        for (parrafo of cambio){
            parrafo.classList.remove("parrafo.value");
        }
    })

})

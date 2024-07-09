function encriptar() {

       let boton3 = document.getElementById("boton3");
     

       let TextoCuadro = document.getElementById("TextoCuadro").value;
       let trasplante = document.getElementById("trasplante");

       let AntiMYA= /[A-ZÁÉÍÓÚÜáéíóúü]/;


       let mensajeEncriptado = TextoCuadro

              .replace(/a/gi, "lal")
              .replace(/e/gi, "kek")
              .replace(/i/gi, "jij")
              .replace(/o/gi, "csc")
              .replace(/u/gi, "huas");


       
       
       if (AntiMYA.test(TextoCuadro)) {
             alert ('El texto no debe contener mayúsculas ni acentos.');
              
          } else {
             
              trasplante.innerHTML = mensajeEncriptado; 
              boton3.hidden = false;
          }
     
}


function decifrar() {

       let boton3 = document.getElementById("boton3");
       let TextoCuadro = document.getElementById("TextoCuadro").value;
       let trasplante = document.getElementById("trasplante");

       let AntiMYA= /[A-ZÁÉÍÓÚÜáéíóúü]/;
       let mensajeEncriptado = TextoCuadro

              .replace(/lal/gi, "a")
              .replace(/kek/gi, "e")
              .replace(/jij/gi, "i")
              .replace(/csc/gi, "o")
              .replace(/huas/gi, "u");


              if (AntiMYA.test(TextoCuadro)) {
                     alert ('El texto no debe contener mayúsculas ni acentos.');
                    
                  } else {
                     
                      trasplante.innerHTML = mensajeEncriptado; 
                      boton3.hidden = false;
                  }

      
}


function copiar() {
       let trasplante = document.getElementById("trasplante").innerHTML

       navigator.clipboard.writeText(trasplante)
alert("mensaje copiado con exito!")

}



//ajustar a tama;o de celular



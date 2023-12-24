// aniamcion para el Enmer suasaca
const texto = "Enmer Suasaca";
const textoElement = document.getElementById("texto");
let i = 0;

function escribirTexto() {
  if (i < texto.length) {
    textoElement.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 150); // Velocidad de escritura (en milisegundos)
  } else {
    setTimeout( 1000); 
  }
}

escribirTexto(); 

// aniamacion para front end

const front = "Frontend Developer |"
const frontElement = document.getElementById("front")

let a = 0;

function escribirTextofront() {
  if (a < front.length) {
    frontElement.innerHTML += front.charAt(a);
    a++;
    setTimeout(escribirTextofront, 180); // Velocidad de escritura (en milisegundos)
  } else {
    setTimeout( 2000); 
  }
}

escribirTextofront()

// boton de ir hacia arriba

const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})



let diccionario = ['ACTOR', 'AGUAS', 'ALBAS', 'ALTAR']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 5;


window.addEventListener('load', init)

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}


const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';


function intentar(){
        const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)

    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>")
           return
       }
   
           intentos--;
           if (intentos==0){
               terminar("<h1>PERDISTE!</h1>");
           }
        
    
    
}




function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}





function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}



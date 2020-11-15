//Todas las animaciones para que los elementos aparezcan con delay
ScrollReveal().reveal("#nombre", { delay: 500 })
ScrollReveal().reveal("#juani", { delay: 800 })
ScrollReveal().reveal(".cartel", { delay: 500 })
ScrollReveal().reveal(".logico-matematica",{ delay: 500 })
ScrollReveal().reveal(".intrapersonal",{ delay: 1000 })
ScrollReveal().reveal(".creativa", { delay: 1500 })
ScrollReveal().reveal("#jardin", {delay:500})
ScrollReveal().reveal("#sala-5", {delay:500})
ScrollReveal().reveal("#primer-grado", {delay:500})
ScrollReveal().reveal("#grado-5", {delay:500})
ScrollReveal().reveal("#grado-6", {delay:500})
ScrollReveal().reveal("#comienzos", {delay:500})
ScrollReveal().reveal("#interes", {delay:500})
ScrollReveal().reveal("#actualidad", { delay: 500 })

// agarrar todos los valores
var valores = document.getElementsByClassName('valores');
// conseguir ancho y alto de la pagina
var ancho = 1200;
var alto = 700;

// for loop para realizar la accion para todos los items de la lista
for ( var i=0; i < valores.length; i++ ) {
     
    //guardar el valor que se esta usando en una variable
    var valor = valores[i];
    
    // numeros random para cada elemento (usando la funcion creada mas abajo)
    randomTop = getRandomNumber(0, alto);
    randomLeft = getRandomNumber(0, ancho);
    
    // pasarle la posision en la que tienen que estar
    valor.style.top = randomTop +"px";
    valor.style.left = randomLeft +"px";
    
}

//funcion que devuelve un numero random entre el minimo y el maximo 
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
};

//for loop que recorre a todos los elementos de la lista de valores
for (i = 0; i < valores.length; i++){
    //cada vez que pasa le suma 50 a la variable i
    i += 50
    //el valor de i se le suma al delay asi va creciendo para que el siguiente valor tarde mas en mostrarse
    ScrollReveal().reveal(".valores", {delay:500+ i})
}
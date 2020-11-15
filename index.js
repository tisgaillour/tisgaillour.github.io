//Todas las animaciones para que los elementos aparezcan con delay
ScrollReveal().reveal("#nombre", { delay: 800 })
ScrollReveal().reveal("#juani", { delay: 800 })
ScrollReveal().reveal(".cartel", { delay: 500 })
ScrollReveal().reveal(".logico-matematica",{ delay: 500 })
ScrollReveal().reveal(".intrapersonal",{ delay: 1000 })
ScrollReveal().reveal(".creativa", { delay: 1500 })
// ScrollReveal().reveal("#jardin", {delay:500})
// ScrollReveal().reveal("#sala-5", {delay:500})
// ScrollReveal().reveal("#primer-grado", {delay:500})
// ScrollReveal().reveal("#grado-5", {delay:500})
// ScrollReveal().reveal("#grado-6", {delay:500})
// ScrollReveal().reveal("#comienzos", {delay:500})
// ScrollReveal().reveal("#interes", {delay:500})
// ScrollReveal().reveal("#actualidad", { delay: 500 })

// agarrar todos los valores
var valores = document.getElementsByClassName('valores');
// conseguir ancho y alto de la pagina
var ancho = 1100;
var alto = 300;

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

// //for loop que recorre a todos los elementos de la lista de valores
// for (i = 0; i < valores.length; i++){
//     //cada vez que pasa le suma 50 a la variable i
//     i += 50
//     //el valor de i se le suma al delay asi va creciendo para que el siguiente valor tarde mas en mostrarse
//     ScrollReveal().reveal(".valores", {delay:500+ i})
// }

window.onload = function() { 
		animateprogress("#realista",13);
		animateprogress("#investigador",20);
		animateprogress("#artistico",10);
		animateprogress("#social",6);
		animateprogress("#emprendedor",5);
		animateprogress("#convencional",7);
		
	} 	
	document.querySelector ("#boton").addEventListener ("click", function() {   //hago que sse vuelva a llamar la funcion cuando apreto el boton
		animateprogress("#realista",13);
		animateprogress("#investigador",20);
		animateprogress("#artistico",10);
		animateprogress("#social",6);
		animateprogress("#emprendedor",5);
		animateprogress("#convencional",7);
   
  });

  function animateprogress (id, val){    
 
 
    var getRequestAnimationFrame = function () {  
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };
     
    var fpAnimationFrame = getRequestAnimationFrame();   
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);   //subo el valor de la barra de progreso
            document.querySelector(id+"+ span").innerHTML = i;    //subo el porcentaje y lo muestro en span
            i += 0.5; //lo sumo de a o.5 para que vaya mas lento
            fpAnimationFrame(animacion);       //mientras que el contador no llegue se vuelve a ejecutar la funcion
        }
                                         
    }
        //llamo a la funcion x primera vez
        fpAnimationFrame(animacion);   
                 
}

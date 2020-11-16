//para que el codigo se ejecute despues de que cargue todo
document.addEventListener('DOMContentLoaded', function () { 
    
    //Todas las animaciones para que los elementos aparezcan con delay
    ScrollReveal().reveal("#nombre", { delay: 800 });
    ScrollReveal().reveal("#juani", { delay: 800 });
    ScrollReveal().reveal(".cartel", { delay: 500 });
    ScrollReveal().reveal(".logico-matematica", { delay: 500 });
    ScrollReveal().reveal(".intrapersonal", { delay: 1000 });
    ScrollReveal().reveal(".creativa", { delay: 1500 });
    // ScrollReveal().reveal("#jardin", {delay:500})
    // ScrollReveal().reveal("#sala-5", {delay:500})
    // ScrollReveal().reveal("#primer-grado", {delay:500})
    // ScrollReveal().reveal("#grado-5", {delay:500})
    // ScrollReveal().reveal("#grado-6", {delay:500})
    // ScrollReveal().reveal("#comienzos", {delay:500})
    // ScrollReveal().reveal("#interes", {delay:500})
    // ScrollReveal().reveal("#actualidad", { delay: 500 })

    //funcion para mostrar un poco mas la pantalla de carga si no se interpone
    function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
    }

    sleep(2000).then(() => {
        document.getElementsByClassName("loader")[0].style.display = "none";
    });
    
    
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
                document.querySelector(id+"+ span").innerHTML = i + "/29";    //subo el porcentaje y lo muestro en span
                i += 0.5; //lo sumo de a o.5 para que vaya mas lento
                fpAnimationFrame(animacion);       //mientras que el contador no llegue se vuelve a ejecutar la funcion
            }
                                             
        }
            //llamo a la funcion x primera vez
            fpAnimationFrame(animacion);   
                     
    }
    
    //Codigo para mostrar los resultados del CIP
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puntuaciones CIP'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            max: 60,
            title: {
                text: 'Puntuacion'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Puntuacion: <b>{point.y:.1f} puntos</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['Cálculo', 56],
                ['Científica', 43],
                ['Diseño', 42],
                ['Tecnología', 50],
                ['Geoastronomica', 21],
                ['Naturalista', 1],
                ['Sanitaria', 1],
                ['Asistencial', 14],
                ['Juridica', 1],
                ['Economica', 13],
                ['Comunicacional',1],
                ['Humanistica', 33],
                ['Artistica', 14],
                ['Musical', 22],
                ['Lingüística', 40],
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#ffffff',
                align: 'right',
                format: '{point.y:.1f}', 
                y: 10, 
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}, false);

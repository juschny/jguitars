const seccionesPagina = new fullpage('#fullpage', {
    
		 autoScrolling: true, 
		 fitToSection: false, 
		 fitToSectionDelay: 300,
		 easing: 'easeInOutCubic', 
		 scrollingSpeed: 700, 
		 css3: true, 
		 easingcss3: 'ease-out', 
		 loopBottom: false, 
         navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'productos', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Productos', 'Contacto'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
         sectionsColor : ['#000', '#c2c2c2', '#000'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
         controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
         afterLoad: function(origin, destination){
             if(destination.anchor == 'contacto'){
                 document.querySelector('.footer h2').style.opacity = 1;
             }

         }

});
# KaruPuriy
  Proyecto X- Reto en Pareja Sprint 3
  + GitHub: <a href="https://mgmp2.github.io/KaruPuriy/">Click Aquí</a>
  

### Descripción 
     Este proyecto esta basado bajo los siguientes eventos: 
     + Eventos nuevos: onmouseenter, input
     + Eventos visto en clase: onclick, onmouseout
     Se ha agregado un video de fondo de la pantalla
     + Referencia: https://www.youtube.com/watch?v=rwWxbkW2Bqs
### Objetivo
     Ofrecer la información rápida y útil para organizar y preparar un viaje, para priorizar las mejores visitas,
     para conseguir disfrutar más y sacar el mejor provecho del tiempo que estamos de viaje
     
## Uso de eventos
 
 ### Input
  + se produce cuando un elemento recibe la entrada del usuario.
  + Inmediatamente después de que el valor de un elemento ha cambiado 
  ~~~
  email.addEventListener("input", function(){
       validateEachInput(expRegEmail, "Ingresa el formato correcto")
   });
   ~~~
  
### Mouseenter:
  + se produce cuando el puntero del ratón se mueve sobre un elemento.
  + el evento OnMouseEnter no burbujea (no propaga hasta la jerarquía de documentos).
  
  ~~~
    divImg.addEventListener("mouseenter", function(){divImg.classList.add("animation")});
    divImg.addEventListener("mouseout", function(){divImg.classList.remove("animation")});
  ~~~


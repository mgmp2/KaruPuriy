  var dcf = document.createDocumentFragment();
  var lastScrollTop = 0;
  window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
      document.getElementById("nav-header").classList.remove("header-in");
      document.getElementById("nav-header").style.opacity = 0;
    } else {
      document.getElementById("nav-header").classList.add("header-in");
      document.getElementById("nav-header").classList.add("solid");
      document.getElementById("nav-header").style.opacity = 1;
      if(currentScroll<=3){
        document.getElementById("nav-header").classList.remove("solid");
        document.getElementById("nav-header").classList.remove("header-in");
      }
    }
    lastScrollTop = currentScroll;
  }, false);

  var arrayDep =   [{nombre: "Cajamarca", description: "Cajamarca, está situada a 2750 msnm en la margen este de la cadena oriental de la Cordillera de los Andes, en el valle interandino que forman los ríos Mashcon y Chonta",
                      primerPaso: [{salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                  {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                  {salida:"6:00 p.m", llegada: "8:50", duracion: "15h", precio: "S/.100/120"},
                                  {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                  {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"}],
                      segundoPaso: [{url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Cajamar"},
                                    {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Cajamar"},
                                    {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Cajamar"}],
                      tercerPaso: [{url: "assets/img/Cajamarca/hotel/img-01.jpg", nombreHotel: "PRIMERhoTEL"}],
                      cuartoPaso: [{url: "assets/img/Cajamarca/plato/img-01.jpg", plato:"adjkj"}]
                      },
                     {nombre: "Tumbes", description: "cajamarca jajajajaja :v ",
                     primerPaso: [{salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"6:00 p.m", llegada: "8:50", duracion: "15h", precio: "S/.100/120"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"}],
                     segundoPaso: [{url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Tumbes"},
                                   {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Tumbes"},
                                   {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Tumbes"}],
                     tercerPaso: [{url: "assets/img/Cajamarca/hotel/img-01.jpg", nombreHotel: "PRIMERhoTEL"}],
                     cuartoPaso: [{url: "assets/img/Cajamarca/plato/img-01.jpg", plato:"adjkj"}]
                     },
                     {nombre: "Piura", description: "cajamarca jajajajaja :v ",
                     primerPaso: [{salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"6:00 p.m", llegada: "8:50", duracion: "15h", precio: "S/.100/120"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"}],
                     segundoPaso: [{url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Piura"},
                                   {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Piura"},
                                   {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Piura"}],
                     tercerPaso: [{url: "assets/img/Cajamarca/hotel/img-01.jpg", nombreHotel: "PRIMERhoTEL"}],
                     cuartoPaso: [{url: "assets/img/Cajamarca/plato/img-01.jpg", plato:"adjkj"}]
                     },
                     {nombre: "Chiclayo", description: "cajamarca jajajajaja :v ",
                     primerPaso: [{salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"6:00 p.m", llegada: "8:50", duracion: "15h", precio: "S/.100/120"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"}],
                     segundoPaso: [{url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Chiclayo"},
                                   {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Chiclayo"},
                                   {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Chiclayo"}],
                     tercerPaso: [{url: "assets/img/Cajamarca/hotel/img-01.jpg", nombreHotel: "PRIMERhoTEL"}],
                     cuartoPaso: [{url: "assets/img/Cajamarca/plato/img-01.jpg", plato:"adjkj"}]
                     },
                     {nombre: "Trujillo", description: "cajamarca jajajajaja :v ",primerPaso: [{salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"6:00 p.m", llegada: "8:50", duracion: "15h", precio: "S/.100/120"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"},
                                 {salida:"5:50 p.m", llegada: "8:50", duracion: "15h", precio: "S/.80/100"}],
                     segundoPaso: [{url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Trujillo"},
                                   {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Trujillo"},
                                   {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Trujillo"}],
                     tercerPaso: [{url: "assets/img/Cajamarca/hotel/img-01.jpg", nombreHotel: "PRIMERhoTEL"}],
                     cuartoPaso: [{url: "assets/img/Cajamarca/plato/img-01.jpg", plato:"adjkj"}]
                   }];


  window.addEventListener("load", function(e){
   e.preventDefault();
   destino.addEventListener("click", function(){
     document.getElementById("box-departament").classList.remove("disappear");
     document.getElementById("info-department").classList.add("disappear");
   });
   document.getElementById("info-department").classList.add("disappear");
   for (var i = 0; i < arrayDep.length; i++) {
     createDep(i, arrayDep[i].nombre, arrayDep[i].description);
   }
   createtitle(dcf, document.getElementById("departamento"));
  });


  function createDep(index, nombre, descripcion){
    var div = document.createElement("div");
        div.classList.add("box-"+nombre);
    var divImg = document.createElement("div");
        divImg.classList.add("box-img");
        divImg.addEventListener("mouseenter", function(){divImg.classList.add("animation")});
        divImg.addEventListener("mouseout", function(){divImg.classList.remove("animation")});

    for(var i = 1 ; i < 5; i++){
        var img = document.createElement("img");
            img.setAttribute("src", "assets/img/"+nombre+"/img-0"+i+".jpg");
            img.setAttribute("alt",nombre+"-"+i);
        divImg.appendChild(img);
    }

     var span = document.createElement("span");
     var desc = document.createTextNode(descripcion);
         span.classList.add("descripcion");
         span.appendChild(desc);

     var nameDept = document.createElement("span");
          nameDept.setAttribute("class","nameDep");
     var nameDep = document.createTextNode(nombre);
          nameDept.appendChild(nameDep);
     var masInf = document.createElement("a");
        masInf.setAttribute("href","#info-department");
        masInf.addEventListener("click", function(e){
          (document.getElementById("box-departament")).classList.add("disappear");
          (document.getElementById("info-department")).classList.remove("disappear");
          console.log(index);
          detalleDepartamento(index,nombre);
        });
        var masInfo = document.createTextNode("Más información");
             masInf.appendChild(masInfo);

     div.appendChild(divImg);
     div.appendChild(span);
     div.appendChild(nameDept);
     div.appendChild(masInf);

     dcf.appendChild(div);
  }

  function createtitle(dcf,padre){
    var box = document.createElement("div");
        box.setAttribute("id","box-departament");
    var div = document.createElement("div");
        div.classList.add("box-picture");
        div.appendChild(dcf);
    var title = document.createElement("h1");
    var text = document.createTextNode("arrayDep");
        title.appendChild(text);
    var line = document.createElement("h2");

    box.appendChild(title);
    box.appendChild(line);
    box.appendChild(div);
    padre.appendChild(box);
  }

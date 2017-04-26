    var dcf = document.createDocumentFragment();
    var mainTitle = document.createElement("h2");
    var sec = document.getElementById("second");
    var thr = document.getElementById("third");
    var fot = document.getElementById("fourth");
    var fth = document.getElementById("fifth");
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

    var arrayDep =   [{nombre: "Cajamarca", description: "Está situada a 2750 msnm en la margen este de la cadena oriental de la Cordillera de los Andes, en el valle interandino que forman los ríos Mashcon y Chonta",

                        segundoPaso: [  {url: "assets/img/Cajamarca/queHacer/img-01.jpg", nombre: "Febrero-Carmaval de Cajamarca"},
                                        {url: "assets/img/Cajamarca/queHacer/img-02.jpg", nombre: "Abril-Fiesta de las Cruces de Porcon"},
                                        {url: "assets/img/Cajamarca/queHacer/img-03.jpg", nombre: "Junio-San Juan Bautista"}
                                     ],
                        tercerPaso: [ {url: "assets/img/Cajamarca/hotel/img-01.jpg", nombre: "HOTEL BALCONES PLAZA"},
                                      {url: "assets/img/Cajamarca/hotel/img-02.jpg", nombre: "Atlantis Hotel & Casino"},
                                      {url: "assets/img/Cajamarca/hotel/img-03.jpg", nombre: "Hotel & Spa Laguna Seca "}

                                    ],
                        cuartoPaso: [ {url: "assets/img/Cajamarca/plato/img-01.jpg", nombre:"Caldo Verde"},
                                      {url: "assets/img/Cajamarca/plato/img-02.jpg", nombre: "Sopa de Chochoca"},
                                      {url: "assets/img/Cajamarca/plato/img-03.jpg", nombre: "Humitas saladas y dulces"},
                                      {url: "assets/img/Cajamarca/plato/img-04.jpg", nombre: "Manjar Blanco"}

                                    ],
                        quintoPaso: [ {url: "assets/img/Cajamarca/llevar/img-01.jpg", nombre:"Ponchos, sombreros,alfombra, etc."},
                                      {url: "assets/img/Cajamarca/llevar/img-02.jpg", nombre: "Artesania en Madera"},
                                      {url: "assets/img/Cajamarca/llevar/img-03.jpg", nombre: "Muñecas con traje típico"}

                                    ]

                        },
                       {nombre: "Tumbes", description: "Es una ciudad del extremo noroeste del Perú, situada cerca de la desembocadura del río Tumbes en el golfo de Guayaquil (océano Pacífico) ",

                       segundoPaso: [  {url: "assets/img/Tumbes/queHacer/img-01.jpg", nombre: "Visitar playas: Zorritos, Punta Sal y Mancora"},
                                       {url: "assets/img/Tumbes/queHacer/img-02.jpg", nombre: "Visitar Cacique Chilimasa"},
                                       {url: "assets/img/Tumbes/queHacer/img-03.jpg", nombre: "Ir a la Plaza de Armas"}
                                    ],
                       tercerPaso: [ {url: "assets/img/Tumbes/hotel/img-01.jpg", nombre: "Costas del Sol"},
                                     {url: "assets/img/Tumbes/hotel/img-02.jpg", nombre: "Jer's Hotel"},
                                     {url: "assets/img/Tumbes/hotel/img-03.jpg", nombre: "Maliah  Beach Club Hotel"}
                                   ],
                       cuartoPaso: [ {url: "assets/img/Tumbes/plato/img-01.jpg", nombre:"Ceviche de conchas negras"},
                                      {url: "assets/img/Tumbes/plato/img-02.jpg", nombre: "Chilcano de pescado"},
                                      {url: "assets/img/Tumbes/plato/img-03.jpg", nombre: "El majarisco tumbesino"},
                                      {url: "assets/img/Tumbes/plato/img-04.jpg", nombre: "Enrollado de mero en pulpa de cangrejo"},
                                      {url: "assets/img/Tumbes/plato/img-05.jpg", nombre: "Albóndigas de pulpa de cangrejo"},
                                      {url: "assets/img/Tumbes/plato/img-06.jpg", nombre: "Chupe de Cangrejo"}
                                   ],
                       quintoPaso: [ {url: "assets/img/Tumbes/llevar/img-01.jpg", nombre:"Artesanía en Puerto Pizarro"},
                                     {url: "assets/img/Tumbes/llevar/img-02.jpg", nombre: "Caballito de Mar"},
                                     {url: "assets/img/Tumbes/llevar/img-03.jpg", nombre: "Paseos en bote"}

                                   ]

                       },
                       {nombre: "Piura", description: "Está ubicada en el centro oeste de la región, en el valle del río Piura, al norte del desierto de Sechura, a 981 km al norte de Lima y próxima a la frontera con el Ecuador.  ",

                       segundoPaso: [  {url: "assets/img/Piura/queHacer/img-01.jpg", nombre: "Playa, surf, mochiler y vida nocturna"},
                                       {url: "assets/img/Piura/queHacer/img-02.jpg", nombre: "Visitar al Parque Nacional de Amotape"},
                                       {url: "assets/img/Piura/queHacer/img-03.jpg", nombre: "Playa, artesania y culturas"}
                                    ],
                       tercerPaso: [ {url: "assets/img/Piura/hotel/img-01.jpg", nombre: "Hotel San José"},
                                     {url: "assets/img/Piura/hotel/img-02.jpg", nombre: "Hotel las arenas"}

                                   ],
                       cuartoPaso: [ {url: "assets/img/Piura/plato/img-01.jpg", nombre:"Enrollado de Langostino"},
                                     {url: "assets/img/Piura/plato/img-02.jpg", nombre: "Seco de Cabrito con frejoles y chicha de Jora"},
                                     {url: "assets/img/Piura/plato/img-03.jpg", nombre: "Seco de Chavelo"}

                                   ],
                       quintoPaso: [ {url: "assets/img/Piura/llevar/img-01.jpg", nombre:"Aventura de buceo"},
                                     {url: "assets/img/Piura/llevar/img-02.jpg", nombre: "Artesania"},
                                     {url: "assets/img/Piura/llevar/img-03.jpg", nombre: "Artesania hecho a paja"}

                                   ]

                       },
                       {nombre: "Chiclayo", description: "Está situada a 13 kilómetros de la costa del Pacífico y 770 kilómetros de la capital del país.",

                       segundoPaso: [  {url: "assets/img/Chiclayo/queHacer/img-01.jpg", nombre: "Visitar Plaza de Armas"},
                                       {url: "assets/img/Chiclayo/queHacer/img-02.jpg", nombre: "Visitar Museo Tumbas Reales de Sipán"},
                                       {url: "assets/img/Chiclayo/queHacer/img-03.jpg", nombre: "Paseo de Yourtuque"}
                                    ],
                       tercerPaso: [ {url: "assets/img/Chiclayo/hotel/img-01.jpg", nombre: "Costa del Sol Ramada"},
                                     {url: "assets/img/Chiclayo/hotel/img-02.jpg", nombre: "WinMeier Hotel"},
                                     {url: "assets/img/Chiclayo/hotel/img-03.jpg", nombre: "Hotel Gran Sipan"}

                                   ],
                       cuartoPaso: [ {url: "assets/img/Chiclayo/plato/img-01.jpg", nombre:"Arroz con Pato"},
                                     {url: "assets/img/Chiclayo/plato/img-02.jpg", nombre: "Chinguirito"},
                                     {url: "assets/img/Chiclayo/plato/img-03.jpg", nombre: "Cuy Frito"}

                                   ],
                       quintoPaso: [ {url: "assets/img/Chiclayo/llevar/img-01.jpg", nombre:"Un inolvidable día en el Paseo de las Musas"},
                                     {url: "assets/img/Chiclayo/llevar/img-02.jpg", nombre: "Ricos King Kong"}

                                   ]

                       },
                       {nombre: "Trujillo", description: "Es la capital del departamento peruano de La Libertad, la ciudad más poblada del norte del Perú y la tercera ciudad más poblada del país; tiene al año 2015, una población estimada de 823.110 habitantes ",

                       segundoPaso: [  {url: "assets/img/Trujillo/queHacer/img-01.jpg", nombre: "Visitar Huanchaco"},
                                       {url: "assets/img/Trujillo/queHacer/img-02.jpg", nombre: "Pasear al Monumento"},
                                       {url: "assets/img/Trujillo/queHacer/img-03.jpg", nombre: "Ir Huaca Esmeralda"}
                                    ],
                       tercerPaso: [ {url: "assets/img/Trujillo/hotel/img-01.jpg", nombre: "Palacio Chaves Hotel"},
                                     {url: "assets/img/Trujillo/hotel/img-02.jpg", nombre: "El Baciyelmo"},
                                     {url: "assets/img/Trujillo/hotel/img-03.jpg", nombre: "Parador de Trujillo"}

                                   ],
                       cuartoPaso: [ {url: "assets/img/Trujillo/plato/img-01.jpg", nombre:"Cabrito"},
                                     {url: "assets/img/Trujillo/plato/img-02.jpg", nombre: "Shambar"},
                                     {url: "assets/img/Trujillo/plato/img-03.jpg", nombre: "Ceviche"}

                                   ],
                       quintoPaso: [ {url: "assets/img/Trujillo/llevar/img-01.jpg", nombre:"Paseo en Caballo"},
                                     {url: "assets/img/Trujillo/llevar/img-02.jpg", nombre: "Diversión"},
                                     {url: "assets/img/Trujillo/llevar/img-03.jpg", nombre: "Adornos hermosos"}

                                   ]

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

    function createtitle(dcf,padre){
      var box = document.createElement("div");
          box.setAttribute("id","box-departament");
      var div = document.createElement("div");
          div.classList.add("box-picture");
          div.appendChild(dcf);
      var title = document.createElement("h1");
      var text = document.createTextNode("Departamentos del Perú");
          title.appendChild(text);
      var line = document.createElement("h2");

      box.appendChild(title);
      box.appendChild(line);
      box.appendChild(div);
      padre.appendChild(box);
    }

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
            if(!sec.children && !thr.children && !fot.children && !fth.children){
              secondInf(index,nombre);
              thirdInf(index,nombre);
               fourthInf (index,nombre);
               fifthInf(index,nombre);

            }
             else {
               sec.removeChild(sec.lastChild);
               thr.removeChild(thr.lastChild);
               fot.removeChild(fot.lastChild);
               fth.removeChild(fth.lastChild);

               secondInf(index,nombre);
               thirdInf(index,nombre);
                fourthInf (index,nombre);
                fifthInf(index,nombre);

             }
            (document.getElementById("box-departament")).classList.add("disappear");
            (document.getElementById("info-department")).classList.remove("disappear");


          });
          var masInfo = document.createTextNode("Más información");
               masInf.appendChild(masInfo);

       div.appendChild(divImg);
       div.appendChild(span);
       div.appendChild(nameDept);
       div.appendChild(masInf);

       dcf.appendChild(div);
     }

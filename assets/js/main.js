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



 var arrayDep =   [{nombre: "Cajamarca", description: "cajamarca jajajajaja :v "},
                     {nombre: "Tumbes", description: "cajamarca jajajajaja :v "},
                     {nombre: "Piura", description: "cajamarca jajajajaja :v "},
                     {nombre: "Chiclayo", description: "cajamarca jajajajaja :v "},
                     {nombre: "Trujillo", description: "cajamarca jajajajaja :v "}];
 window.addEventListener("load", function (e){
   e.preventDefault();
   for (var i = 0; i < arrayDep.length; i++) {
     createCoders(arrayDep[i].nombre, arrayDep[i].url);
   }
   createtitle(dcf, document.getElementById("departamento"));
 });


 function createCoders(nombre, url){
     var div = document.createElement("div");
     var img = document.createElement("img");
         img.setAttribute("src",url);
         img.setAttribute("alt",nombre);
     var span = document.createElement("span");
     var text = document.createTextNode(nombre);
         span.classList.add("nombre");
         span.appendChild(text);
     var span2 = document.createElement("span");
     div.appendChild(span2);
     div.appendChild(img);
     div.appendChild(span);
     dcf.appendChild(div);
 }
 function createtitle(dcf,padre){
   var box = document.createElement("div");
       box.classList.add("box-departament");
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

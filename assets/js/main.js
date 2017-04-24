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



 var styleCoder =   [{nombre: "Naomi Villanueva", url: "assets/img/students/1.png"},
                     {nombre: "Ana Durand", url: "assets/img/students/2.png"},
                     {nombre: "Betsi Loayza", url: "assets/img/students/3.png"},
                     {nombre: "Maia Rojas", url: "assets/img/students/4.png"},
                     {nombre: "Miriam Mendoza", url: "assets/img/students/5.png"},
                     {nombre: "Neiza Nuñez", url: "assets/img/students/6.png"}];
 window.addEventListener("load", function (e){
   e.preventDefault();
   for (var i = 0; i < styleCoder.length; i++) {
     createCoders(styleCoder[i].nombre, styleCoder[i].url);
   }
   createtitle(dcf, document.getElementById("container"));
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
   console.log(padre);
     var section = document.createElement("section");
       section.setAttribute("id","departamentos");
     section.appendChild(dcf);
     var title = document.createElement("h1");
     var text = document.createTextNode("StyleCoder");
         title.appendChild(text);
     var line = document.createElement("h2");
     padre.appendChild(title);
     console.log(title);
     padre.appendChild(line);
     padre.appendChild(section);
 }

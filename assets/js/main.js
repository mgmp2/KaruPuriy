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



 var arrayDep =   [{nombre: "Cajamarca", description: "cajamarca jajajajaja :v "}];
                    //  {nombre: "Tumbes", description: "cajamarca jajajajaja :v "},
                    //  {nombre: "Piura", description: "cajamarca jajajajaja :v "},
                    //  {nombre: "Chiclayo", description: "cajamarca jajajajaja :v "},
                    //  {nombre: "Trujillo", description: "cajamarca jajajajaja :v "}];
 window.addEventListener("load", function (e){
   e.preventDefault();
   for (var i = 0; i < arrayDep.length; i++) {
     createDep(arrayDep[i].nombre, arrayDep[i].description);
   }
   createtitle(dcf, document.getElementById("departamento"));
 });


 function createDep(nombre, descripcion){
     var div = document.createElement("div");
          div.classList.add("box-"+nombre);
    var divImg = document.createElement("div");
          divImg.classList.add("box-img");

     var img;
     for(var i = 1 ; i < 5; i++){
       var arrayImg = [{}];
       arrayImg.push("assets/img/"+nombre+"/img-0"+i+".jpg");
       console.log(arrayImg);
       img = document.createElement("img");
       img.addEventListener("mouseenter", function(e){
         img.classList.add("none");
         console.log(e);
       })
       img.setAttribute("src", "assets/img/"+nombre+"/img-0"+i+".jpg");
       img.setAttribute("alt",nombre+"-"+i);
       divImg.appendChild(img);
     }
     var span = document.createElement("span");
     var text = document.createTextNode(nombre);
     var desc = document.createTextNode(descripcion);
         span.classList.add("descripcion");
         span.appendChild(text);
         span.appendChild(desc);

     var span2 = document.createElement("span");
     div.appendChild(divImg);
     div.appendChild(span);
     div.appendChild(span2);
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

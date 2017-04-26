var mainTitle = document.createElement("h2");
var fir = document.getElementById("first");
var sec = document.getElementById("second");
var thr = document.getElementById("third");
var fot = document.getElementById("fourth");
var fth = document.getElementById("fifth");


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


function secondInf(ind, nombre){
  var dep = document.getElementById("info-department");
  var nDep = document.createTextNode(nombre);
  mainTitle.innerHTML = nombre;
  dep.appendChild(mainTitle);
  dep.insertBefore(mainTitle, document.getElementById("first"));

  var cdf = document.createDocumentFragment();
  var art = document.createElement("article");
      for (var i = 0; i < arrayDep[0].segundoPaso.length; i++) {
        var div = document.createElement("div");
        div.classList.add("info-"+nombre+i);
        var img = document.createElement("img");
            img.setAttribute("src", arrayDep[ind].segundoPaso[i].url);
            img.setAttribute("alt",arrayDep[ind].segundoPaso[i].nombre);
        var infSec = document.createElement("span");
        var inf = document.createTextNode(arrayDep[ind].segundoPaso[i].nombre);
            infSec.appendChild(inf);
        div.appendChild(img);
        div.appendChild(infSec);
        cdf.appendChild(div);
      }

  art.appendChild(cdf);
  sec.appendChild(art);


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
        if(!sec.children){
          secondInf(index,nombre);
        }
         else {
           sec.removeChild(sec.lastChild);
           secondInf(index,nombre);

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

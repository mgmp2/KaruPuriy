

function secondInf(ind, nombre){
  var dep = document.getElementById("info-department");
  var nDep = document.createTextNode(nombre);
  mainTitle.innerHTML = nombre;
  dep.appendChild(mainTitle);
  dep.insertBefore(mainTitle, document.getElementById("first"));

  var cdf = document.createDocumentFragment();
  var art = document.createElement("article");
arrayDep[ind].segundoPaso.forEach(function(e,i){
     var div = document.createElement("div");
     div.classList.add("info-"+nombre+i);
     var img = document.createElement("img");
         img.setAttribute("src", e.url);
         img.setAttribute("alt",e.nombre);
     var infSec = document.createElement("span");
     var inf = document.createTextNode(e.nombre);
         infSec.appendChild(inf);
     div.appendChild(img);
     div.appendChild(infSec);
     cdf.appendChild(div);
   });
  art.appendChild(cdf);
  sec.appendChild(art);

}

function thirdInf (ind,nombre){
  var dep = document.getElementById("info-department");
  var nDep = document.createTextNode(nombre);
  mainTitle.innerHTML = nombre;
  dep.appendChild(mainTitle);
  dep.insertBefore(mainTitle, document.getElementById("first"));

  var cdf = document.createDocumentFragment();
  var art = document.createElement("article");
  arrayDep[ind].tercerPaso.forEach(function(e,i){
     var div = document.createElement("div");
     div.classList.add("info-"+nombre+i);
     var img = document.createElement("img");
         img.setAttribute("src", e.url);
         img.setAttribute("alt",e.nombre);
     var infSec = document.createElement("span");
     var inf = document.createTextNode(e.nombre);
         infSec.appendChild(inf);
     div.appendChild(img);
     div.appendChild(infSec);
     cdf.appendChild(div);
   });
  art.appendChild(cdf);
  thr.appendChild(art);
};
function fourthInf(ind,nombre){
  var dep = document.getElementById("info-department");
  var nDep = document.createTextNode(nombre);
  mainTitle.innerHTML = nombre;
  dep.appendChild(mainTitle);
  dep.insertBefore(mainTitle, document.getElementById("first"));

  var cdf = document.createDocumentFragment();
  var art = document.createElement("article");
  arrayDep[ind].cuartoPaso.forEach(function(e,i){
     var div = document.createElement("div");
     div.classList.add("info-"+nombre+i);
     var img = document.createElement("img");
         img.setAttribute("src", e.url);
         img.setAttribute("alt",e.nombre);
     var infSec = document.createElement("span");
     var inf = document.createTextNode(e.nombre);
         infSec.appendChild(inf);
     div.appendChild(img);
     div.appendChild(infSec);
     cdf.appendChild(div);
   });
  art.appendChild(cdf);
  fot.appendChild(art);
}

function fifthInf(ind,nombre){
  var dep = document.getElementById("info-department");
  var nDep = document.createTextNode(nombre);
  mainTitle.innerHTML = nombre;
  dep.appendChild(mainTitle);
  dep.insertBefore(mainTitle, document.getElementById("first"));

  var cdf = document.createDocumentFragment();
  var art = document.createElement("article");
  arrayDep[ind].quintoPaso.forEach(function(e,i){
     var div = document.createElement("div");
     div.classList.add("info-"+nombre+i);
     var img = document.createElement("img");
         img.setAttribute("src", e.url);
         img.setAttribute("alt",e.nombre);
     var infSec = document.createElement("span");
     var inf = document.createTextNode(e.nombre);
         infSec.appendChild(inf);
     div.appendChild(img);
     div.appendChild(infSec);
     cdf.appendChild(div);
   });
  art.appendChild(cdf);
  fth.appendChild(art);
}

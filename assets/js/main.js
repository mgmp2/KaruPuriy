function ClientData(nombre, apellido, correo, contrasena, selecDestino){
  this.nombre = nombre;
  this.contrasena = contrasena;
  this.correo = correo;
  this.contrasena = contrasena;
  this.selecDestino = selecDestino;
}

var name1 = document.getElementById("name");
var lastname = document.getElementById("lastname");
var email = document.getElementById("input-email");
var pass = document.getElementById("input-password");
var optionsList = document.getElementById("select-destiny");

var letterRegex = /^[a-zA-Z\s]*$/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  function validateEachInput(expRegular, spanText1){
    var input = event.target;
    var parentInput = input.parentNode;w
    if(!expRegular.test(input.value)){
      createTooltip(parentInput, spanText1);
    }else if(parentInput.lastElementChild.getAttribute("class") == "tooltiptext"){
      parentInput.lastElementChild.style.display = "none";
    }
}

function createTooltip(parentElement, messageToTooltip){
    if(parentElement.lastElementChild.getAttribute("class") =="tooltiptext"){
      parentElement.lastElementChild.innerHTML = messageToTooltip;
    }else{
      var span = document.createElement("span");
      span.setAttribute("class","tooltiptext");
      span.innerHTML = messageToTooltip;
      parentElement.append(span);
    }
  }

window.addEventListener("load", function(){
  name1.addEventListener("input", function(){
        validateEachInput(letterRegex, "Ingresa solo letras");
    });

  lastname.addEventListener("input", function(){
       validateEachInput(letterRegex, "Ingresa solo letras");
   });

   email.addEventListener("input", function(){
       validateEachInput(expRegEmail, "Ingresa el formato correcto")
   });

   pass.addEventListener("input", function(){
       validateEachInput(/\S{6}/, "Mínimo 6 carácteres")
   });

   optionsList.addEventListener("blur", function(){
     var parentElement = event.target.parentNode;
     if(optionsList.selectedIndex == 0){
       createTooltip(parentElement, "Selecciona una opción");
     }else {
       parentElement.lastElementChild.style.display = "none";
     }
   })

   document.getElementById("registrar").addEventListener("click", function(){
      event.preventDefault();
      var newClient = new ClientData(name.value, lastname.value, email.value, pass.value, optionsList.options[optionsList.selectedIndex].text);
      var parentElement = event.target.parentNode;
      if(name1.value.trim().length == 0 || lastName.value.trim().length == 0 || email.value.trim().length == 0 || pass.value.trim().length == 0){
        createTooltip(parentElement, "Todos los campos son obligatorios.");
      }else {
        parentElement.lastElementChild.style.display = "none";
        if(pass.value == "123456" || pass.value == "password" || pass.value == "098754"){
          createTooltip(parentElement, "Elige otra contraseña");
        }else {
          parentElement.lastElementChild.style.display = "none";
        }
        localStorage.setItem("contacto", JSON.stringify(newClient));
        // document.getElementById("client-bicis-form").reset();
      }

    })
})

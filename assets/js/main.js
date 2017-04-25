function ClientData(nombre, apellido, correo, contrasena){
  this.nombre = nombre;
  this.contrasena = contrasena;
  this.correo = correo;
  this.contrasena = contrasena;
}

function Registro(correoRegistro, contrasenaRegistro){
    this.correoRegistro = correoRegistro;
    this.contrasenaRegistro = contrasenaRegistro;
}

var name1 = document.getElementById("name");
var lastname = document.getElementById("lastname");
var email = document.getElementById("input-email");
var pass = document.getElementById("input-password");
var optionsList = document.getElementById("select-destiny");
var allInput = document.querySelectorAll(".form-control");
var emailSignIn = document.getElementById("email-sign-in");
var passSignIn = document.getElementById("password-sign-in");


var letterRegex = /^[a-zA-Z\s]*$/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function validateEachInput(expRegular, spanText1){
    var input = event.target;
    var parentInput = input.parentNode;
    if(!expRegular.test(input.value)){
      createTooltip(parentInput, spanText1);
    }else if(parentInput.lastElementChild.getAttribute("class") == "tooltiptext"){
      parentInput.lastElementChild.style.display = "none";
    }
}

function createTooltip(parentElement, messageToTooltip){
    if(parentElement.lastElementChild.getAttribute("class") =="tooltiptext"){
      parentElement.lastElementChild.innerHTML = messageToTooltip;
      parentElement.lastElementChild.style.display = "block";
    }else{
      var span = document.createElement("span");
      span.setAttribute("class","tooltiptext");
      span.innerHTML = messageToTooltip;
      parentElement.append(span);
    }
  }

function capitalLetter(){
  var inputLetter;
  if(event.target.getAttribute("type") == "text"){
    inputLetter = event.target.value.split(" ");
    var mapingArr = inputLetter.map((element) => (element.charAt(0).toUpperCase() + element.substring(1, element.length).toLowerCase()));
    event.target.value = mapingArr.toString().replace(",", " ");
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
   
    emailSignIn.addEventListener("input", function(){
       validateEachInput(expRegEmail, "Ingresa el formato correcto")
   });

   passSignIn.addEventListener("input", function(){
       validateEachInput(/\S{6}/, "Mínimo 6 carácteres")
   });
    
    
    for (var i = 0; i < allInput.length; i++) {
      allInput[i].addEventListener("blur", capitalLetter);
    }

   document.getElementById("registrar").addEventListener("click", function(){
      event.preventDefault();
      var newClient = new ClientData(name.value, lastname.value, email.value, pass.value);
      var parentElement = event.target.parentNode;
      if(name1.value.trim().length == 0 || lastname.value.trim().length == 0 || email.value.trim().length == 0 || pass.value.trim().length == 0){
        createTooltip(parentElement, "Todos los campos son obligatorios.");
      }else if(parentElement.lastElementChild.getAttribute("class") == "tooltiptext"){
        parentElement.lastElementChild.style.display = "none";
        localStorage.setItem("registroContacto", JSON.stringify(newClient));
      }
    });
    
    document.getElementById("log-in").addEventListener("click", function(){
        event.preventDefault();
        var registroClient = new Registro(emailSignIn.value, passSignIn.value);
        var parentElement = event.target.parentNode;
        if(emailSignIn.value.trim().length == 0 || passSignIn.value.trim() == 0){
            createTooltip(parentElement, "todos los campos son obligatorios");
        }else if(parentElement.lastElementChild.getAttribute("class") == "tooltiptext"){
            parentElement.lastElementChild.style.display = "none";
            localStorage.setItem("contactos", JSON.stringify(registroClient));
        }
    })
    
});


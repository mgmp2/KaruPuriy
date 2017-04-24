var name1 = document.getElementById("name");
var lastname = document.getElementById("lastname");
var email = document.getElementById("input-email");
var pass = document.getElementById("input-password");
var optionsList = document.getElementById("select-destiny");

var letterRegex = /^[a-zA-Z\s]*$/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var message ="";

  function validateEachInput(expRegular, spanText1){
    var input = event.target;
    var parentInput = input.parentNode;
    console.log(parentInput);
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
     console.log(event.target.parentNode);
     var parentElement = event.target.parentNode
     if(optionsList.selectedIndex == 0){
       createTooltip(parentElement, "Selecciona una opción");
     }else {

     }
   })

  document.getElementById("registrar").addEventListener("click", function (e){
    e.preventDefault();
    var mensaje;
    var formSignUp = document.getElementById("signup-box");
    var formChildren = formSignUp.children;
    for(var i=1; i<formChildren.length; i++){
      if(formChildren[i].getAttribute("class") == "input-box"){
          if(formChildren[i].lastElementChild.getAttribute("class") == "tooltiptext inactive"){
            console.log(formChildren[i].lastElementChild.getAttribute("class"));
            mensaje = "Todo correcto";
          } else if(!name.value || !lastname.value || !email.value ||!pass.value || options.value =="0"){
              mensaje ="Se debe llenar todos los datos";
        } else {
            mensaje = "Todo correcto";
        }
      }
    }
  });
})

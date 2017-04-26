var showUser = JSON.parse(localStorage.getItem("allClients"));
console.log(showUser);
var signInData = JSON.parse(localStorage.getItem("toSignIn"));
console.log(signInData);

function userLS(){
    signInData.forEach(function(elemen){
      console.log(elemen.correoRegistro);
      showUser.forEach(function(e){
        console.log(e.correo);
      if(e.correo == elemen.correoRegistro){
        console.log(("ingresa"));
      }
    });
  });
}

window.onload = () => {
  document.querySelector(".send-button").addEventListener("click", e=> validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener("keyup", e=> ListenForEsc(e));
};

//validar form
function validateForm(e){
  e.preventDefault();
  const nameField=document.getElementById("nombre");
  const correoField=document.getElementById("correo");
  const messageField=document.getElementById("mensaje");
  if ((nameField.value==="") || (correoField.value==="") || (messageField.value==="")){
  //document.getElementById("name-error").innerHTML="Para enviar el formulario requerimos su nombre!";
  alert("Para enviar el formulario requerimos todos los campos llenos, verifica e intenta nuevamente");
  }
  else {
    showNotification();
  }
}

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
  document.querySelector('.form-container').reset();
 document.querySelector(".notification").style.display = "flex";
 document.querySelector(".notification").innerHTML="El formulario fue enviado sin errores"; 
 window.open('mailto:pdespejo18@gmail.com');
 setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

//escucha para cerrar el modal
function ListenForEsc(e){
  if (e.keyCode===27){
    closeModal(e);
  }
}

/** Esta funcion se llama cuando la persona hace click en cualquier parte del carousel */
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
  //img contiene la ruta de la imagen 
  let img= e.srcElement.currentSrc;
  let title = e.srcElement.id;
  if (title=='pro1'){
    document.getElementById("modal-header").innerHTML="Variedades: tienda online";
  }
  if (title=='pro2'){
    document.getElementById("modal-header").innerHTML="Filos Smart: cuestionarios";
  }
  document.querySelector("#img-modal").setAttribute("src",img);
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
  // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
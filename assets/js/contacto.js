
const MDCTextField = mdc.textField.MDCTextField;
const MDCSelect = mdc.select.MDCSelect;
const MDCCheckbox = mdc.checkbox.MDCCheckbox;

const nombre = new MDCTextField(document.querySelector('.nombre'));
const empresa = new MDCTextField(document.querySelector('.empresa'));
const ciudad = new MDCTextField(document.querySelector('.ciudad'));
const correo = new MDCTextField(document.querySelector('.correo'));
const celular = new MDCTextField(document.querySelector('.celular'));
const instagram = new MDCTextField(document.querySelector('.instagram'));
const categoria = new MDCSelect(document.querySelector('.categoria'));
const politica = new MDCCheckbox(document.querySelector('.politica'));

// Acordion Contacto
var acc = document.getElementsByClassName("btn-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// mdc.ripple.MDCRipple.attachTo(document.querySelector('.enviar'));
// const enviar = document.querySelector('.enviar');

const sendForm = async () => {
  // console.log(nombre.value, empresa.value, ciudad.value, correo.value, celular.value, instagram.value, categoria.value, politica.checked);
  if ((politica.checked) && (nombre.value) && (correo.value) && (categoria.value != "")) {


    const formObject = {
      IsExcludedFromCampaigns: "true",
      Name: nombre.value,
      Email: correo.value
    }

      // attributes:{
      //     nombre: formNombre.value,
      //     apellidos: formApellido.value,
      //     tipoDocumento: formTipoDocumento.value,
      //     numDocumento: formNumDocumento.value,
      //     empresa: formEmpresa.value,
      //     canal: formCanal.value
      // }

  }

  else {
    alert("Rellena los espacios requeridos.");
  }
  
}
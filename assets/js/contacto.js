
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

acc[0].addEventListener("click", function() {
  // this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});

// Enviar formulario a MailJet
const sendForm = async () => {
  // console.log(nombre.value, empresa.value, ciudad.value, correo.value, celular.value, instagram.value, categoria.value, politica.checked);
  if ((politica.checked) && (nombre.value) && (correo.value)) {

    const formObject = {
      IsExcludedFromCampaigns: "true",
      nombre: nombre.value,
      email: correo.value,
      empresa: empresa.value,
      ciudad: ciudad.value,
      celular: celular.value,
      instagram: instagram.value,
      categoria: categoria.value
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(formObject);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {

      let responseCreateContact = await fetch("https://gv2934l68j.execute-api.sa-east-1.amazonaws.com/default", requestOptions);
      let responseCreateContactJSON = await responseCreateContact.json();
      let responseBody = JSON.parse(responseCreateContactJSON.body);

      if (responseBody.StatusCode == 400) {
        console.log("Ups, ha ocurrido un error");
      }
      else {
        console.log("Te has registrado correctamente!");
      }

    } catch (err) {

      console.log(err);

    }
  }

  else {
    alert("Rellena los espacios requeridos.");
  }
}
// Seccion Contacto
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

mdc.textField.MDCTextField.attachTo(document.querySelector('.nombre'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.empresa'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.ciudad'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.correo'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.celular'));
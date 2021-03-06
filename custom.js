function printCompany() {
  document.getElementById('outputCompany').innerHTML = inputCompany.value;
}

function printMessage() {
  document.getElementById('outputMessage').innerHTML = inputMessage.value;
}

function changeBg() {
  var bgColor = document.getElementById('inputBg').value;
  document.getElementById('card').style.background = bgColor;
}

function changeText() {
  var textColor = document.getElementById('inputText').value;
  document.getElementById('card').style.color = textColor;
}

function textAlign(selected_id) {
  document.getElementById('card').className = selected_id;
}

function printName() {
  document.getElementById('outputName').innerHTML = inputName.value;
}

function printJob() {
  document.getElementById('outputJob').innerHTML = inputJob.value;
}

function printEmail() {
  document.getElementById('outputEmail').innerHTML = "Email: " +  inputEmail.value;
}

function printPhone() {
  document.getElementById('outputPhone').innerHTML = "Phone: " +  inputPhone.value;
}

function formSubmit() {
  if (!inputName.value + !inputJob.value + !inputEmail.value + !inputEmail.value + !inputPhone.value + !inputMessage.value + !inputCompany.value) {
    alert('Please complete all required sections');
  }
}

function formClear() {
  window.location.reload();
}

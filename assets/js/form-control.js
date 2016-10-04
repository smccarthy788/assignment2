var alertStrings = [];
var hadError = false;

function submitForm() {
  alertStrings = [];
  hadError = false;

  var textFields = [document.getElementById("firstName"),
                document.getElementById("lastName"),
                document.getElementById("reason")];
  var radioBoxes = [document.getElementById("hillary"),
                    document.getElementById("trump")];
  for(let field of textFields){
    checkTextField(field);
  }
  checkPrez(radioBoxes);
  if(hadError) {
    displayErrors();
  }
  else {
    displaySuccess();
  }
}

function checkTextField(domElement) {
  if(domElement.value === "") {
    // Fields should have input
    domElement.style.border = "solid 2px #ff0000";
    addError(domElement);
    hadError = true;
  }
}

function addError(domElement) {
  var newError = domElement.name + " must be specified!\n";
  alertStrings.push(newError);
}

function checkPrez(radios) {
  if(!radios[0].checked && !radios[1].checked) {
    alertStrings.push("You must select a president!");
    for(let radio of radios) {
      radio.style.outline = "solid red 1px";
    }
    hadError = true;
  }
}

function displayErrors() {
  var errors = document.getElementById("errors")
  errors.innerHTML = "";
  var alertHtml = '<ul>\n';
  for (let alertString of alertStrings) {
    alertHtml = alertHtml + "  <li>" + alertString + "</li>\n";
  }
  alertHtml = alertHtml + "</ul>";
  errors.innerHTML = alertHtml;
  errors.style.background = "red";
  errors.style.display = "inherit";
}

function displaySuccess() {
  document.getElementById("pleaseVote").style.display = "none";
  document.getElementById("errors").style.display = "none";
  document.body.style.backgroundImage = 'url(assets/images/eagle.jpg)'

}
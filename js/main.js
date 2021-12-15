const form = document.getElementById("moreinfo");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
// const feedback = form.addEventListener("submit", validateForm)

const feedback = document.getElementById("feedback");
form.addEventListener("submit", validateForm)

function validateForm(event) {
  event.preventDefault();
  
  let name = nameInput.value;
  let email = emailInput.value; 
  let phone = phoneInput.value;
  
  let nameValid = name.length >=5;
  let emailValid = email.length >=5;
  let phoneValid = phone.length >=5;
  
  if(nameValid && emailValid && phoneValid) {
    feedback.innerText = "Registration Success. You will be contacted by a sales rep soon"
  } else {
    feedback.innerText = "Your details have not registered"
  }
}
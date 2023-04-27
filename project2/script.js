var nameError = document.getElementById('name-error');
var lastnameError = document.getElementById('lastname-error');
var addressError = document.getElementById('address-error');
var cityError = document.getElementById('city-error');
var zipError = document.getElementById('zip-error');
var stateError = document.getElementById('state-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');
//validating first name
function validateName() {
    var name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        nameError.innerHTML = 'Write first name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating last name 
function validateLastname() {
    var lastname = document.getElementById('contact-lastname').value;
    
    if(lastname.length == 0){
        lastnameError.innerHTML = 'Last name is Required';
        return false;
    }
    if(!lastname.match(/^[A-Za-z]*$/)){
        lastnameError.innerHTML = 'Write last name';
        return false;
    }

    lastnameError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating home address
function validateAddress() {
    var address = document.getElementById('contact-address').value;
    
    if(address.length == 0){
        addressError.innerHTML = 'Address is Required';
        return false;
    }

    addressError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating city has been filled out
function validateCity() {
    var city = document.getElementById('contact-city').value;
    
    if(city.length == 0){
        cityError.innerHTML = 'City is Required';
        return false;
    }

    cityError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating 5 digit zipcode
function validateZip() {
    var zip = document.getElementById('contact-zip').value;
    
    if(zip.length == 0){
        zipError.innerHTML = 'Zipcode is Required';
        return false;
    }

    if(zip.length !== 5){
        zipError.innerHTML = 'Zip should be 5 digits';
        return false;
    }

    if(!zip.match(/^[0-9]{5}$/)){
        zipError.innerHTML = 'Only digits please';
        return false;
    }

    zipError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating phone number
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone # is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}
//validating correct format for email
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email is Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    return true;
}

//confirming that the emails match
function validateEmail() {
    const emailInput = document.getElementById("contact-email");
    const confirmEmailInput = document.getElementById("contact-confirmemail");
    const emailError = document.getElementById("email-error");
    const confirmEmailError = document.getElementById("confirmemail-error");
    
    if (emailInput.value !== confirmEmailInput.value) {
      emailError.innerHTML = "Email addresses do not match";
      confirmEmailError.innerHTML = "";
    } else {
      emailError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
      confirmEmailError.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    }
  }
  
  function validateConfirmemail() {
    validateEmail();
  }
//validating state
  function validateState() {
    const state = document.getElementById("state");
    if (state.value === "---") {
      alert("Please select a state.");
      return false;
    }
    return true;
  }

// showing what errors before submitting
function validateForm(){
    if(!validateName() || !validateLastname() || !validateAddress() || !validateCity() || !validateZip() || !validateState() || !validatePhone() || !validateEmail()) {
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }
    return true;
}

// Preventing the form to submit unless errors are completed
var form = document.getElementById('my-form');
form.addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
        return true;
    }
    // submit the form
});



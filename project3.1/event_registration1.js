/*
		Your Name: <Breanna Boer>
		Last Modified Date: <04/30/2023>
		File: event_registration1.js
		File Description: <File is to validate the form fields and provide time estimation for purchasing tickets. Will not allow a user to submit unless all fields are filled out correctly.>
*/

// Setting the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Setting the variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

// Setting the ticket price and maximum tickets per purchase
const ticketPrice = 5.00;
const ticketProcessingFee = 0.50;
const maxTicketsPerPurchase = 3;

// Getting the HTML elements
const numTicketsInput = document.getElementById("lastnum");
const totalCostLabel = document.getElementById("totalCost");
const nameLabel = document.getElementById("name");
const emailLabel = document.getElementById("email");
const numberErrorLabel = document.querySelector(".number-error");
const nameErrorLabel = document.querySelector(".name-error");
const emailErrorLabel = document.querySelector(".email-error");
const purchaseButton = document.createElement("button");
purchaseButton.innerHTML = "Purchase Tickets";
const form = document.querySelector('form');
const submitButton = document.querySelector ('#purchaseTickets');

// Setting the initial values
let numTickets = 0;
let totalCost = 0;
totalCostLabel.innerHTML = `$${totalCost.toFixed(2)}`;

// Adding the event listeners
numTicketsInput.addEventListener("input", updateTicketCost);
nameLabel.addEventListener("input", validateName);
emailLabel.addEventListener("input", validateEmail);
purchaseButton.addEventListener("click", purchaseTickets);

// Adding the Timer Function
var timer = 600;
var interval;

function startTimer() {
  interval = setInterval(function() {
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    var time = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("transactionTimer").innerHTML = time;
    timer--;
    if (timer < 0) {
      clearInterval(interval);
      document.getElementById("transactionTimer").innerHTML = "Time's up!";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  timer = 600;
  startTimer();
}

startTimer();

// Updating the Ticket Cost and Price
function updateTicketCost() {
  numTickets = parseInt(numTicketsInput.value);
  if (isNaN(numTickets) || numTickets < 1) {
    numTicketsInput.setCustomValidity("Please enter a valid number of tickets.");
    numberErrorLabel.innerHTML = "Please enter a valid number of tickets.";
    numTickets = 0;
  } else if (numTickets > maxTicketsPerPurchase) {
    numTicketsInput.setCustomValidity(`You cannot purchase more than ${maxTicketsPerPurchase} tickets at once.`);
    numberErrorLabel.innerHTML = `You cannot purchase more than ${maxTicketsPerPurchase} tickets at once.`;
    numTickets = maxTicketsPerPurchase;
  } else {
    numTicketsInput.setCustomValidity("");
    numberErrorLabel.innerHTML = "";
  }
  totalCost = numTickets * ticketPrice + ticketProcessingFee;
  totalCostLabel.innerHTML = `$${totalCost.toFixed(2)}`;
}

//Validating the Name Field
function validateName() {
  const nameField = document.getElementById("name");
  const nameErrorLabel = document.querySelector(".name-error");

  if (nameField.value.trim() === "") {
    nameField.classList.add("validate-error");
    nameErrorLabel.innerHTML = "Please enter your name.";
  } else {
    nameField.classList.remove("validate-error");
    nameErrorLabel.innerHTML = "";
  }
}

//Validating the Email Address
function validateEmail() {
  const emailField = document.getElementById("email");
  const emailErrorLabel = document.querySelector(".email-error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (emailField.value.trim() === "" || !emailPattern.test(emailField.value.trim())) {
    emailField.classList.add("validate-error");
    emailErrorLabel.innerHTML = "Please enter a valid email address.";
  } else {
    emailField.classList.remove("validate-error");
    emailErrorLabel.innerHTML = "";
  }
}

//Purchasing the Tickets
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (numTickets === 0 || nameLabel.value.trim() === "" || emailLabel.value.trim() === "") {
    alert("Please fill out all required fields and enter a valid number of tickets.");
  } else {
    alert(`Thank you for your purchase! Your total cost is $${totalCost.toFixed(2)}.`);
    clearInterval(timerInterval);
  }
});

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60).toString
}
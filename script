const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("final")
];

let currentStep = 0;

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get("name");
const messageParam = urlParams.get("message");

// Set custom values if present
if (nameParam) document.getElementById("name").textContent = decodeURIComponent(nameParam);
if (messageParam) document.getElementById("message").textContent = decodeURIComponent(messageParam);

// Click to reveal each step
document.querySelector(".card-container").addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep + 1].classList.remove("hidden");
    currentStep++;
  }
});

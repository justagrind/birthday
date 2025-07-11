const steps = [
  "🎉 Click to open your birthday card!",
  "🎂 Here's the next step!",
  "🎁 Ready for the gift?",
  "🎈 Final step! Have a great day!"
];

let currentStep = 0;
const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");

function updateCard() {
  front.textContent = steps[currentStep];
  back.textContent = steps[(currentStep + 1) % steps.length];
}

card.addEventListener("click", () => {
  card.classList.add("flipped");

  setTimeout(() => {
    currentStep = (currentStep + 1) % steps.length;
    updateCard();
    card.classList.remove("flipped");
  }, 800); // Duration matches CSS transition
});

updateCard();

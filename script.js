const check = document.querySelector(".check");
const message = document.querySelector(".message");
const again = document.querySelector(".again");

let random = Math.trunc(Math.random() * 20 + 1);
console.log(random);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = 20;
let highscore = 0;

check.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  console.log(guessInput, typeof guessInput);

  if (!guessInput) {
    displayMessage("⛔️ No number!");
  } else if (guessInput === random) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessInput !== random) {
    if (score > 1) {
      displayMessage(guessInput > random ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

function playAgain() {
  score = 20;
  random = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  localStorage.setItem(highscore, `${highscore.value}`);
}
again.addEventListener("click", playAgain);

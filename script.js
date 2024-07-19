const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceText.textContent = data.slip.advice;
    })
    .catch((error) => {
      adviceText.textContent = "Oops! Something went wrong.";
      console.error(error);
    });
}

generateBtn.addEventListener("click", fetchAdvice);

fetchAdvice();

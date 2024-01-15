const difficultySlider = document.getElementById("difficulty-slider");
const difficultyValue = document.getElementById("difficulty-value");

difficultySlider.addEventListener("input", () => {
  difficultyValue.textContent = difficultySlider.value;
});

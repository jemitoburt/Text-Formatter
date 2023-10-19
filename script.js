document
  .getElementById("inputText")
  .addEventListener("input", updateCharacterCount);
document.getElementById("fontSize").addEventListener("change", formatText);
document.getElementById("lineHeight").addEventListener("change", formatText);
document.getElementById("fontChoice").addEventListener("change", formatText);

function formatText() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");
  const fontSize = document.getElementById("fontSize").value;
  const lineHeight = document.getElementById("lineHeight").value;
  const fontChoice = document.getElementById("fontChoice").value;

  outputText.style.fontSize = fontSize + "px";
  outputText.style.lineHeight = lineHeight;
  outputText.style.fontFamily = fontChoice;

  outputText.value = inputText;
}

function updateCharacterCount() {
  formatText(); // Aby se text aktualizoval při jakémkoli vstupu

  const inputText = document.getElementById("inputText").value;
  const count = (inputText.match(/[^ ]/g) || []).length; // Počet všech znaků kromě mezer
  const counterDisplay = document.getElementById("charCount");

  counterDisplay.innerText = `Počet znaků (bez mezer): ${count}`;
}

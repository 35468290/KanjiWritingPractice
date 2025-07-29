let guideOn = true;

function toggleGuide() {
  guideOn = !guideOn;
  document.getElementById("guideStatus").textContent = guideOn ? "ON" : "OFF";
}

function deleteAll() {
  alert("Delete All clicked (not yet functional).");
}

function showStats() {
  alert("Stats clicked: 人 - 3 (placeholder).");
}

function goBack() {
  alert("Back button clicked (not yet functional).");
}

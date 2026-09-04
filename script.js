document.getElementById("riskForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stops the page from reloading

  // Read values from the form
  const rainfall = parseFloat(document.getElementById("rainfall").value);
  const soilMoisture = parseFloat(document.getElementById("soilMoisture").value);
  const groundMovement = parseFloat(document.getElementById("groundMovement").value);
  const slopeAngle = parseFloat(document.getElementById("slope").value);

  // Same formula as your Python code
  const riskScore = (rainfall * 0.4) + (soilMoisture * 0.3) + (groundMovement * 0.2) + (slopeAngle * 0.1);

  let riskLevel;
  if (riskScore >= 80) {
    riskLevel = "Very High Risk";
  } else if (riskScore >= 50) {
    riskLevel = "Moderate Risk";
  } else {
    riskLevel = "Low Risk";
  }

  // Display results on the page
  document.getElementById("resultScore").textContent = "Risk Score: " + riskScore.toFixed(2);
  document.getElementById("resultLevel").textContent = "Risk Level: " + riskLevel;
});
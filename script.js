function readSensor() {
  // Simulate temperature between 20°C and 50°C
  const temperature = Math.floor(Math.random() * 31) + 20;

  const output = document.getElementById("output");

  if (temperature >= 40) {
    output.innerHTML = `⚠️ Temperature is <span style="color:red">${temperature}°C</span> — Overheating!`;
  } else {
    output.innerHTML = `✅ Temperature is <span style="color:green">${temperature}°C</span> — Normal`;
  }
}

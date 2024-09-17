// JavaScript to update the threshold value dynamically
document
  .getElementById("threshold-slider")
  .addEventListener("input", function () {
    document.getElementById("threshold-value").textContent = this.value;
  });

var map = L.map("map").setView([51.505, -0.09], 13); // Initial map view, coordinates of London

// Add a tile layer to the map (OpenStreetMap in this case)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo;

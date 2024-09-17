//Change the threshold value
document
  .getElementById("threshold-slider")
  .addEventListener("input", function () {
    document.getElementById("threshold-value").textContent = this.value;
  });


  // Add the draw polygon button listener
  document.getElementById("draw-polygon").addEventListener("click", function() {
    // Programmatically activate polygon drawing mode
    drawPolygon();
});

// Function to activate polygon drawing
function drawPolygon() {
    var polygonDrawer = new L.Draw.Polygon(map, drawControl.options.polygon);
    polygonDrawer.enable();  // Trigger polygon drawing mode
}


//Getting the map intilised
    // Initial map view, coordinates of India
    var map = L.map("map").setView([31.2850, 75.7030], 13); 

    // Add a tile layer to the map (OpenStreetMap in this case)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add the draw control to the map
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
    edit: {
    featureGroup: drawnItems
    },
    draw: {
      polygon: true,  // Enable drawing polygons
      polyline: false, // Disable other drawing tools if not needed
      circle: false,
      rectangle: false,
      marker: false,
      circlemarker: false
    }
  });
  
  map.addControl(drawControl);


  // Event listener for when a shape is drawn on the map
  map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'polygon') {
      // Get the coordinates of the polygon
      var coordinates = layer.getLatLngs();
      console.log('Polygon coordinates:', coordinates);
      // Coordinates will be in the form of an array of LatLng points
    }

    // Add the drawn polygon to the map
    drawnItems.addLayer(layer);
  });

//   Extracting the Coordinates:
var coordinates = layer.getLatLngs();
  coordinates[0].forEach(function(coord) {
  console.log('Lat: ' + coord.lat + ', Lng: ' + coord.lng);
});


// Downloading the Leafdata
const downloadGeoJSON = document.getElementById('downloadGeoJSON');
const downloadShapefile = document.getElementById('downloadShapefile');
 // Function to ensure only one checkbox is selected between the two download options
 function onlyOne(checkbox) {
  [downloadGeoJSON, downloadShapefile].forEach((item) => {
      if (item !== checkbox) item.checked = false;
  });
}
// Attach event listeners
downloadGeoJSON.addEventListener('change', function() {
  onlyOne(downloadGeoJSON);
});    
downloadShapefile.addEventListener('change', function() {
  onlyOne(downloadShapefile);
});
        

        
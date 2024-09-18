

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const submitButton = document.getElementById("btn-date");


// Set default date to today
endDateInput.valueAsDate = new Date()

let flag = 1;
 // Function to handle the button click
 submitButton.addEventListener("click", function() {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
}); 




startDate = convertDateFormat(startDate);
endDate = convertDateFormat(endDate);

function convertDateFormat(dateString) {
    // Split the input date string by the hyphen
    const parts = dateString.split('-');
    
    // Check if the input is valid
    if (parts.length !== 3) {
        throw new Error("Invalid date format. Please use DD-MM-YYYY.");
    }
    
    // Rearrange the parts to YYYY-MM-DD format
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    
    return formattedDate;
}


// Initialize the GEE API
var coordinatesArray = [
    {longitude: 75.67232859638825, latitude: 31.24932150388752},
    {longitude: 75.69155508703206, latitude: 31.27201710062522},
    {longitude: 75.69155508703206, latitude: 31.27201710062522},
    {longitude: 75.73055740919686, latitude: 31.247286455177242},
    {longitude: 75.6834982900663, latitude: 31.230065091256748}
];

// Convert coordinates to array format [longitude, latitude]
var polygonCoords = coordinatesArray.map(function(coord) {
    return [coord.longitude, coord.latitude];
  });
  
  // Close the polygon by adding the first point to the end
  polygonCoords.push([coordinatesArray[0].longitude, coordinatesArray[0].latitude]);
  
  // Create a GEE Polygon geometry from the coordinates
  var AOI = ee.Geometry.Polygon([polygonCoords]);
  
  print('AOI Polygon:', AOI);



  


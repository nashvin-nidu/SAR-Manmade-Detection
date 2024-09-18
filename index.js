//Backend

const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Directory where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage: storage });

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// Upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Google Earth Integration 
const ee = require('@google/earthengine');

// Initialize Earth Engine API (make sure to authenticate first)
ee.initialize();

// Function to fetch SAR image from GEE
async function fetchSARImage() {
    const image = ee.Image('COPERNICUS/S1_GRD/20200101T000000_20200101T000000_001234_001234_123456'); // Example image ID
    const url = await image.getThumbURL({ format: 'png', dimensions: '512x512' });
    return url;
}
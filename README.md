# SAR-Manmade-Detection
Synthetic Aperture Radar

Change detection between two SAR (Synthetic Aperture Radar) satellite images.

In this project, I developed a solution to detect man-made changes while filtering out natural changes (e.g., water bodies, floods, snow cover, etc.). The solution uses Sentinel-1 SAR open-source satellite images and the Google Earth Engine platform to process and analyze data. Key features of the project include:

-> Co-registered SAR image processing
-> Scalable solutions for large areas of interest
-> Generation of geographically referenced vector files for change outputs
-> Customizable thresholds for filtering change results


SAR Change Detection Project
Overview
This project focuses on detecting changes in Synthetic Aperture Radar (SAR) images to identify man-made versus environmental changes. By leveraging Sentinel-1 data and Google Earth Engine (GEE), the project processes and analyzes SAR imagery to create an efficient detection algorithm with minimized false positives.

Features
SAR Image Retrieval: Fetches SAR images from Google Earth Engine for specified Areas of Interest (AOIs).
Preprocessing: Applies advanced speckle filtering, radiometric calibration, and terrain correction.
Change Detection Algorithms: Implements robust techniques like log ratio differencing and Change Vector Analysis (CVA).
Machine Learning Integration: Utilizes classifiers to distinguish man-made changes from environmental changes.
Output in Vector Formats: Generates results as GeoJSON or shapefiles for geospatial visualization.
Visualization: Displays detected changes using Leaflet.js and offers downloadable results.
Technology Stack
Backend: Node.js with express, integrated with Google Earth Engine API.
Frontend: Leaflet.js for interactive map visualization.
Data Processing: Google Earth Engine, Python scripts for preprocessing (optional).
Machine Learning: Random Forest or SVM for post-processing classification.



<----This is in building Phase---->

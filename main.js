const img = document.getElementById("rgbLogo");
const canvas = document.getElementById("rgbCanvas");
const ctx = canvas.getContext("2d");
//
// Set canvas size to match the image
canvas.width = img.width;
canvas.height = img.height;

// Draw the image on the canvas
ctx.drawImage(img, 0, 0);

// Get image data
let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imageData.data;

// Apply rainbow effect by cycling through RGB
let rainbowColors = [
    [255, 0, 0],    // Red
    [255, 127, 0],  // Orange
    [255, 255, 0],  // Yellow
    [0, 255, 0],    // Green
    [0, 0, 255],    // Blue
    [75, 0, 130],   // Indigo
    [238, 130, 238] // Violet
];

// Cycle through rainbow colors for each pixel
for (let i = 0; i < data.length; i += 4) {
    let colorIndex = Math.floor((i / 4) % rainbowColors.length); // Cycle through the rainbow
    let [r, g, b] = rainbowColors[colorIndex];

    data[i] = r;     // Red
    data[i + 1] = g; // Green
    data[i + 2] = b; // Blue
    // Alpha (data[i + 3]) remains unchanged
}

// Put modified data back onto the canvas
ctx.putImageData(imageData, 0, 0);

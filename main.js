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

let red = Math.round(0 * 255);
let green = Math.round(1 * 255);
let blue = Math.round(0 * 255);

// Apply custom RGB color to entire image
for (let i = 0; i < data.length; i += 4) {
    data[i] = red;   // Red
    data[i + 1] = green; // Green
    data[i + 2] = blue;  // Blue
    // Alpha (data[i + 3]) remains unchanged
}
// Put modified data back to canvas
ctx.putImageData(imageData, 0, 0);

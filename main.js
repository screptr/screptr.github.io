const img = document.getElementById("rgbLogo");
const canvas = document.getElementById("rgbCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the image
canvas.width = img.width;
canvas.height = img.height;

// Draw the image on the canvas
ctx.drawImage(img, 0, 0);

// Get image data
let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let data = imageData.data;

// Apply color (1,0,0) as an RGB filter (red channel max, green & blue off)
for (let i = 0; i < data.length; i += 4) {
    data[i] = 255;  // Red (1 * 255)
    data[i + 1] = 0; // Green (0 * 255)
    data[i + 2] = 0; // Blue (0 * 255)
    // Alpha (data[i + 3]) remains unchanged
}
// Put modified data back to canvas
ctx.putImageData(imageData, 0, 0);

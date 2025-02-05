const image = document.getElementsByTagName('screptyLogo');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = image.width;
canvas.height = image.height;
ctx.drawImage(image, 0, 0);

// Get the pixel data
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imageData.data;

// Manipulate the pixel data
for (let i = 0; i < pixels.length; i += 4) {
  // Adjust red, green, and blue values
  pixels[i] = pixels[i] + 50; // Red
  pixels[i + 1] = pixels[i + 1] - 50; // Green
  pixels[i + 2] = pixels[i + 2] * 0.5; // Blue
}

// Update the canvas
ctx.putImageData(imageData, 0, 0);
